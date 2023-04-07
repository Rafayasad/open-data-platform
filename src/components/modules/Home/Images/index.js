import React, { memo, useCallback } from "react";
import { Col, Container, Row } from "react-bootstrap";
import background from '../../../../assets/images/Desktop.jpg';
import CardOne from '../../../../assets/images/Card-One.jpg';
import CardTwo from '../../../../assets/images/Card-Two.jpg';
import Heading from "../../../elements/Heading";
import Button from "../../../elements/Button";
import { colors } from "../../../../utils/colors";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { routes } from "../../../../router/helper";

const Images = memo(() => {

    const { t } = useTranslation();
    const navigate = useNavigate();

    const onClickFindOutMore = useCallback(() => navigate(routes.SUCCESS_STOIRES));
    const onClickDiscover = useCallback(() => navigate(routes.DATASET));
    const onClickRegister = useCallback(() => navigate(routes.REGISTER));

    return (
        <Container className="py-3" fluid style={{ backgroundColor: colors.black }}>
            {/* <Row>
                <Col className="my-3 px-4">
                    <div className="d-flex flex-column justify-content-center" style={{
                        height: '75vh',
                        backgroundImage: `url(${background})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        borderRadius: '30px',
                        backgroundPosition: 'center'
                    }}>
                        <Row>
                            <Col className='text-center'>
                                <Heading size="xs" color="white" heading={t("latest")} />
                            </Col>
                            <div className="d-flex">
                                <Col />
                                <Col xs={12} md={8} className='px-3 d-flex justify-content-center align-items-center text-center'>
                                    <Heading color='white' heading={t("renewable")} />
                                </Col>
                                <Col />
                            </div>
                            <Col className='d-flex justify-content-center py-2'>
                                <Button bold textColor={"#101010"} title={t("find")} onClick={onClickFindOutMore} />
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row> */}
            <Row>
                <Col className="px-4">
                    <Row>
                        <Col xs={12} md={12} lg={6} className="my-2">
                            <div className="d-flex flex-column justify-content-center" style={{
                                height: '500px',
                                backgroundImage: `url(${CardOne})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                borderRadius: '30px',
                                backgroundPosition: 'center',
                                position: 'relative'
                            }}>
                                <div className="overlay" />
                                <Row className="py-1" style={{ zIndex: 1 }}>
                                    <Col />
                                    <Col sm={12} md={8} className='text-center'>
                                        <Heading bold color='white' heading={t("areYouNewToOpenData")} />
                                    </Col>
                                    <Col />
                                </Row>
                                <Row className="py-1" style={{ zIndex: 1 }}>
                                    <Col />
                                    <Col sm={12} md={8} className='d-flex justify-content-center align-items-center text-center'>
                                        <Button bold title={t("discover")} onClick={onClickDiscover} />
                                    </Col>
                                    <Col />
                                </Row>
                            </div>
                        </Col>
                        <Col xs={12} md={12} lg={6} className="my-2">
                            <div className="d-flex flex-column justify-content-center" style={{
                                height: '500px',
                                backgroundImage: `url(${CardTwo})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                borderRadius: '30px',
                                backgroundPosition: 'center'
                            }}>
                                <Row className="py-1">
                                    <Col />
                                    <Col sm={10} md={6} className='d-flex justify-content-center align-items-center text-center'>
                                        <Heading bold size='xl' color='white' heading={t("joinUsRegisterWithUs")} />
                                    </Col>
                                    <Col />
                                </Row>
                                <Row className="py-1">
                                    <Col />
                                    <Col sm={12} md={8} className='d-flex justify-content-center align-items-center text-center'>
                                        <Button bold title={t("getStarted")} onClick={onClickRegister} />
                                    </Col>
                                    <Col />
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
});

export default Images;