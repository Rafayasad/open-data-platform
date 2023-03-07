import React, { memo, useCallback, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { getPublishersReport } from "../../../axios/api";
import { useTranslation } from "react-i18next";
import { locales } from "../../../i18n/helper";
import { useSelector } from "react-redux";
import Table from "../../../components/elements/Table";
import LowerFooter from "../../../components/modules/Footer/LowerFooter";
import MiddleFooter from "../../../components/modules/Footer/MiddleFooter";
import Navbar from "../../../components/modules/Navbar";
import AppliedFilters from "../../../components/modules/Reports/AppliedFilters";
import Header from "../../../components/modules/Reports/Header";
import Tabs from "../../../components/modules/Reports/Tabs";
import ReportsFilter from '../../../components/modules/Reports/Filter';

const Publishers = memo(() => {

    const { t, i18n } = useTranslation();
    
    const publishers = useSelector((state) => state.facets.publishers);

    const [publisherData, setPublishersData] = useState();
    const [filters, setFilters] = useState();
    const [selectedTab, setSelectedTab] = useState("All");

    const [datatype, setDatatype] = useState();
    const [totalCount, setTotalCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const [loading, setLoading] = useState(true);

    const [filterOpen, setFilterOpen] = useState(false);

    let tabs = [
        {
            title: "All",
            onClick: (val) => {
                setFilters({ date_type: "Modified" })
                setSelectedTab(val)
            }
        },
        {
            title: "Users",
            onClick: (val) => {
                setFilters({ type: "user" })
                setSelectedTab(val)
            }
        }
    ]

    const AccordinData = [
        {
            title: t("publisher"),
            tags: i18n.language === locales.AR ? publishers && publishers.ar : publishers && publishers.en
        }
    ]

    const datatypeCallback = (datatype) => {
        setDatatype(datatype)
    }

    useEffect(() => {
        getPublishersReport(setPublishersData, {
            startdate: filters?.start_date ? filters.start_date : "all",
            enddate: filters?.end_date ? filters.end_date : "all",
            date_type: filters?.date_type ? filters.date_type : "modified",
            datatype: datatype ? datatype : "json",
            type: filters?.type ? filters.type : "all",
            publisher: filters?.publisher ? filters.publisher : "",
            perpage: rowsPerPage,
            pagenumber: currentPage
        }, setLoading, setTotalCount, datatype, setDatatype)
    }, [filters, currentPage, datatype]);

    const onChangePage = useCallback((page) => setCurrentPage(page), [currentPage]);

    const onClickFilter = useCallback(() => setFilterOpen(!filterOpen), [filterOpen]);
    const onApplyFilters = useCallback((obj) => setFilters(obj), []);

    return (
        <>
            <Navbar theme='dark' />
            <ReportsFilter accordinData={AccordinData} open={filterOpen} setOpen={setFilterOpen} appliedFilters={filters} onApplyFilters={onApplyFilters} />
            <Container className="my-5 pt-5">
                <Header title="Publishers Reports" onClickFilter={onClickFilter} datatypeCallback={datatypeCallback} />
                <Tabs data={tabs} selected={selectedTab} />
                <AppliedFilters filters={filters}
                />
                <Table
                    data={publisherData}
                    currentPage={currentPage}
                    totalCount={Math.ceil(totalCount / rowsPerPage)}
                    onChange={onChangePage}
                />
            </Container>
            <MiddleFooter />
            <LowerFooter />
        </>
    )
});

export default Publishers;