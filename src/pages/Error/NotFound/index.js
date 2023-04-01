import React, { memo, useCallback } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";
import errorimg from '../../../assets/images/Error.png';
import Heading from "../../../components/elements/Heading";
import { colors } from "../../../utils/colors";
import Navbar from "../../../components/modules/Navbar";
import Button from "../../../components/elements/Button";
import { routes } from "../../../router/helper";

const NotFound = memo(() => {

    const { t } = useTranslation();
    const navigate = useNavigate();

    const onClickHomepage = useCallback(() => navigate(routes.HOME, { replace: true }), [])

    return (
        <div className="d-flex" style={{
            height: '100vh',
            width: '100vw',
            backgroundImage: `url(${errorimg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: "cover"
        }}>
            <Navbar />
            <Container fluid className="px-4 py-5 my-5">
                <Row className="mt-5">
                    <Col>
                        <Heading heading="404" color={colors.white} size="xxl" />
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Heading heading={t("notFound")} color={colors.white} size="sm" />
                    </Col>
                </Row>
                <Row className="py-4">
                    <Col>
                        <Button title={t("returntohomepage")} backgroundColor={colors.white} onClick={onClickHomepage} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
});

export default NotFound;