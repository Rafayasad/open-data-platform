import React, { memo, useCallback, useEffect, useState } from "react";
import Navbar from '../../components/modules/Navbar';
import Cards from "../../components/modules/Cards";
import Main from "../../components/modules/Dataset/Main";
import UpperFooter from '../../components/modules/Footer/UpperFooter';
import MiddleFooter from '../../components/modules/Footer/MiddleFooter';
import LowerFooter from '../../components/modules/Footer/LowerFooter';
import DatasetList from "../../components/modules/Dataset/DatasetList";
import { colors } from "../../utils/colors";
import { getAllDatasets, getRecentsDatasets } from "../../axios/api";
import { useLocation, useNavigate } from "react-router-dom";
import { routes } from "../../router/helper";
import { useTranslation } from "react-i18next";

const Dataset = memo(() => {

    const { t } = useTranslation();

    const navigate = useNavigate();
    const { state } = useLocation();

    const [totalCount, setTotalCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const [recentsDatasets, setRecentsDatasets] = useState();
    const [datasets, setDatasets] = useState();
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("Title");
    const [filters, setFilters] = useState();

    const [loading, setLoading] = useState(false);

    useEffect(() => {

        getRecentsDatasets(setRecentsDatasets);

        if (state && state.search) {
            setSearch(state.search)
        }

    }, []);

    useEffect(() => { getAllDatasets(setDatasets, setTotalCount, setLoading, search, sort.toLowerCase(), currentPage, rowsPerPage, filters) }, [currentPage, search, sort, filters]);

    const onClickCard = useCallback((id) => { navigate(`${routes.DATASET_DETAIL}?id=${id}`) }, []);

    const onChangePage = useCallback((page) => setCurrentPage(page), []);

    const onChangeSearch = useCallback((e) => setSearch(e), [search])

    const onChangeDropdownValue = useCallback((e) => setSort(e), [sort])

    const onSelectFilterItems = useCallback((filters) => setFilters(filters), [filters])

    return (
        <>
            <Navbar theme={'dark'} />
            <Main search={search} onChangeSearch={onChangeSearch} onSelectedFilters={onSelectFilterItems} />
            <Cards title={t("featuredDatasets")} hoverable="primary" backgroundColor={colors.white} data={recentsDatasets} onClick={onClickCard} />
            <DatasetList totalCount={totalCount} rowsPerPage={rowsPerPage} datasets={datasets} currentPage={currentPage} loading={loading} onChangePage={onChangePage} selectedValue={sort} onClick={onClickCard} onSelectDropdown={onChangeDropdownValue} />
            <UpperFooter title={t("GetMore")} button={t("registerNow")} />
            <MiddleFooter />
            <LowerFooter />
        </>
    )
})

export default Dataset;