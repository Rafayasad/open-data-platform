import React, { memo } from "react";
import { Container, Col, Row } from "react-bootstrap";
import AbuDhabiLogo from '../../../assets/images/Abu-Dhabi-Data-Logo.png'
import Button from "../../elements/Button";

const Navbar = memo(() => {
    return (
        <Container fluid className="p-3" style={{ position: 'absolute', top: 0, right: 0, left: 0 }}>
            <Row>
                <Col>
                    <img height={"55px"} src={AbuDhabiLogo} />
                </Col>
                <Col>
                    <Row className="d-flex justify-content-center align-items-center">
                        <Col>
                            <p className="m-0">Dataset</p>
                        </Col>
                        <Col>
                            <p className="m-0">About us</p>
                        </Col>
                        <Col>
                            <p className="m-0">Support</p>
                        </Col>
                        <Col>
                            <p className="m-0">Application</p>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Col md={6} className="d-flex justify-content-center">
                            {/* <p>Dataset</p> */}
                        </Col>
                        <Col md={3} className="d-flex justify-content-center">
                            <Button title={"Register"} />
                        </Col>
                        <Col md={3} className="d-flex justify-content-center">
                            <Button title={"Login"} />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
});

export default Navbar;
