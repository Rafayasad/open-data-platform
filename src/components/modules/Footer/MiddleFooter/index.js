import React, { memo, useCallback, useState } from 'react';
import { Col, Container, Row, useAccordionButton } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useSelector } from 'react-redux';
import Heading from '../../../elements/Heading';
import { useTranslation } from "react-i18next";
import { colors } from '../../../../utils/colors';
import { routes } from '../../../../router/helper';
import Accordion from 'react-bootstrap/Accordion';
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { ScrollToTop } from '../../../../utils';
import LanguageSwitcher from '../../../elements/LanguageSwitcher';
import AbuDhabiLogo from "../../../../assets/images/Abu-Dhabi-Data-Logo.png";
import './style.css';
import { locales } from '../../../../i18n/helper';



const MiddleFooter = memo(() => {

    const { t, i18n } = useTranslation();
    const navigate = useNavigate();

    const topics = useSelector((state) => state.facets.topics);
    const [activeIndex, setActiveIndex] = useState();

    function CustomToggle({ children, eventKey }) {
        const decoratedOnClick = useAccordionButton(eventKey, () =>
            console.log('totally custom!',),
        );

        return (
            activeIndex === eventKey ?
                <IoIosArrowDown color='white' style={{}} className="" size={20} /> :
                <IoIosArrowUp color='white' style={{}} className="" size={20} />
        );
    }

    const onClick = useCallback((route, state) => route && navigate(route, { state }))

    const onClickAccordian = useCallback((index) => activeIndex === index ? setActiveIndex(null) : setActiveIndex(index), [activeIndex]);

    const data = [
        {
            heading: t("dataset"),
            data: i18n.language === locales.AR ? topics?.ar?.map(item => { return ({ ...item, link: routes.DATASET, params: { listItem: item } }) }) : topics?.en?.map(item => { return ({ ...item, link: routes.DATASET, params: { listItem: item } }) })
        },
        {
            heading: t("supports"),
            data: [
                {
                    title: t("gettingStarted"),
                    link: routes.SUPPORT
                },
                {
                    title: t("usingOpenData"),
                    link: routes.DATASET
                },
                {
                    title: t("contactUs"),
                    link: routes.CONTACT
                },
            ]
        },
        {
            heading: t("aboutus"),
            data: [
                {
                    title: t("openDataPlatform"),
                    link: routes.ABOUTUS
                },
                {
                    title: t("successStories"),
                    link: routes.SUCCESS_STOIRES
                },
                {
                    title: t("applications"),
                    link: routes.APPLICATIONS
                },
            ]
        },
        {
            heading: t("developers"),
            data: [
                {
                    title: t("realTimeAPI"),
                    link: null
                }
            ]
        },
        {
            heading: t("ourPlatforms"),
            data: [
                {
                    title: t("GovtManagStandard"),
                    link: null
                },
                {
                    title: t("GovtManagPolicy"),
                    link: null
                },
            ]
        }
    ]

    return (
        <div className=''>
            <Container fluid className='bg-black p-3 d-none d-lg-block'>
                <div className='d-flex'>
                    {
                        data.map((item, index) => (
                            <Col key={index}>
                                <div className='my-4'>
                                    <Heading size="sm" color="white" heading={item.heading} />
                                </div>
                                <div className='my-1'>
                                    {
                                        item.data?.map((item, index) => (
                                            <Heading key={index} size='xxs' heading={t(item.title)} color={colors.white} onClick={() => onClick(item.link, item.params)} />
                                        ))
                                    }
                                </div>
                            </Col>
                        ))
                    }
                </div>
            </Container>
            <Container fluid className='d-lg-none bg-black m-0'>
                <div className='py-4'>
                    <img height={"50px"} src={AbuDhabiLogo} />
                </div>
                <hr className="text-white m-0 p-0" />
                {
                    data.map((item, index) => {
                        return (
                            <>
                                <Accordion className='bg-black' activeKey={activeIndex} key={index}>
                                    <Accordion.Item eventKey={index} className="py-3 border-0 bg-black">
                                        <Accordion.Header className='bg-black' onClick={() => onClickAccordian(index)}>
                                            <div className='w-100 bg-black d-flex justify-content-between' style={{ textAlign: 'start' }}>
                                                <Heading bold size="xs" color={colors.white} nomargin heading={item.heading} />
                                                <CustomToggle eventKey={index} />
                                            </div>
                                        </Accordion.Header>
                                        <Accordion.Body className='bg-black'>
                                            {
                                                item.data?.map((items, index) => {
                                                    return (

                                                        <Col xs={10} key={index} className="py-3">
                                                            <Heading nomargin size="xs" heading={items.title} color={colors.white} />
                                                        </Col>
                                                    )
                                                })
                                            }
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                                <div>
                                    <hr className="m-0 p-0 text-white" />
                                </div>
                            </>
                        )
                    })
                }
                <Row className='d-flex py-3'>
                    <Col sm={6} xs={6} className={"d-flex align-items-center"}>
                        <LanguageSwitcher theme={"light"} />
                    </Col>
                    <Col sm={6} xs={6}>
                        <div className='d-flex align-items-center justify-content-end'>
                            <div className='px-3'>
                                <Heading onClick={() => ScrollToTop()} nomargin size="xxs" heading={t("backToTop")} color={colors.white} />
                            </div>
                            <div className=''>
                                <BsFillArrowUpCircleFill color='white' size={20} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
});

export default MiddleFooter;