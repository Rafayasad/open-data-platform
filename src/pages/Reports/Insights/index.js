import React, { memo, useCallback, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { getInsightsReport } from "../../../axios/api";
import Table from "../../../components/elements/Table";
import LowerFooter from "../../../components/modules/Footer/LowerFooter";
import MiddleFooter from "../../../components/modules/Footer/MiddleFooter";
import Navbar from "../../../components/modules/Navbar";
import AppliedFilters from "../../../components/modules/Reports/AppliedFilters";
import Header from "../../../components/modules/Reports/Header";
import Tabs from "../../../components/modules/Reports/Tabs";
import ReportsFilter from '../../../components/modules/Reports/Filter';
import Reports from "..";
import dayjs from "dayjs";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { locales } from "../../../i18n/helper";
// import { generateFile } from '../../../../src/utils/generic';

const Insights = memo(() => {

    const { t, i18n } = useTranslation();

    const topics = useSelector((state) => state.facets.topics);
    const publishers = useSelector((state) => state.facets.publishers);

    const [insights, setInsights] = useState();
    const [filters, setFilters] = useState();
    const [selectedTab, setSelectedTab] = useState("All");

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
            title: "Weekly",
            onClick: (val) => {
                setFilters({ ...filters, end_date: dayjs().format('YYYY-MM-DD'), start_date: dayjs().subtract(1, 'week').format('YYYY-MM-DD') })
                setSelectedTab(val)
            }
        },
        {
            title: "Monthly",
            onClick: (val) => {
                setFilters({ ...filters, end_date: dayjs().format('YYYY-MM-DD'), start_date: dayjs().subtract(1, 'month').format('YYYY-MM-DD') })
                setSelectedTab(val)
            }
        },
        {
            title: "Quarterly",
            onClick: (val) => {
                setFilters({ ...filters, end_date: dayjs().format('YYYY-MM-DD'), start_date: dayjs().subtract(3, 'month').format('YYYY-MM-DD') })
                setSelectedTab(val)
            }
        },
        {
            title: "Yearly",
            onClick: (val) => {
                setFilters({ ...filters, end_date: dayjs().format('YYYY-MM-DD'), start_date: dayjs().subtract(1, 'year').format('YYYY-MM-DD') })
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
        setFilters({ datatype: datatype })
    }

    useEffect(() => {
        getInsightsReport(setInsights, {
            enddate: filters?.end_date ? filters.end_date : "all",
            startdate: filters?.start_date ? filters.start_date : "all",
            datatype: filters?.datatype ? filters.datatype : "json",
            date_type: filters?.date_type ? filters.date_type : "updated",
            publisher: filters?.publisher ? filters.publisher : ""
        }, setLoading)
    }, [selectedTab, filters?.datatype, filters?.date_type, filters?.publisher]);

    console.log("insights", insights);

    const onChangePage = useCallback((page) => setCurrentPage(page), [currentPage]);

    const onClickFilter = useCallback(() => setFilterOpen(!filterOpen), [filterOpen]);
    const onApplyFilters = useCallback((obj) => setFilters(obj), []);

    return (
        <>
            <Navbar theme='dark' />
            <ReportsFilter accordinData={AccordinData} open={filterOpen} setOpen={setFilterOpen} appliedFilters={filters} onApplyFilters={onApplyFilters} />
            <Container className="my-5 pt-5">
                <Header title="Insights Reports" onClickFilter={onClickFilter} datatypeCallback={datatypeCallback} />
                <Tabs data={tabs} selected={selectedTab} />
                <AppliedFilters filters={filters}
                />
                <Table
                    data={insights && [insights]}
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

export default Insights;