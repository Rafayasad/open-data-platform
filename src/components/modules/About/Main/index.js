import React, { Fragment, memo } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Heading from "../../../elements/Heading";
import Shimmer from "../../../elements/Shimmer";
import Rows from "../Rows";

const Main = memo((props) => {

    const { data } = props;

    const renderLoader = () => (
        <Container fluid>
            <Row className="align-items-center">
                <Col md={6} xs={12} className='py-2'>
                    <Shimmer height={41} rounded='xs' />
                </Col>
                <Col md={6} xs={12} className='py-2'>
                    <Shimmer className='my-1' rounded='xs' />
                    <Shimmer className='my-1' rounded='xs' width={'70%'} />
                </Col>
            </Row>
            <Row className="py-2">
                <Col>
                    <Shimmer rounded='sm' height={'70vh'} />
                </Col>
            </Row>
        </Container>
    )

    return (
        data && data.length > 0 ? data.map((item, index) => (
            <Fragment key={index}>
                <Container fluid className="my-4">
                    <Row className="align-items-center">
                        <Col md={6} xs={12} className='py-2'>
                            <Heading nomargin heading={item.title} />
                        </Col>
                        <Col md={6} xs={12} className='py-2'>
                            <Heading size='xxs' nomargin heading={item.description} />
                        </Col>
                    </Row>
                    <Row className="py-2">
                        <Col>
                            <Image src={item.image} fluid style={{ borderRadius: '30px' }} />
                        </Col>
                    </Row>
                </Container>
                {
                    item.rows && item.rows.length > 0 && item.map((item, index) => (
                        <Rows key={index} title={item.title} description={item.description} image={item.image} />
                    ))
                }
            </Fragment>
        )) : renderLoader()
    )
});

export default Main;