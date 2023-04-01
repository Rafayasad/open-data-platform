import React, { memo } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Heading from '../../../elements/Heading';

const Rows = memo((props) => {

    const { title, description, image } = props;

    return (
        <Container fluid className="my-4 px-4">
            <Row className='d-flex justify-content-between'>
                <Col md={6} xs={12} className='py-2 m-0'>
                    <Row>
                        <Col md={12} className={"m-0"}>
                            <Heading bold size='xl' nomargin heading={title} />
                        </Col>
                    </Row>
                    <Row className='py-4'>
                        <Col md={12} className={"m-0"}>
                            <Heading size='xxs' nomargin heading={description} />
                        </Col>
                    </Row>
                </Col>
                <Col md={6} xs={12} className='py-2 m-0'>
                    <Image src={image} fluid style={{ borderRadius: '30px' }} />
                </Col>
            </Row>
        </Container>
    )
});

export default Rows;