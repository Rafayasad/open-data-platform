import React, { memo } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Heading from "../../../elements/Heading";

const PlatformInsights = memo(() => {

    // const { data } = props

    const data = [1, 2, 3, 4, 5, 6]

    return (
        <div className="bg-black py-3">
            <Container>
                <Row className="my-3">
                    <Col className="text-center">
                        <Heading size="xs" color="white" heading={"Abu Dhabi Data in numbers"} />
                    </Col>
                </Row>
                <Row className="my-3">
                    {
                        data.map((item, index) => (
                            <Col key={index} xs={6} md={2} className='text-center'>
                                <Col>
                                    <Heading color="white" heading={"1231"} />
                                </Col>
                                <Col>
                                    <p className="text-white">Platform Insights</p>
                                </Col>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    )
})

export default PlatformInsights;