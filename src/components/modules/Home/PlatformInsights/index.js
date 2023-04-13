import React, { memo } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { colors } from "../../../../utils/colors";
import Heading from "../../../elements/Heading";
import { useTranslation } from "react-i18next";
import { locales } from "../../../../i18n/helper";
import { nFormatter, numberWithCommas } from "../../../../utils/generic";

const PlatformInsights = memo((props) => {

    const { t, i18n } = useTranslation()

    const { data } = props


    return (
        <div className="bg-black py-3">
            <Container>
                <Row className="my-3">
                    <Col className="text-center">
                        <Heading size="xs" color={colors.pearl_white} heading={t("abuDhabiDataInNumbers")} />
                    </Col>
                </Row>
                <Row className="my-3 px-4">
                    {
                        data && data.length > 0 && data.map((item, index) => (
                            <Col key={index} xs={6} md={6} lg={2} className='text-center m-0'>
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