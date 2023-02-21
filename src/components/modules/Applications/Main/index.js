import React, { memo } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Application from '../../../../assets/images/Applications-1.png'
import Heading from "../../../elements/Heading";
import { useTranslation } from "react-i18next";

const Main = memo(() => {

    const { t } = useTranslation()

    return (
        <Container fluid className="my-4 px-4">
            <Row className="align-items-center">
                <Col md={6} xs={12} className='py-2'>
                    <Heading bold nomargin heading={t("applicationTitle")} />
                </Col>
                <Col md={6} xs={12} className='py-2'>
                    <Heading size='xxs' nomargin heading={t("applicationDiscription")} />
                </Col>
            </Row>
            <Row className="py-2">
                <Col>
                    <Image src={Application} fluid style={{ borderRadius: '30px' }} />
                </Col>
            </Row>
        </Container>
    )
});

export default Main;