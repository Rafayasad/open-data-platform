import React, { memo } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { colors } from "../../../../utils/colors";
import Button from "../../../elements/Button";
import Heading from "../../../elements/Heading";

const ChangePassword = memo(() => {
    return (
        <div className="d-flex align-items-center" style={{ height: '100vh' }}>
            <Container className="d-flex justify-content-center align-items-center text-center py-5 mx-5" >
                <Col md={6}>
                    <Row className="my-4">
                        <Col>
                            <AiOutlineCheckCircle color="#762FFF" size="60" />
                        </Col>
                    </Row>
                    <Row className="my-4">
                        <Col>
                            <Heading nomargin heading="Let's reset your password" />
                        </Col>
                    </Row>
                    <Row className="my-4">
                        <Col>
                            <Heading nomargin size="xs" heading="Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur." />
                        </Col>
                    </Row>
                    <Row className="my-4">
                        <Col className="d-flex justify-content-center">
                            <Button backgroundColor={colors.black} textColor={colors.white} title="Change password" />
                        </Col>
                    </Row>
                    <Row className="my-4">
                        <Col className="py-2 rounded-3" style={{ backgroundColor: colors.light_purple }}>
                            <Heading nomargin size="xxs" heading="Please note that this is a one-time use link and will expire in 48 hours. If you did not request to reset password, please ignore this email." />
                        </Col>
                    </Row>
                </Col>
            </Container>
        </div>
    )
});

export default ChangePassword;