import React, { Fragment, memo, useCallback, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { routes } from '../../../router/helper';
import { colors } from "../../../utils/colors";
import LanguageSwitcher from "../../elements/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n/i18n";
import { locales } from "../../../i18n/helper";
import AbuDhabiLogo from '../../../assets/images/Abu-Dhabi-Data-Logo.png';
import AbuDhabiLogoDark from '../../../assets/images/Abu-Dhabi-Data-Logo-Dark.png';
import AbuDhabiLogoMobile from '../../../assets/images/Abu-Dhabi-Data-Logo-Mobile.png';
import AbuDhabiLogoDarkMobile from '../../../assets/images/Abu-Dhabi-Data-Logo-Mobile-Dark.png';
import Button from "../../elements/Button";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineSearch } from "react-icons/ai";
import Drawer from 'react-modern-drawer';
import Heading from "../../elements/Heading";
import 'react-modern-drawer/dist/index.css';
import './style.css';

const Navbar = memo((props) => {

    const { t } = useTranslation()
    const { theme, sticky } = props

    const [isOpen, setIsOpen] = useState(false)
    const [scroll, setScrolling] = useState();


    let color = colors.white;

    if (theme === 'dark') {
        color = colors.black
    }

    const onClickDrawer = useCallback(() => setIsOpen(!isOpen), [isOpen])

    const MobileRoutes = [
        {
            name: "Datasets",
            route: routes.DATASET
        },
        {
            name: "Applications",
            route: routes.APPLICATIONS
        },
        {
            name: "Support",
            route: routes.SUPPORT
        },
        {
            name: "About us",
            route: routes.ABOUTUS
        }

    ]

    window.addEventListener("scroll", (event) => {
        const windowHeight = window.innerHeight;
        const currScroll = window.scrollY;
        if (sticky && windowHeight < currScroll) {
            setScrolling(windowHeight < currScroll);
        } else {
            setScrolling();
        }
    });

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
                                <p className={`m-0 hover-underline-animation en-font-default ${i18n.language === locales.AR ? "ar-font-bold" : "en-font-bold"} ${color === colors.black ? "underline-black" : "underline-white"}`} style={{ fontSize: '18px', color: color }}>Dataset</p>
                            </Link>
                        </div>
                        <div className="mx-3">
                            <Link to={routes.ABOUTUS}>
                                <p className={`m-0 hover-underline-animation en-font-default ${i18n.language === locales.AR ? "ar-font-bold" : "en-font-bold"} ${color === colors.black ? "underline-black" : "underline-white"}`} style={{ fontSize: '18px', color: color }}>About us</p>
                            </Link>
                        </div>
                        <div className="mx-3">
                            <Link to={routes.SUPPORT}>
                                <p className={`m-0 hover-underline-animation en-font-default ${i18n.language === locales.AR ? "ar-font-bold" : "en-font-bold"} ${color === colors.black ? "underline-black" : "underline-white"}`} style={{ fontSize: '18px', color: color }}>Support</p>
                            </Link>
                        </div>
                        <div className="mx-3">
                            <Link to={routes.APPLICATIONS}>
                                <p className={`m-0 hover-underline-animation en-font-default ${i18n.language === locales.AR ? "ar-font-bold" : "en-font-bold"} ${color === colors.black ? "underline-black" : "underline-white"}`} style={{ fontSize: '18px', color: color }}>Application</p>
                            </Link>
                        </div>
                    </Col>
                    <Col className="d-flex justify-content-end align-items-center">
                        <div className="d-flex justify-content-center mx-2">
                            <LanguageSwitcher theme={theme} />
                        </div>
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
            <Container fluid className={`p-3 d-block d-lg-none ${scroll && "sticky bg-white transition"}`} style={{ position: !scroll && 'absolute', top: 0, left: 0, right: 0, zIndex: 1 }}>
                <Row className="d-flex justify-content-between align-items-center" >
                    <Col className="d-flex align-items-center justify-content-start">
                        <Link to={routes.HOME}>
                            <img height={"40px"}
                                src={theme === 'dark' || scroll ? AbuDhabiLogoDarkMobile : AbuDhabiLogoMobile} />
                        </Link>
                    </Col>
                    <Col className="d-flex align-items-center justify-content-end">
                        <RxHamburgerMenu size={25} color={theme === 'dark' || scroll ? colors.black : colors.white} onClick={onClickDrawer} />
                    </Col>
                </Row>
            </Container>
            <Drawer
                style={{ width: "100%", height: "100vh", scrollBehavior: "smooth",overflow:"auto",minHeight:"100vh" }}
                open={isOpen}
                direction='right'
                className="p-3"
                lockBackgroundScroll
            >
                <Row className="">
                    <Col className="d-flex align-items-center">
                        <Link to={routes.HOME}>
                            <img height={"40px"} src={AbuDhabiLogoDarkMobile} />
                        </Link>
                    </Col>
                    <Col className="d-flex justify-content-end align-items-center">
                        <div className="d-flex justify-content-center">
                            <div className="px-4">
                                <AiOutlineSearch size={25} color="black" onClick={onClickDrawer} />
                            </div>
                            <div className="">
                                <RxHamburgerMenu size={25} color="black" onClick={onClickDrawer} />
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="d-flex my-5">
                    {
                        MobileRoutes.map((item, index) => {
                            return (
                                <Fragment>
                                    <Col className="d-flex align-items-center py-2" xs={12}>
                                        <Link style={{ textDecoration: "none" }} to={item.route}>
                                            <Heading size={"xl"} color={colors.black} nomargin heading={item.name} />
                                        </Link>
                                    </Col>
                                    {
                                        index != MobileRoutes.length - 1
                                        &&
                                        <div className="">
                                            <hr className="py-1" />
                                        </div>
                                    }
                                </Fragment>
                            )
                        })}
                </Row>
                <Row className="">
                    <Col>
                        <Link style={{ textDecoration: 'none' }} to={routes.LOGIN}>
                            <Button width={"100%"} borderColor={""} backgroundColor='black' textColor={"white"} title={"Log In"} />
                        </Link>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-center my-3">
                    <Col className="d-flex align-items-center justify-content-center py-4 bg-light" style={{ borderRadius: "20px" }} xs={11}>
                        <div>
                            <Heading size={"xxs"} color={colors.black} nomargin heading={`New to Abu Dhabi Data ${i18n.language === locales.EN ? "?" : "؟"}`} />
                        </div>
                        <div className="px-2">
                            <Link style={{ textDecoration: 'none' }} to={routes.REGISTER}>
                                <Heading size={"xxs"} color={colors.purple} nomargin heading={"Register here"} />
                            </Link>
                        </div>
                    </Col>
                </Row>
                <Row className="">
                    <Col className="d-flex align-items-center">
                        <LanguageSwitcher theme={"dark"} />
                    </Col>
                    <Col className="d-flex align-items-center justify-content-end">
                        <Heading size={"xxs"} nomargin color={colors.gray} heading={"ADDA @ 2022"} />
                    </Col>
                </Row>
            </Drawer>
        </>
    )
});

export default Navbar;
