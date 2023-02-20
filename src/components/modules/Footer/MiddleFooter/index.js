import React, { memo, useCallback, useEffect, useState } from 'react';
import { Col, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { getFacets } from '../../../../axios/api';
import Heading from '../../../elements/Heading';
import { useTranslation } from 'react-i18next';
import { colors } from '../../../../utils/colors';
import { routes } from '../../../../router/helper';
import { locales } from '../../../../i18n/helper';
import { useSelector } from 'react-redux';

const Support = [
    {
        title: "gettingStarted",
        link: null
    },
    {
        title: "usingOpenData",
        link: routes.DATASET
    },
    {
        title: "contactUs",
        link: null
    },
]

const AboutUs = [
    {
        title: "openDataPlatform",
        link: null
    },
    {
        title: "successStories",
        link: routes.SUCCESS_STOIRES
    },
    {
        title: "applications",
        link: routes.APPLICATIONS
    },
]

const Developers = [
    {
        title: "realTimeAPI",
        link: null
    }
]

const OurPlatforms = [
    {
        title: "GovtManagStandard",
        link: null
    },
    {
        title: "GovtManagPolicy",
        link: null
    },
]

const MiddleFooter = memo(() => {

    const { t, i18n } = useTranslation();
    const navigate = useNavigate();

    // const [topics, setTopics] = useState();
    const topics = useSelector((state) => state.facets.topics);

    console.log("Topics from middle", topics)

    // useEffect(() => {
    //     getFacets("theme", "themelear", setTopics)
    // }, [])

    const onClick = useCallback((route, state) => route && navigate(route, { state }))

    return (
        <Container fluid className='bg-black p-3 d-none d-lg-block'>
            <div className='d-flex'>
                <Col>
                    <div className='my-4'>
                        <Heading size="sm" color="white" heading={t("datasets")} />
                    </div>
                    <div className='my-1'>
                        {
                            i18n.language === locales.AR ? (
                                topics && topics.ar && topics.ar.length > 0 && topics.ar.map((item, index) => (
                                    <Heading key={index} size='xxs' heading={item.title} color={colors.white} />
                                ))
                            ) : (
                                topics && topics.en && topics.en.length > 0 && topics.en.map((item, index) => (
                                    <Heading key={index} size='xxs' heading={item.title} color={colors.white} onClick={() => onClick(routes.DATASET, { listItem: item })} />
                                ))
                            )
                        }
                    </div>
                </Col>
                <Col>
                    <div className='my-4'>
                        <Heading size="sm" color="white" heading={t("supports")} />
                    </div>
                    <div className='my-1'>
                        {
                            Support.map((item, index) => (
                                <Heading key={index} size='xxs' heading={t(item.title)} color={colors.white} onClick={() => onClick(item.link)} />
                            ))
                        }
                    </div>
                </Col>
                <Col>
                    <div className='my-4'>
                        <Heading size="sm" color="white" heading={t("aboutus")} />
                    </div>
                    <div className='my-1'>
                        {
                            AboutUs.map((item, index) => (
                                <Heading key={index} size='xxs' heading={t(item.title)} color={colors.white} onClick={() => onClick(item.link)} />
                            ))
                        }
                    </div>
                </Col>
                <Col>
                    <div className='my-4'>
                        <Heading size="sm" color="white" heading={t("developers")} />
                    </div>
                    <div className='my-1'>
                        {
                            Developers.map((item, index) => (
                                <Heading key={index} size='xxs' heading={t(item.title)} color={colors.white} onClick={() => onClick(item.link)} />
                            ))
                        }
                    </div>
                </Col>
                <Col>
                    <div className='my-4'>
                        <Heading size="sm" color="white" heading={t("ourPlatforms")} />
                    </div>
                    <div className='my-1'>
                        {
                            OurPlatforms.map((item, index) => (
                                <Heading key={index} size='xxs' heading={t(item.title)} color={colors.white} onClick={() => onClick(item.link)} />
                            ))
                        }
                    </div>
                </Col>
            </div>
        </Container>
    )
});

export default MiddleFooter;