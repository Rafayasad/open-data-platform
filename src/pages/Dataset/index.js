import React, { memo, useCallback, useEffect, useState } from "react";
import Cards from "../../components/modules/Cards";
import Main from "../../components/modules/Dataset/Main";
import DatasetList from "../../components/modules/Dataset/DatasetList";
import { colors } from "../../utils/colors";
import { getAllDatasets, getMostViewedDatasets, getRecentsDatasets, getSearch } from "../../axios/api";
import { useLocation, useNavigate } from "react-router-dom";
import { routes } from "../../router/helper";
import { useTranslation } from "react-i18next";
import { locales } from "../../i18n/helper";
import View from "../../components/modules/View";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/reducers/Facets";
import { isDuplicates } from "../../utils/generic";

const Dataset = memo(() => {

    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();
    const storedFilters = useSelector((state) => state.facets.filter);
    const { datasetsSuggestion } = useSelector((state) => state.facets);

    const navigate = useNavigate();
    const { state, pathname, search } = useLocation();
    const datasetsDiv = document.getElementById("datasetsList");

    const [totalCount, setTotalCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const [recentsDatasets, setRecentsDatasets] = useState();
    const [datasets, setDatasets] = useState();
    const [mostViewdDatasets, setMostViewdDatasets] = useState();
    const [searchValue, setSearchValue] = useState("");
    const [sort, setSort] = useState("Modified");
    const [filters, setFilters] = useState([]);

    const [loading, setLoading] = useState(false);
    const [viewAll, setViewAll] = useState(false);

    const topics = useSelector((state) => state.facets.topics);
    const publishers = useSelector((state) => state.facets.publishers);
    const tags = useSelector((state) => state.facets.tags);

    const data = [
        {
            title: t("publisher"),
            tags: i18n.language === locales.AR ? publishers && isDuplicates(publishers?.ar) : publishers && publishers.en
        },
        {
            title: t("topics"),
            tags: i18n.language === locales.AR ? topics && topics.ar : topics && topics.en
        },
        {
            title: t("tags"),
            tags: i18n.language === locales.AR ? tags && tags.ar : tags && tags.en
        }
    ]

    const urlParams = new URLSearchParams(search);

    const most_viewed_datasets = urlParams.get('id');

    useEffect(() => {
        setSearchValue("")
        // dispatch(setFilter(null))
        // setFilters()
        setCurrentPage(1)
        i18n.language === locales.AR ? setSort("الأكثر تحميلا") : setSort("Modified")
    }, [i18n.language])

    const focustoDatasets = () => {
        datasetsDiv?.scrollIntoView();
        // setTimeout(() => {
        //     window.scrollBy(0, -2)
        // }, 500);
    }


    useEffect(() => {
        if (storedFilters) {
            setFilters(storedFilters)
        }
    }, [])

    useEffect(() => {

        if (state && state.search) {
            setSearchValue(state.search)
        }

        if (state && state.listItem && state.listItem.length > 0) {
            dispatch(setFilter(state.listItem))
            setFilters(state.listItem)
        }

        if (!most_viewed_datasets) {
            if (state) {
                navigate(pathname, { replace: true, state: null })
                getAllDatasets(setDatasets, setTotalCount, setLoading, state.search ? state.search : "", sort === "العنوان" ? "title" : sort?.toLowerCase(), currentPage, rowsPerPage, state && state.listItem && state.listItem.length > 0 ? state.listItem : [], i18n.language)
            }
        }

        if (!most_viewed_datasets) {
            setDatasets()
            getRecentsDatasets(setRecentsDatasets);
        }

    }, [!most_viewed_datasets, sort]);

    useEffect(() => {
        if (most_viewed_datasets) {
            getMostViewedDatasets(setDatasets, setTotalCount, searchValue, setLoading, rowsPerPage, currentPage, i18n.language)
        }
    }, [currentPage, searchValue, i18n.language])


    useEffect(() => {
        if (!most_viewed_datasets) {
            if (currentPage || searchValue || sort || storedFilters) {
                if (!state?.search && !state?.listItem) {
                    getAllDatasets(setDatasets, setTotalCount, setLoading, searchValue, sort === "العنوان" ? "title" : sort?.toLowerCase(), currentPage, rowsPerPage, storedFilters, i18n.language)
                }
            }
        }
    }, [currentPage, searchValue, sort, storedFilters, !most_viewed_datasets]);

    const toggle = useCallback(() => setViewAll(!viewAll), [viewAll]);

    const onClickCard = useCallback((id) => {
        navigate(`${routes.DATASET_DETAIL}?id=${id}`)
    }, []);

    const onChangePage = useCallback((page) => {
        setCurrentPage(page);
    }, [currentPage]);

    const onChangeSearch = useCallback((e) => {
        setSearchValue(e)
        if (e) {
            focustoDatasets()
        }
    }, [searchValue])

    const onChangeDropdownValue = useCallback((e) => {
        setSort(e)
    }, [sort])

    const onApplyFilter = useCallback((filters) => {
        setCurrentPage(1)
        dispatch(setFilter([...filters]))
        setFilters([...filters])
    }, [filters])

    const onDeleteFilter = useCallback((filter) => {

        if (filter) {
            let arr = [...filters];
            let index = filters.findIndex(item => item.title === filter.title)
            arr.splice(index, 1)
            setFilters([...arr])
            dispatch(setFilter([...arr]))
        }

    }, [filters])

    return (
        <View theme="dark" footerTitle={t("GetMore")} footerButton={t("registerNow")}>
            <Main
                nofilter={most_viewed_datasets}
                filterData={data}
                searchData={i18n.language === locales.AR ? datasetsSuggestion?.ar : datasetsSuggestion?.en}
                search={searchValue}
                onChangeSearchEnter={onChangeSearch}
                filter={filters}
                onApplyFilter={onApplyFilter}
                onDeleteFilter={onDeleteFilter} />
            {
                !most_viewed_datasets && searchValue === "" && (!storedFilters || storedFilters.length < 1 || storedFilters === null) &&
                <Cards
                    dropdownWidth={"55%"}
                    notagsactive
                    buttonText={viewAll && t("viewLess")}
                    onClickViewAll={toggle}
                    title={t("featuredDatasets")}
                    hoverable="primary"
                    backgroundColor={colors.white}
                    data={viewAll ? recentsDatasets : recentsDatasets?.slice(0, 3)}
                    onClick={onClickCard} />
            }
            <div id="datasetsList">
                <DatasetList
                    nocount
                    title={most_viewed_datasets ? t("mostViewedDatasets") : t("datasets")}
                    notagsactive
                    totalCount={totalCount}
                    rowsPerPage={rowsPerPage}
                    datasets={datasets}
                    currentPage={currentPage}
                    loading={loading}
                    nodropdown={most_viewed_datasets}
                    onChangePage={(page) => {
                        datasetsDiv.scrollIntoView(true);
                        onChangePage(page)
                    }}
                    selectedValue={sort}
                    onClick={onClickCard}
                    onSelectDropdown={onChangeDropdownValue}
                    minWidth={"70%"}
                />
            </div>
        </View>

    )
})

export default Dataset;