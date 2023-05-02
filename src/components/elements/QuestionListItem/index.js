import React, { memo } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import './style.css';
import Heading from "../Heading";
import i18n from "../../../i18n/i18n";
import { locales } from "../../../i18n/helper";
import i18next from "i18next";

const QuestionListItem = memo((props) => {

    const { title, icon, onClick } = props

    return (
        <Container fluid className="py-3 m-0 question-list-item-hover">
            <Row onClick={onClick}>
                <Col xs={10} sm={10} md={10} className="d-flex align-items-center">
                    <p style={{ cursor: 'pointer' }} className={`m-0 fs-sm-md ${i18next.language === locales.AR ? "ar-font-bold" : "en-font-bold"}`}>{title}</p>
                    {/* <Heading size="sm" underline nomargin heading={title} /> */}
                </Col>
                <Col xs={2} sm={2} md={2} className="d-flex justify-content-end align-items-center">
                    {
                        i18n.language === locales.AR ?
                            icon && <RiArrowLeftSLine size={28} /> :
                            icon && <RiArrowRightSLine size={28} />

                    }
                </Col>
            </Row>
        </Container>
    )
});

export default QuestionListItem;