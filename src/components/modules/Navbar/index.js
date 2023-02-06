import React, { memo } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import './style.css';
import AbuDhabiLogo from '../../../assets/images/Abu-Dhabi-Data-Logo.png'
import AbuDhabiLogoDark from '../../../assets/images/Abu-Dhabi-Data-Logo-Dark.png'
import Button from "../../elements/Button";
import { routes } from '../../../router/helper';
import { colors } from "../../../utils/colors";

const Navbar = memo((props) => {

    const { theme } = props

    let color = colors.white;

    if (theme === 'dark') {
        color = colors.black
    }

    return (
        <Container fluid className="p-3 d-none d-lg-block" style={{ position: 'absolute', top: 0, right: 0, left: 0 }}>
            <Row>
                <Col className="d-flex align-items-center">
                    <Link to={routes.HOME}>
                        <img height={"50px"} src={theme === 'dark' ? AbuDhabiLogoDark : AbuDhabiLogo} />
                    </Link>
                </Col>
                <Col md={6} className="d-flex justify-content-center align-items-center">
                    <div className="mx-3">
                        <Link to={routes.DATASET}>
                            <p className={`m-0 hover-underline-animation ${color === colors.black ? "underline-black" : "underline-white"}`} style={{ fontSize: '18px', color: color }}>Dataset</p>
                        </Link>
                    </div>
                    <div className="mx-3">
                        <Link to={routes.ABOUTUS}>
                            <p className={`m-0 hover-underline-animation ${color === colors.black ? "underline-black" : "underline-white"}`} style={{ fontSize: '18px', color: color }}>About us</p>
                        </Link>
                    </div>
                    <div className="mx-3">
                        <Link to={routes.SUPPORT}>
                            <p className={`m-0 hover-underline-animation ${color === colors.black ? "underline-black" : "underline-white"}`} style={{ fontSize: '18px', color: color }}>Support</p>
                        </Link>
                    </div>
                    <div className="mx-3">
                        <Link to={routes.APPLICATIONS}>
                            <p className={`m-0 hover-underline-animation ${color === colors.black ? "underline-black" : "underline-white"}`} style={{ fontSize: '18px', color: color }}>Application</p>
                        </Link>
                    </div>
                </Col>
                <Col className="d-flex justify-content-end align-items-center">
                    <div className="d-flex justify-content-center mx-1">
                        <Link style={{ textDecoration: 'none' }} to={routes.REGISTER}>
                            <Button borderColor={color} backgroundColor='transparent' textColor={color} title={"Register"} />
                        </Link>
                    </div>
                    <div className="d-flex justify-content-center mx-1">
                        <Link style={{ textDecoration: 'none' }} to={routes.LOGIN}>
                            <Button backgroundColor={color} textColor={color === colors.black && colors.white} title={"Login"} />
                        </Link>
                    </div>
                </Col>
            </Row>
        </Container>
    )
});

export default Navbar;
