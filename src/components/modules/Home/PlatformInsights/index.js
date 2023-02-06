import React, { memo } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { colors } from "../../../../utils/colors";
import Heading from "../../../elements/Heading";

const PlatformInsights = memo((props) => {

    const { data } = props

    return (
        <div className="bg-black py-3">
            <Container >
                <Row className="my-3">
                    <Col className="text-center">
                        <Heading size="xs" color={colors.gray} heading={"Abu Dhabi Data in numbers"} />
                    </Col>
                </Row>
                <Row className="my-3 px-5">
                    {
                        data && data.length > 0 && data.map((item, index) => (
                            <Col key={index} xs={6} md={2} className='text-center'>
                                <Col>
                                    <Heading color="white" heading={item.value} />
                                </Col>
                                <Col>
                                    <Heading size='xxs' color={colors.gray} heading={item.label} />
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