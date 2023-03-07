import React, { memo } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { colors } from "../../../../utils/colors";
import Heading from "../../../elements/Heading";
import { useTranslation } from "react-i18next";
import { locales } from "../../../../i18n/helper";

const PlatformInsights = memo((props) => {

    const { t, i18n } = useTranslation()

    const { data } = props

    function numberWithCommas(x) {
        x = x.toString();
        var pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(x))
            x = x.replace(pattern, "$1,$2");
        return x;
    }

    function nFormatter(num, digits) {
        const lookup = [
            { value: 1, symbol: "" },
            { value: 1e3, symbol: "k" },
            { value: 1e6, symbol: "m" },
            { value: 1e9, symbol: "b" },
            { value: 1e12, symbol: "t" },
            { value: 1e15, symbol: "p" },
            { value: 1e18, symbol: "e" }
        ];
        const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
        var item = lookup.slice().reverse().find(function (item) {
            return num >= item.value;
        });
        return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
    }

    return (
        <div className="bg-black py-3">
            <Container >
                <Row className="my-3">
                    <Col className="text-center">
                        <Heading size="xs" color={colors.pearl_white} heading={t("abuDhabiDataInNumbers")} />
                    </Col>
                </Row>
                <Row className="my-3 px-5">
                    {
                        data && data.length > 0 && data.map((item, index) => (
                            <Col key={index} xs={6} md={6} lg={2} className='text-center'>
                                <Col>
                                    <Heading color="white"
                                        heading={item.label === "Datasets" ? numberWithCommas(item.value) :
                                            item.label === "APIS" ? numberWithCommas(item.value) :
                                                nFormatter(item.value, 2)} />
                                </Col>
                                <Col>
                                    <Heading size='xxs' color={colors.pearl_white} heading={i18n.language === locales.AR ? item.label_ar : item.label} />
                                </Col>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    )
})

export default PlatformInsights;