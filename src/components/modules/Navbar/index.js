import React, { memo } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import './style.css';
import AbuDhabiLogo from '../../../assets/images/Abu-Dhabi-Data-Logo.png'
import Button from "../../elements/Button";

const Navbar = memo(() => {
    return (
        <Container fluid className="p-3 d-none d-lg-block" style={{ position: 'absolute', top: 0, right: 0, left: 0 }}>
            <Row>
                <Col className="d-flex align-items-center">
                    <img height={"50px"} src={AbuDhabiLogo} />
                </Col>
                <Col md={6} className="d-flex justify-content-center align-items-center">
                    <div className="mx-3">
                        <p className="m-0 text-white hover-underline-animation" style={{ fontSize: '18px' }}>Dataset</p>
                    </div>
                    <div className="mx-3">
                        <p className="m-0 text-white hover-underline-animation" style={{ fontSize: '18px' }}>About us</p>
                    </div>
                    <div className="mx-3">
                        <p className="m-0 text-white hover-underline-animation" style={{ fontSize: '18px' }}>Support</p>
                    </div>
                    <div className="mx-3">
                        <p className="m-0 text-white hover-underline-animation" style={{ fontSize: '18px' }}>Application</p>
                    </div>
                </Col>
                <Col className="d-flex justify-content-end align-items-center">
                    <div className="d-flex justify-content-center mx-1">
                        <Button title={"Register"} />
                    </div>
                    <div className="d-flex justify-content-center mx-1">
                        <Button title={"Login"} />
                    </div>
                </Col>
            </Row>
        </Container>
    )
});

export default Navbar;
