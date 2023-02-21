import React, { memo, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Pagination from "../../../../elements/Pagination";
import Table from "../../../../elements/Table";
import Tabs from "../../Tabs";

const Main = memo((props) => {

    const { data } = props;

    const [selectedTab, setSelectedTab] = useState("All")

    let tabs = [
        {
            title: "All",
            onClick: (val) => setSelectedTab(val)
        },
        {
            title: "Weekly",
            onClick: (val) => setSelectedTab(val)
        },
        {
            title: "Monthly",
            onClick: (val) => setSelectedTab(val)
        },
        {
            title: "Quarterly",
            onClick: (val) => setSelectedTab(val)
        },
        {
            title: "Yearly",
            onClick: (val) => setSelectedTab(val)
        }
    ]

    return (
        <Container fluid>
            <Tabs data={tabs} selected={selectedTab} />
            <Row>
                <Table data={data && [data]} />
                <Pagination />
            </Row>
        </Container>
    )
});

export default Main;