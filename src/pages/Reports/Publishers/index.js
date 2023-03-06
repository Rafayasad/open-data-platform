import React, { memo, useCallback, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { getPublishersReport } from "../../../axios/api";
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

const Publishers = memo(() => {

    const [publisher, setPublisher] = useState();
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
            title: "Users",
            onClick: (val) => {
                setSelectedTab(val)
            }
        }
    ]

    useEffect(() => {
        getPublishersReport(setPublisher, {
            enddate: "all",
            startdate: "all",
            datatype: "json",
            date_type: 'updated',
            publisher: ""
        }, setLoading)
    }, []);

    const onChangePage = useCallback((page) => setCurrentPage(page), [currentPage]);

    const onClickFilter = useCallback(() => setFilterOpen(!filterOpen), [filterOpen]);
    const onApplyFilters = useCallback((obj) => setFilters(obj), []);

    return (
        <>
            <Navbar theme='dark' />
            <ReportsFilter open={filterOpen} setOpen={setFilterOpen} appliedFilters={filters} onApplyFilters={onApplyFilters} />
            <Container className="my-5 pt-5">
                <Header title="Publishers Reports" onClickFilter={onClickFilter} />
                <Tabs data={tabs} selected={selectedTab} />
                <AppliedFilters filters={filters}
                />
                <Table
                    data={publisher && [publisher]}
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