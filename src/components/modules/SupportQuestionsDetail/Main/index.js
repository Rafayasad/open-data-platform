import React, { memo } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Heading from "../../../elements/Heading";
import Shimmer from "../../../elements/Shimmer";

const Main = memo((props) => {

    const { title, description } = props

    return (
        <Container fluid className="px-4">
            <Row>
                <Col lg={8} md={12}>
                    <Row className="py-4">
                        <Col>
                            {
                                title ? <Heading heading={title} /> : <Shimmer rounded='xs' height="48px" />
                            }
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {
                                description ? (
                                    <Heading nomargin size="xxs" heading={description} />
                                ) : (
                                    <>
                                        <Shimmer className='my-1' rounded='xs' />
                                        <Shimmer className='my-1' rounded='xs' />
                                        <Shimmer className='my-1' rounded='xs' />
                                        <Shimmer className='my-1' rounded='xs' width='60%' />
                                    </>
                                )
                            }
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
});

export default Main;