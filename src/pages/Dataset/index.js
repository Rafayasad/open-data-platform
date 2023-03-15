import React, { memo, useCallback, useEffect, useState } from "react";
import Cards from "../../components/modules/Cards";
import Main from "../../components/modules/Dataset/Main";
import DatasetList from "../../components/modules/Dataset/DatasetList";
import { colors } from "../../utils/colors";
import { getAllDatasets, getRecentsDatasets, getSearch } from "../../axios/api";
import { useLocation, useNavigate } from "react-router-dom";
import { routes } from "../../router/helper";
import { useTranslation } from "react-i18next";
import { locales } from "../../i18n/helper";
import View from "../../components/modules/View";

const Dataset = memo(() => {

    const { t, i18n } = useTranslation();

    const navigate = useNavigate();
    const { state, pathname } = useLocation();
    const datasetsDiv = document.getElementById("datasetsList");

    const [totalCount, setTotalCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const [recentsDatasets, setRecentsDatasets] = useState();
    const [datasets, setDatasets] = useState();
    const [search, setSearch] = useState("");
    const [searchData, setSearchData] = useState([]);
    const [sort, setSort] = useState("Modified");
    const [filters, setFilters] = useState([]);

    const [loading, setLoading] = useState(false);
    const [viewAll, setViewAll] = useState(false);

    useEffect(() => {
        setFilters();
        i18n.language === locales.AR ? setSort("تم التعديل") : setSort("Modified")
    }, [i18n.language])

    const focustoDatasets = () => {
        datasetsDiv?.scrollIntoView();
        setTimeout(() => {
            window.scrollBy(0, -8)
        }, 500);
    }

    useEffect(() => {

        getSearch(setSearchData);
        getRecentsDatasets(setRecentsDatasets);

        if (state && state.search) {
            setSearch(state.search)
        }

        if (state && state.listItem && state.listItem.length > 0) {
            setFilters(state.listItem)
        }

        if (state) {
            navigate(pathname, { replace: true, state: null })
            getAllDatasets(setDatasets, setTotalCount, setLoading, state.search ? state.search : "", sort?.toLowerCase(), currentPage, rowsPerPage, state && state.listItem && state.listItem.length > 0 ? state.listItem : [])
        }

    }, []);

    useEffect(() => {
        if (currentPage || search || sort || filters) {
            if (!state?.search && !state?.listItem) {
                getAllDatasets(setDatasets, setTotalCount, setLoading, search, sort === "العنوان" ? "title" : sort?.toLowerCase(), currentPage, rowsPerPage, filters)
            }
        }

    }, [currentPage, search, sort, filters]);

    const toggle = useCallback(() => setViewAll(!viewAll), [viewAll]);

    const onClickCard = useCallback((id) => {
        setFilters()
        navigate(`${routes.DATASET_DETAIL}?id=${id}`)
    }, []);

    const onChangePage = useCallback((page) => {
        setCurrentPage(page);
    }, [currentPage]);

    const onChangeSearch = useCallback((e) => {
        setSearch(e)
        if (e) {
            focustoDatasets()
        }
    }, [search])

    const onChangeDropdownValue = useCallback((e) => {
        setSort(e)
    }, [sort])

    const onApplyFilter = useCallback((filters) => setFilters([...filters]), [filters])

    const onDeleteFilter = useCallback((filter) => {

        if (filter) {
            let arr = [...filters];
            let index = filters.findIndex(item => item.title === filter.title)
            arr.splice(index, 1)
            setFilters([...arr])
        }

    }, [filters])

    return (
        <View theme="dark" footerTitle={t("GetMore")} footerButton={t("registerNow")}>
            <Main searchData={i18n.language === locales.EN ? searchData?.en : searchData?.ar} search={search} onChangeSearchEnter={onChangeSearch} filter={filters} onApplyFilter={onApplyFilter} onDeleteFilter={onDeleteFilter} />
            <Cards notagsactive buttonText={viewAll && t("viewLess")} onClickViewAll={toggle} title={t("featuredDatasets")} hoverable="primary" backgroundColor={colors.white} data={viewAll ? recentsDatasets : recentsDatasets?.slice(0, 3)} onClick={onClickCard} />
            <div id="datasetsList">
                <DatasetList notagsactive totalCount={totalCount} rowsPerPage={rowsPerPage} datasets={datasets} currentPage={currentPage} loading={loading} onChangePage={onChangePage} selectedValue={sort} onClick={onClickCard} onSelectDropdown={onChangeDropdownValue} />
            </div>
        </View>

    )
})

export default Dataset;