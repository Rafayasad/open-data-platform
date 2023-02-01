import React, { memo } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Card from "../../elements/Card";
import Header from "./Header";

const Cards = memo((props) => {

    const { title, data, backgroundColor } = props

    let textColor;

    if (backgroundColor === 'black') {
        textColor = 'white'
    } else {
        textColor = 'black'
    }

    return (
        <Container fluid className={`bg-${backgroundColor}`}>
            <Row>
                <Header color={textColor} title={title} />
            </Row>
            <Row>
                {
                    data && data.length > 0 && data.map((item, index) => (
                        <Col key={index} md={4} className="py-2">
                            <Card title={item.title} publisher={item.publisher} />
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
});

export default Cards;