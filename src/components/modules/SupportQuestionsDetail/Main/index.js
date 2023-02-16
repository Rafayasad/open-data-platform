import React, { memo } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Heading from "../../../elements/Heading";

const Main = memo((props) => {

    const { title, description } = props

    return (
        <Container fluid className="mt-5 py-5 px-4">
            <Row>
                <Col lg={8} md={12}>
                    <Row className="py-4">
                        <Col>
                            <Heading heading={title} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Heading nomargin size="xxs" heading={description} />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
});

export default Main;