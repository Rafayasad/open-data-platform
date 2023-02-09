import React, { memo } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { colors } from "../../../../utils/colors";
import Button from "../../../elements/Button";
import Heading from "../../../elements/Heading";

const ChangePassword = memo(() => {
    return (
        <div>
            <Container fluid className="py-5" >
                <Row>
                    <Col>
                        <Row className="d-flex justify-content-center my-4">
                            <Col className="d-flex justify-content-center" md="6">
                                <AiOutlineCheckCircle color="#762FFF" size="50" />
                            </Col>
                        </Row>

                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Row className="d-flex justify-content-center my-1">
                            <Col className="d-flex justify-content-center" md="5">
                                <Heading size="xl" heading="Let's reset your password" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Row className="d-flex justify-content-center my-1">
                            <Col className="d-flex justify-content-center text-center" md="5">
                                <Heading size="xs" heading="Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur." />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Row className="d-flex justify-content-center my-3">
                            <Col className="d-flex justify-content-center" md="5">
                                <Button backgroundColor={colors.black} textColor={colors.white} title="Change password" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Row className="d-flex justify-content-center my-3">
                            <Col style={{ backgroundColor: colors.light_purple }} className="rounded-3 d-flex justify-content-center text-center p-2" md="5">
                                <Heading size="xs" heading="Please note that this is a one-time use link and will expire in 48 hours. If you did not request to reset password, please ignore this email." />
                                {/* <p>Please note that this is a one-time use link and will expire in 48 hours. If you did not request to reset password, please ignore this email.</p> */}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
});

export default ChangePassword;