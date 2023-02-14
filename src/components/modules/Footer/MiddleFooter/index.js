import React, { memo, useEffect, useState } from 'react';
import { Col, Container } from 'react-bootstrap';
import { getFacets } from '../../../../axios/api';
import Heading from '../../../elements/Heading';
import { useTranslation } from 'react-i18next';
import { colors } from '../../../../utils/colors';

const Support = [
    {
        title: "gettingStarted",
        onClick: () => { }
    },
    {
        title: "usingOpenData",
        onClick: () => { }
    },
    {
        title: "contactUs",
        onClick: () => { }
    },
]

const AboutUs = [
    {
        title: "openDataPlatform",
        onClick: () => { }
    },
    {
        title: "successStories",
        onClick: () => { }
    },
    {
        title: "applications",
        onClick: () => { }
    },
]

const Developers = [
    {
        title: "realTimeAPI",
        onClick: () => { }
    }
]

const OurPlatforms = [
    {
        title: "GovtManagStandard",
        onClick: () => { }
    },
    {
        title: "GovtManagPolicy",
        onClick: () => { }
    },
]

const MiddleFooter = memo(() => {

    const { t } = useTranslation()

    const [topics, setTopics] = useState();

    useEffect(() => {
        getFacets("theme", "themelear", setTopics)
    }, [])

    return (
        <Container fluid className='bg-black p-3 d-none d-lg-block'>
            <div className='d-flex'>
                <Col>
                    <div className='my-4'>
                        <Heading size="sm" color="white" heading={t("datasets")} />
                    </div>
                    <div className='my-1'>
                        {
                            topics && topics.en && topics.en.length > 0 && topics.en.map((item, index) => (
                                <Heading key={index} size='xxs' heading={item.title} color={colors.white} />
                            ))
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
                                <Heading key={index} size='xxs' heading={t(item.title)} color={colors.white} />
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
                                <Heading key={index} size='xxs' heading={t(item.title)} color={colors.white} />
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
                                <Heading key={index} size='xxs' heading={t(item.title)} color={colors.white} />
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
                                <Heading key={index} size='xxs' heading={t(item.title)} color={colors.white} />
                            ))
                        }
                    </div>
                </Col>
            </div>
        </Container>
    )
});

export default MiddleFooter;