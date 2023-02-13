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
import { useNavigate } from "react-router-dom";
import { routes } from "../../router/helper";

const Dataset = memo(() => {

    const navigate = useNavigate();

    const [totalCount, setTotalCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const [recentsDatasets, setRecentsDatasets] = useState();
    const [datasets, setDatasets] = useState();
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("Title");

    const [loading, setLoading] = useState(false);

    useEffect(() => { getRecentsDatasets(setRecentsDatasets) }, []);

    useEffect(() => { getAllDatasets(setDatasets, setTotalCount, setLoading, search, sort.toLowerCase(), currentPage, rowsPerPage) }, [currentPage, search, sort]);

    const onClickCard = useCallback((id) => { navigate(`${routes.DATASET_DETAIL}?id=${id}`) }, []);

    const onChangePage = useCallback((page) => setCurrentPage(page), []);

    const onChangeSearch = useCallback((e) => setSearch(e), [search])

    const onChangeDropdownValue = useCallback((e) => setSort(e), [sort])

    return (
        <>
            <Navbar theme={'dark'} />
            <Main onChangeSearch={onChangeSearch} />
            <Cards title="Featured datasets" hoverable="primary" backgroundColor={colors.white} data={recentsDatasets} onClick={onClickCard} />
            <DatasetList totalCount={totalCount} rowsPerPage={rowsPerPage} datasets={datasets} currentPage={currentPage} loading={loading} onChangePage={onChangePage} selectedValue={sort} onClick={onClickCard} onSelectDropdown={onChangeDropdownValue} />
            <UpperFooter title="Get more from Abu Dhabi Data" button="Register Now" />
            <MiddleFooter />
            <LowerFooter />
        </>
    )
})

export default Dataset;