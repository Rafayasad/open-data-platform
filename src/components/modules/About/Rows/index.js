import React, { memo } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import AboutUs from '../../../../assets/images/AboutUs-1.png';
import Heading from '../../../elements/Heading';

const Rows = memo(() => {
    return (
        <Container fluid className="my-4">
            <Row>
                <Col md={6} xs={12} className='py-2'>
                    <Row className="py-3">
                        <Col>
                            <Heading size='xl' nomargin heading="Our mission is to provide transperency and foster innovation." />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Heading size='xxs' nomargin heading="We enable academics, developers and researchers to benefit from available government data as well as allow users to perform integration with the available open data through the available APIs of these data." />
                        </Col>
                    </Row>
                </Col>
                <Col md={6} xs={12} className='py-2'>
                    <Image src={AboutUs} fluid style={{ borderRadius: '30px' }} />
                </Col>
            </Row>
        </Container>
    )
});

export default Rows;