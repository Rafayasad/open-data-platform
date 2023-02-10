import React, { memo } from "react";
import { Col, Row } from "react-bootstrap";
import './style.css';
import Heading from "../Heading";

const ListItem = memo((props) => {

    const { title, onClick } = props

    return (
        <Row className="px-3 py-4 m-0 list-item-hover">
            <Col className="d-flex list-item-hover">
                <Heading nomargin maxNumberOfLines={1} size="xxl" heading={title} color={'white'} />
                {/* <div className="h-100 px-2"> */}
                <h1 className="m-0 px-2">
                    <sup className="text-white m-0 p-0">2189</sup>
                </h1>
                {/* </div> */}
            </Col>
        </Row>
    )
});

export default ListItem;