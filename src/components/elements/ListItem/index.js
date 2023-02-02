import React, { memo } from "react";
import { Col, Row } from "react-bootstrap";
import './style.css';
import Heading from "../Heading";

const ListItem = memo((props) => {

    const { title, onClick } = props

    return (
        <Row className="p-3 m-0 list-item-hover">
            <Col className="list-item-hover">
                <Heading nomargin size="xxl" heading={title} color={'white'} />
            </Col>
        </Row>
    )
});

export default ListItem;