import React, { memo } from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { colors } from "../../../../utils/colors";
import Heading from "../../../elements/Heading";
import Tabs from "../../Tabs";
import Header from "../../Cards/Header";

let e = [
    {
        title: "About",
        detail: "Get the latest carpark availability in Singapore: - Retrieved every minute - Use the date_time parameter to retrieve the latest carpark availability at that moment in time - Detailed carpark information can be found at https://data.gov.sg/dataset/hdb-carpark-information - Limited to 60 requests per minute per API key. Get the latest carpark availability in Singapore: - Retrieved every minute - Use the date_time parameter to retrieve the latest carpark availability at that moment in time - Detailed carpark information can be found at https://data.gov.sg/dataset/hdb-carpark-information - Limited to 60 requests per minute per API key. "
    },
    {
        title: "Managed by",
        detail: "GovTech"
    },
    {
        title: "Frequency",
        detail: "Real-time"
    },
    {
        title: "Source(s)",
        detail: "Housing and Development Board"
    },
]

let f = [
    {
        title: "Created At",
        detail: "19-Jan-2023"
    },
    {
        title: "Last Updated",
        detail: "19-Jan-2023"
    },
    {
        title: "Coverage",
        detail: "19-Jan-2023"
    },
    {
        title: "Source URL",
        detail: "https://developers.data.gov.sg/data-gov-sg-apis/apis/get/transport/carpark-availability",
        color: colors.purple,
        underline: true
    },
    {
        title: "License",
        detail: "Singapore Open Data Licence",
        color: colors.purple,
        underline: true
    }
]

const Main = memo(() => {

    const DataCards = (data) => {
        return (
            <Container fluid className="p-0">
                {
                    data.map((item, index) => (
                        <div key={index} className="">
                            <div>
                                <Heading heading={item.title} size='xs' />
                            </div>
                            <div>
                                <Heading nomargin={data.length - 1 == index} color={item.color} underline={item.underline} heading={item.detail} size='xxs' />
                            </div>
                        </div>
                    ))
                }
            </Container>
        )
    }

    let temp = [
        {
            name: "Overview",
            component: DataCards(e)
        },
        {
            name: "API Documentation",
            component: DataCards(e)
        }
    ]

    return (
        <Container fluid>
            <Header size='lg' backgroundColor={colors.white} title="Carpark Availablity" nobutton />
            <Tabs data={temp} staticComponentOnRight={DataCards(f)} />
        </Container>
    )
});

export default Main;