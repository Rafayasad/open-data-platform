import React, { memo } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Heading from "../../../elements/Heading";
import Search from "../../../elements/Search";

const Main = memo(() => {
    return (
        <Container className="pt-5 mt-5">
            <Row className="py-5">
                <Col className="d-flex flex-column justify-content-center">
                    <Row>
                        <Col />
                        <Col xs={10} md={6} style={{ textAlign: 'center' }} className="py-2">
                            <Heading color="black" heading={"Datasets to drive your curiosity"} />
                        </Col>
                        <Col />
                    </Row>
                    <Row>
                        <Col />
                        <Col xs={12} md={8} className="py-3">
                            <Search placeholder="Search Keywords" filter />
                        </Col>
                        <Col />
                    </Row>
                </Col>
            </Row>
        </Container>
    )
});

export default Main;