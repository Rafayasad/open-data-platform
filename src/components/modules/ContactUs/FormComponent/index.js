import React, { memo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Heading from "../../../elements/Heading";
import TextInput from '../../../elements/TextInput'
import TextArea from "../../../elements/TextArea";
import { colors } from "../../../../utils/colors";
import Button from "../../../elements/Button";

const FormComponent = memo(() => {

    return (
        <Container className="my-5 py-5" fluid>
            <Row className="d-flex justify-content-center d-lg-none">
                <Col md={10}>
                    <Heading heading="Contact us" size="xxl" />
                </Col>
                <Col md={10}>
                    <Heading nomargin heading="Send us a message using the contact form and someone from the team will get back to you." size="xxs" color={colors.gray} />
                </Col>
            </Row>
            <Row className="d-flex justify-content-center">
                <Col md={10}>
                    <TextInput placeholder="Your Full Name" type="text" />
                </Col>
            </Row>

            <Row className="d-flex justify-content-center">
                <Col md={10}>
                    <TextInput placeholder="Your Email" type="email" />
                </Col>
            </Row>

            <Row className="d-flex justify-content-center">
                <Col md={10}>
                    <TextInput placeholder="Select a Subject" type="email" />
                </Col>
            </Row>
            <Row className="d-flex justify-content-center my-4">
                <Col md={10}>
                    <Heading heading="Your message" size="xxs" nomargin color={colors.gray} />
                </Col>
                <Col md={10} className="mt-1">
                    <TextArea label="Type your message here" />
                </Col>
            </Row>

            <Row className="d-flex justify-content-center">
                <Col md={10} className="d-flex justify-content-end">
                    <Button title="Submit" backgroundColor={colors.black} textColor={colors.white} />
                </Col>
            </Row>

        </Container>
    )
})

export default FormComponent;