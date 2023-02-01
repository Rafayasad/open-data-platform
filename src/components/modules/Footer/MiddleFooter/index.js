import React, { memo } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Heading from '../../../elements/Heading';

const Support = [
    {
        title: "Getting Started",
        onClick: () => { }
    },
    {
        title: "Using Open Data",
        onClick: () => { }
    },
    {
        title: "Contact us",
        onClick: () => { }
    },
]

const AboutUs = [
    {
        title: "Open Data platform",
        onClick: () => { }
    },
    {
        title: "Success Stories",
        onClick: () => { }
    },
    {
        title: "Applications",
        onClick: () => { }
    },
]

const Developers = [
    {
        title: "Real Time API",
        onClick: () => { }
    }
]

const OurPlatforms = [
    {
        title: "Abu Dhabi Government Data Management Standards",
        onClick: () => { }
    },
    {
        title: "Abu Dhabi Government Data Management Policy",
        onClick: () => { }
    },
]

const MiddleFooter = memo((props) => {

    return (
        <Container fluid className='bg-black p-3'>
            <div className='d-flex'>
                <Col>
                    <div className='my-4'>
                        <Heading size="sm" color="white" heading="Datasets" />
                    </div>
                    <div className='my-1'>
                        <p className='text-white'>Economy</p>
                        <p className='text-white'>Enviornment</p>
                        <p className='text-white'>Agricultural</p>
                        <p className='text-white'>Dubai</p>
                        <p className='text-white'>Police</p>
                        <p className='text-white'>Safety</p>
                    </div>
                </Col>
                <Col>
                    <div className='my-4'>
                        <Heading size="sm" color="white" heading="Support" />
                    </div>
                    <div className='my-1'>
                        {
                            Support.map((item, index) => (
                                <p key={index} className='text-white'>{item.title}</p>
                            ))
                        }
                    </div>
                </Col>
                <Col>
                    <div className='my-4'>
                        <Heading size="sm" color="white" heading="About us" />
                    </div>
                    <div className='my-1'>
                        {
                            AboutUs.map((item, index) => (
                                <p key={index} className='text-white'>{item.title}</p>
                            ))
                        }
                    </div>
                </Col>
                <Col>
                    <div className='my-4'>
                        <Heading size="sm" color="white" heading="Developers" />
                    </div>
                    <div className='my-1'>
                        {
                            Developers.map((item, index) => (
                                <p key={index} className='text-white'>{item.title}</p>
                            ))
                        }
                    </div>
                </Col>
                <Col>
                    <div className='my-4'>
                        <Heading size="sm" color="white" heading="Our platforms" />
                    </div>
                    <div className='my-1'>
                        {
                            OurPlatforms.map((item, index) => (
                                <p key={index} className='text-white'>{item.title}</p>
                            ))
                        }
                    </div>
                </Col>
            </div>
        </Container>
    )
});

export default MiddleFooter;