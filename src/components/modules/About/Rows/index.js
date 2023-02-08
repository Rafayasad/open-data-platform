import React, { memo } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Heading from '../../../elements/Heading';

const Rows = memo((props) => {

    const { title, description, image } = props;

    return (
        <Container fluid className="my-4">
            <Row className='d-flex justify-content-between'>
                <Col md={5} xs={12} className='py-2'>
                    <Row className="py-3">
                        <Col>
                            <Heading size='xl' nomargin heading={title} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Heading size='xxs' nomargin heading={description} />
                        </Col>
                    </Row>
                </Col>
                <Col md={7} xs={12} className='py-2'>
                    <Image src={image} fluid style={{ borderRadius: '30px' }} />
                </Col>
            </Row>
        </Container>
    )
});

export default Rows;