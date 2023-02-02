import React, { memo } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { RiArrowRightSLine } from 'react-icons/ri';
import './style.css';
import Heading from "../Heading";

const QuestionListItem = memo((props) => {

    const { title } = props

    return (
        <Container fluid className="py-3 question-list-item-hover">
            <Row>
                <Col xs={10} sm={10} md={10} className="d-flex align-items-center">
                    <Heading size="sm" underline nomargin heading={title} />
                </Col>
                <Col xs={2} sm={2} md={2} className="d-flex justify-content-end align-items-center">
                    <RiArrowRightSLine size={28} />
                </Col>
            </Row>
        </Container>
    )
});

export default QuestionListItem;