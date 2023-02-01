import React, { memo } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Application from '../../../../assets/images/Applications-1.png'
import Heading from "../../../elements/Heading";

const Main = memo(() => {
    return (
        <Container fluid className="my-4">
            <Row className="align-items-center">
                <Col md={6} xs={12} className='py-2'>
                    <Heading nomargin heading="Applications powered by Abu Dhabi Data" />
                </Col>
                <Col md={6} xs={12} className='py-2'>
                    <Heading size='xxs' nomargin heading="We are the unified central government platform to access data available by Abu Dhabi Government Entities. Where government entities use the platform to publish data sets, documents, tools and applications for public use." />
                </Col>
            </Row>
            <Row className="py-2">
                <Col>
                    <Image src={Application} fluid style={{ borderRadius: '30px' }} />
                </Col>
            </Row>
        </Container>
    )
});

export default Main;