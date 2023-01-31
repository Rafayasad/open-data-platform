import React, { memo } from "react";
import { Col, Container, Row } from "react-bootstrap";
import background from '../../../../assets/images/Desktop.png';
import CardOne from '../../../../assets/images/Card-One.png';
import CardTwo from '../../../../assets/images/Card-Two.png';
import Heading from "../../../elements/Heading";
import Button from "../../../elements/Button";

const Images = memo(() => {
    return (
        <Container fluid className="bg-black">
            <Row>
                <Col className="my-3">
                    <div className="d-flex flex-column justify-content-center" style={{
                        height: '75vh',
                        backgroundImage: `url(${background})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        borderRadius: '30px',
                        backgroundPosition: 'center'
                    }}>
                        <Row>
                            <Col className='text-center'>
                                <Heading size="xs" color="white" heading="Latest insights from us." />
                            </Col>
                            <div className="d-flex">
                                <Col />
                                <Col xs={12} md={8} className='px-3 d-flex justify-content-center align-items-center text-center'>
                                    <Heading color='white' heading="Renewable energy share increased for the last 2 years" />
                                </Col>
                                <Col />
                            </div>
                            <Col className='d-flex justify-content-center'>
                                <Button title={"Find out More"} />
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={6} className="my-2">
                    <div className="d-flex flex-column justify-content-center" style={{
                        height: '60vh',
                        backgroundImage: `url(${CardOne})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        borderRadius: '30px',
                        backgroundPosition: 'center'
                    }}>
                        <Row>
                            <Col />
                            <Col sm={12} md={8} className='text-center'>
                                <Heading color='white' heading="Are you new to open data?" />
                            </Col>
                            <Col />
                        </Row>
                        <Row>
                            <Col />
                            <Col sm={12} md={8} className='d-flex justify-content-center align-items-center text-center'>
                                <Button title={"Discover"} />
                            </Col>
                            <Col />
                        </Row>
                    </div>
                </Col>
                <Col xs={12} md={6} className="my-2">
                    <div className="d-flex flex-column justify-content-center" style={{
                        height: '60vh',
                        backgroundImage: `url(${CardTwo})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        borderRadius: '30px',
                        backgroundPosition: 'center'
                    }}>
                        <Row>
                            <Col />
                            <Col sm={10} md={8} className='d-flex justify-content-center align-items-center text-center'>
                                <Heading size='xlg' color='white' heading="Join us / Register with us" />
                            </Col>
                            <Col />
                        </Row>
                        <Row>
                            <Col />
                            <Col sm={12} md={8} className='d-flex justify-content-center align-items-center text-center'>
                                <Button title={"Get Started"} />
                            </Col>
                            <Col />
                        </Row>
                    </div>
                </Col>
            </Row>

        </Container>
    )
});

export default Images;