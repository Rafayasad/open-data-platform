import React, { Fragment, memo, useCallback, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineSearch } from "react-icons/ai";
import Drawer from 'react-modern-drawer';
import { useSelector, useDispatch } from "react-redux";
import { routes } from '../../../router/helper';
import { colors } from "../../../utils/colors";
import LanguageSwitcher from "../../elements/LanguageSwitcher";
import { locales } from "../../../i18n/helper";
import AbuDhabiLogo from '../../../assets/images/Abu-Dhabi-Data-Logo.png';
import AbuDhabiLogoDark from '../../../assets/images/Abu-Dhabi-Data-Logo-Dark.png';
import AbuDhabiLogoMobile from '../../../assets/images/Abu-Dhabi-Data-Logo-Mobile.png';
import AbuDhabiLogoDarkMobile from '../../../assets/images/Abu-Dhabi-Data-Logo-Mobile-Dark.png';
import Button from "../../elements/Button";
import Heading from "../../elements/Heading";
import 'react-modern-drawer/dist/index.css';
import './style.css';
import { handleLogout } from "../../../redux/reducers/Authentication";

const Navbar = memo((props) => {

    const { theme, sticky, nocontent } = props;

    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();

    const { isLoggedIn } = useSelector(state => state.authentication);

    const [isOpen, setIsOpen] = useState(false);
    const [scroll, setScrolling] = useState();


    let color = colors.white;

    if (theme === 'dark') {
        color = colors.black
    }

    const onClickDrawer = useCallback(() => setIsOpen(!isOpen), [isOpen]);

    const onClickLogout = useCallback(() => dispatch(handleLogout()))

    const MobileRoutes = [
        {
            name: t("dataset"),
            route: routes.DATASET
        },
        {
            name: t("application"),
            route: routes.APPLICATIONS
        },
        {
            name: t("supports"),
            route: routes.SUPPORT
        },
        {
            name: t("aboutus"),
            route: routes.ABOUTUS
        }

    ]

    window.addEventListener("scroll", () => {
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
            <Container fluid className="px-4 py-3 d-none d-lg-block" style={{ position: 'absolute', top: 0, right: 0, left: 0 }}>
                <Row>
                    <Col className="d-flex align-items-center">
                        <Link to={routes.HOME}>
                            <img height={"50px"} src={theme === 'dark' ? AbuDhabiLogoDark : AbuDhabiLogo} />
                        </Link>
                    </Col>
                    {
                        !nocontent &&
                        <Col md={6} className="d-flex justify-content-center align-items-center">
                            <div className="mx-3">
                                <Link to={routes.DATASET}>
                                    <p className={`m-0 hover-underline-animation en-font-default ${i18n.language === locales.AR ? "ar-font-bold" : "en-font-bold"} ${color === colors.black ? "underline-black" : "underline-white"}`} style={{ fontSize: '18px', color: color }}>{t("dataset")}</p>
                                </Link>
                            </div>
                            <div className="mx-3">
                                <Link to={routes.ABOUTUS}>
                                    <p className={`m-0 hover-underline-animation en-font-default ${i18n.language === locales.AR ? "ar-font-bold" : "en-font-bold"} ${color === colors.black ? "underline-black" : "underline-white"}`} style={{ fontSize: '18px', color: color }}>{t("aboutus")}</p>
                                </Link>
                            </div>
                            <div className="mx-3">
                                <Link to={routes.SUPPORT}>
                                    <p className={`m-0 hover-underline-animation en-font-default ${i18n.language === locales.AR ? "ar-font-bold" : "en-font-bold"} ${color === colors.black ? "underline-black" : "underline-white"}`} style={{ fontSize: '18px', color: color }}>{t("supports")}</p>
                                </Link>
                            </div>
                            <div className="mx-3">
                                <Link to={routes.APPLICATIONS}>
                                    <p className={`m-0 hover-underline-animation en-font-default ${i18n.language === locales.AR ? "ar-font-bold" : "en-font-bold"} ${color === colors.black ? "underline-black" : "underline-white"}`} style={{ fontSize: '18px', color: color }}>{t("application")}</p>
                                </Link>
                            </div>
                        </Col>
                    }
                    <Col className="d-flex justify-content-end align-items-center">
                        <div className="d-flex justify-content-center mx-2">
                            <LanguageSwitcher theme={theme} />
                        </div>
                        {
                            !nocontent &&
                            <>
                                <div className="d-flex justify-content-center mx-1">
                                    <Link style={{ textDecoration: 'none' }} to={routes.REGISTER}>
                                        <Button borderColor={color} backgroundColor='transparent' textColor={color} title={t("register")} />
                                    </Link>
                                </div>
                                <div className="d-flex justify-content-center mx-1">
                                    {
                                        isLoggedIn ? (
                                            <Button backgroundColor={color} textColor={color === colors.black && colors.white} title={t("logout")} onClick={onClickLogout} />
                                        ) : (
                                            <Link style={{ textDecoration: 'none' }} to={routes.LOGIN}>
                                                <Button backgroundColor={color} textColor={color === colors.black && colors.white} title={t("login")} />
                                            </Link>
                                        )
                                    }
                                </div>
                            </>
                        }
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
                style={{ width: "100%", height: "100vh", scrollBehavior: "smooth", overflow: "auto", minHeight: "100vh" }}
                open={isOpen}
                direction='right'
                className="p-3"
                lockBackgroundScroll
            >
                <div className="" style={{ minHeight: "85vh" }}>
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
                            {
                                isLoggedIn ? (
                                    <Button width={"100%"} borderColor={""} backgroundColor='black' textColor={"white"} title={t("logout")} onClick={onClickLogout} />
                                ) : (
                                    <Link style={{ textDecoration: 'none' }} to={routes.LOGIN}>
                                        <Button width={"100%"} borderColor={""} backgroundColor='black' textColor={"white"} title={t("logIn")} />
                                    </Link>
                                )
                            }
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center my-3">
                        <Col sm={11} xs={11} className="d-flex align-items-center justify-content-center py-4 bg-light" style={{ borderRadius: "20px" }}>
                            <p className="m-0 en-font-default" style={{ color: colors.black }}>
                                {`${t("newUser")} ${i18n.language === locales.EN ? " ? " : " ؟ "}`}
                                <Link style={{ textDecoration: 'none' }} to={routes.REGISTER}>
                                    <span className="m-0 en-font-default" style={{ color: colors.purple }}>
                                        {t("regHere")}
                                    </span>
                                </Link>
                            </p>
                        </Col>
                    </Row>
                </div>
                <Row className="">
                    <Col className="d-flex align-items-center">
                        <LanguageSwitcher theme={"dark"} />
                    </Col>
                    <Col className="d-flex align-items-center justify-content-end">
                        <Heading size={"xxs"} nomargin color={colors.gray} heading={t("adda")} />
                    </Col>
                </Row>
            </Drawer>
        </>
    )
});

export default Navbar;
