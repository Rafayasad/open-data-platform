import React, { memo, useCallback, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import './style.css';
import AbuDhabiLogo from '../../../assets/images/Abu-Dhabi-Data-Logo.png'
import AbuDhabiLogoDark from '../../../assets/images/Abu-Dhabi-Data-Logo-Dark.png'
import AbuDhabiLogoMobile from '../../../assets/images/Abu-Dhabi-Data-Logo-Mobile.png'
import AbuDhabiLogoDarkMobile from '../../../assets/images/Abu-Dhabi-Data-Logo-Mobile-Dark.png'
import Button from "../../elements/Button";
import { routes } from '../../../router/helper';
import { colors } from "../../../utils/colors";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = memo((props) => {

    const { theme } = props

    const [isOpen, setIsOpen] = useState(false)

    let color = colors.white;

    if (theme === 'dark') {
        color = colors.black
    }

    const onClickDrawer = useCallback(() => setIsOpen(!isOpen), [isOpen])

    return (
        <>
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
            <Container fluid className="p-3 d-block d-lg-none" style={{ position: 'absolute', top: 0, right: 0, left: 0 }}>
                <Row className="d-flex justify-content-between align-items-center" >
                    <Col className="d-flex align-items-center justify-content-start">
                        <img height={"40px"} src={theme === 'dark' ? AbuDhabiLogoDarkMobile : AbuDhabiLogoMobile} />
                    </Col>
                    <Col className="d-flex align-items-center justify-content-end">
                        <RxHamburgerMenu size={25} color="white" onClick={onClickDrawer} />
                    </Col>
                </Row>
            </Container>
            <Drawer
                style={{ width: "100%", height: "100vh" }}
                open={isOpen}
                direction='right'
            >
                <Row className="p-3">
                    <Col className="d-flex align-items-center">
                        <img height={"40px"} src={AbuDhabiLogoDarkMobile} />
                    </Col>
                    <Col className="d-flex justify-content-end align-items-center">
                        <div className="d-flex justify-content-center mx-1">
                        </div>
                        <div className="d-flex justify-content-center mx-1">
                            <RxHamburgerMenu size={25} color="black" onClick={onClickDrawer} />
                        </div>
                    </Col>
                </Row>
            </Drawer>
        </>
    )
});

export default Navbar;
