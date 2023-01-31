import React, { memo } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "../../../elements/Button";
import Search from "../../../elements/Search";
import Heading from "../../../elements/Heading";
import background from '../../../../assets/images/BG.png';

const Main = memo(() => {
    return (
        <div className="d-flex" style={{
            height: '100vh',
            width: '100vw',
            backgroundImage: `url(${background})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }}>
            <Container>
                <Row className="h-25">
                </Row>
                <Row className="h-50">
                    <Col className="d-flex flex-column justify-content-center">
                        <Row>
                            <Col />
                            <Col xs={10} md={6} style={{ textAlign: 'center' }} className="py-2">
                                <Heading color="white" heading={"Making data available for everyone"} />
                            </Col>
                            <Col />
                        </Row>
                        <Row>
                            <Col />
                            <Col xs={12} md={8} className="py-3">
                                <Search />
                            </Col>
                            <Col />
                        </Row>
                        <Row>
                            <Col />
                            <Col xs={12} md={6} className="py-2">
                                <p style={{ textAlign: 'center', color: 'white' }}>
                                    Popular: covid-19, CO2 emissions, Technology, Abu Dhabi police
                                </p>
                            </Col>
                            <Col />
                        </Row>
                    </Col>
                </Row>
                <Row className="h-25 align-items-center">
                    <Col />
                    <Col xs={8} md={4} className='d-flex justify-content-center'>
                        <Button title="Explore Topics" backgroundColor="#9159FF" textColor="white" />
                    </Col>
                    <Col />
                </Row>
            </Container>
        </div>
    );
});

export default Main;