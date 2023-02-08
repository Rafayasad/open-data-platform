import React, { memo } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Heading from "../../../elements/Heading";

const Main = memo((props) => {

    const { title, description, image } = props;

    return (
        <Container fluid className="my-4">
            <Row className="align-items-center">
                <Col md={6} xs={12} className='py-2'>
                    <Heading nomargin heading={title} />
                </Col>
                <Col md={6} xs={12} className='py-2'>
                    <Heading size='xxs' nomargin heading={description} />
                </Col>
            </Row>
            <Row className="py-2">
                <Col>
                    <Image src={image} fluid style={{ borderRadius: '30px' }} />
                </Col>
            </Row>
        </Container>
    )
});

export default Main;