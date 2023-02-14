import React, { memo, useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getAllApplications } from "../../axios/api";
import Pagination from "../../components/elements/Pagination";
import Main from "../../components/modules/Applications/Main";
import Cards from "../../components/modules/Cards";
import Navbar from '../../components/modules/Navbar';
import UpperFooter from "../../components/modules/Footer/UpperFooter";
import MiddleFooter from "../../components/modules/Footer/MiddleFooter";
import LowerFooter from '../../components/modules/Footer/LowerFooter';

const Applications = memo(() => {

    const { t } = useTranslation()

    const [applications, setApplications] = useState();

    const [totalCount, setTotalCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const onChangePage = useCallback((page) => setCurrentPage(page), [])

    useEffect(() => {
        getAllApplications(setApplications);
    }, [])

    return (
        <>
            <Navbar theme='dark' />
            <div className="my-5 py-5">
                <Main />
                <Cards type="image-outer-text" data={applications} />
            </div>
            <UpperFooter title={t("GetMore")} button={t("registerNow")} />
            <MiddleFooter />
            <LowerFooter />
        </>
    )
})

export default Applications;