import React, { memo } from "react";
import { Col, Container, Row } from "react-bootstrap";
import FormComponent from "../FormComponent";
import ImageComponent from "../ImageComponent";

const Main = memo(() => {
    return (
        <Container className="pt-5 mt-4" fluid >
            <Row>
                <Col lg={6} className='d-none d-lg-block bg-primary p-0'>
                    <ImageComponent />
                </Col>
                <Col sm={12} md={12} lg={6} >
                    <FormComponent />
                </Col>
            </Row>
        </Container>
    )
})

export default Main