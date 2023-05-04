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
        <div className="bg-black py-3 pt-md-5 pb-md-3">
            <Container>
                <Row className="my-3">
                    <Col className="text-center">
                        <Heading size="xs" color={colors.pearl_white} heading={t("abuDhabiDataInNumbers")} />
                    </Col>
                </Row>
                <Row className="my-3 px-4">
                    {
                        data && data.length > 0 && data.map((item, index) => (
                            <Col key={index} xs={6} md={4} xl={2} className='text-center m-0 pb-md-4'>
                                <Col>
                                    {/* <Heading color="white"
                                        heading={item.label === "Datasets" ? numberWithCommas(item.value) :
                                            item.label === "APIS" ? numberWithCommas(item.value) :
                                                nFormatter(item.value, 2)} /> */}
                                    <p className={`text-white fs-md ${i18n.language === locales.EN ? "en-font-bolder" : "ar-font-bold"}`} style={{marginBottom:'4px'}}>
                                        {item.label === "Datasets" ? numberWithCommas(item.value) :
                                            item.label === "APIS" ? numberWithCommas(item.value) :
                                                nFormatter(item.value, 2)}
                                    </p>
                                </Col>
                                <Col>
                                    {/* <Heading size='xxs' color={colors.pearl_white} heading={i18n.language === locales.AR ? item.label_ar : item.label} /> */}
                                    <p className={`fs-static ${i18n.language === locales.EN ? "en-font" : "ar-font"}`} style={{color:colors.pearl_white}}>{i18n.language === locales.AR ? item.label_ar : item.label} </p>
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