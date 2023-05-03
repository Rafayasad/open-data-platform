import React, { memo } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Application from '../../../../assets/images/Applications-1.png'
import Heading from "../../../elements/Heading";
import { useTranslation } from "react-i18next";
import './style.css';

const Main = memo(() => {

    const { t } = useTranslation()

    return (
        <Container fluid className="my-4 px-4">
            <Row className="align-items-center justify-content-between py-0 py-md-5">
                <Col md={5} xs={12} className='py-2'>
                    <Heading bold nomargin heading={t("applicationTitle")} />
                </Col>
                <Col md={5} xs={12} className='py-2'>
                    <Heading size='xxs' nomargin heading={t("applicationDiscription")} />
                </Col>
            </Row>
            <Row className="py-2">
                <Col>
                    <img
                        className="image-sizing"
                        src={Application}
                        style={{ borderRadius: '30px' }} />
                </Col>
            </Row>
        </Container>
    )
});

export default Main;