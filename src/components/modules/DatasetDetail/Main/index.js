import React, { memo, useCallback } from "react";
import { Container } from "react-bootstrap";
import { colors } from "../../../../utils/colors";
import Tabs from "../../Tabs";
import Header from "../../Cards/Header";
import DataCard from "../DataCard";

const Main = memo((props) => {

    const { data } = props

    let option = { dateStyle: 'long' };

    let e = data && [
        {
            title: "About",
            detail: data.description
        },
        {
            title: "Managed by",
            detail: data.publisher
        },
        {
            title: "Frequency",
            detail: data.frequency
        },
        {
            title: "Access Level",
            detail: data.access_level,
            capitalize: true
        },
        {
            title: "Source(s)",
            detail: "Housing and Development Board"
        },
    ]


    let f = data && [
        {
            title: "Created At",
            detail: new Date(data.created).toLocaleDateString("en-US", option)
        },
        {
            title: "Last Updated",
            detail: new Date(data.modified).toLocaleDateString("en-US", option)
        },
        {
            title: "Source URL",
            detail: "https://developers.data.gov.sg/data-gov-sg-apis/apis/get/transport/carpark-availability",
            color: colors.purple,
            underline: true
        },
        {
            title: "License",
            detail: "Abu Dhabi Government Open Data License",
            color: colors.purple,
            underline: true,
            onClick: () => window.open(data.license, '_blank')
        }
    ]

    let tabs = [
        {
            name: "Overview",
            component: data && <DataCard data={e} />
        },
        {
            name: "API Documentation",
            component: null
        }
    ]

    return (
        <Container fluid>
            <Header size='lg' backgroundColor={colors.white} title={data && data.title} nobutton />
            <Tabs data={tabs} staticComponentOnRight={data && <DataCard data={f} />} />
        </Container>
    )
});

export default Main;