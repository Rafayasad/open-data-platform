import React, { memo } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "../../../elements/Button";
import Search from "../../../elements/Search";
import Heading from "../../../elements/Heading";
import background from '../../../../assets/images/BG.png';
import backgroundMobile from '../../../../assets/images/BG-MOB.png';
import { useTranslation } from "react-i18next";
import i18n from "../../../../i18n/i18n";
import { locales } from "../../../../i18n/helper";

const Main = memo((props) => {

    const { onSearch, onClickExplore, onApplyFilter, filterData } = props

    const { t } = useTranslation()

    return (
        <div className="d-flex" style={{
            height: window.innerWidth >= 768 ? '100vh' : '80vh',
            width: '100vw',
            backgroundImage: window.innerWidth >= 768 ? `url(${background})` : `url(${backgroundMobile})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: "cover"
        }}>
            <Container>
                <Row className="h-25">
                </Row>
                <Row className="h-50">
                    <Col className="d-flex flex-column justify-content-center">
                        <Row>
                            <Col />
                            <Col xs={10} md={6} style={{ textAlign: 'center' }} className="py-2">
                                <Heading bold color="white" heading={t("dataAvailable")} />
                            </Col>
                            <Col />
                        </Row>
                        <Row>
                            <Col />
                            <Col xs={12} md={10} lg={8} className="py-3">
                                <Search filterData={filterData} nofocuseffect onClickApplyFilter={onApplyFilter} placeholder={t("searchPlaceholder")} filter onPressEnter={onSearch} />
                            </Col>
                            <Col />
                        </Row>
                        <Row>
                            <Col />
                            <Col xs={12} md={6} className="py-2">
                                <p style={{ textAlign: 'center', color: 'white' }}>
                                    <span className={`${i18n.language === locales.EN ? "en-font-bolder" : "ar-font-bold"}`}>{t("popular")}</span> {t("populartext")}
                                </p>
                            </Col>
                            <Col />
                        </Row>
                    </Col>
                </Row>
                <Row className="h-25 align-items-end py-3">
                    <Col />
                    <Col xs={8} md={4} className='d-none d-md-flex justify-content-center'>
                        <Button onClick={onClickExplore} title={t("explore")} backgroundColor="#9159FF" textColor="white" />
                    </Col>
                    <Col />
                </Row>
            </Container>
        </div>
    );
});

export default Main;