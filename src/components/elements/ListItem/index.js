import React, { memo } from "react";
import { Col, Row } from "react-bootstrap";
import './style.css';
import Heading from "../Heading";

const ListItem = memo((props) => {

    const { title, value, image, onClick } = props;

    return (
        <Row className="px-3 py-4 m-0 list-item-hover">
            <Col md={6} className="p-0 m-0 d-flex list-item-hover">
                <Heading nomargin size="xxl" heading={title} color={'white'} onClick={() => onClick()} />
                <h1 className="m-0 px-2">
                    <sup className="text-white m-0 p-0">{value}</sup>
                </h1>
            </Col>
            {
                image &&
                <Col md={6} className='d-md-none d-lg-flex align-items-center'>
                    <img src={image} height="180px" style={{ position: 'absolute' }} />
                </Col>
            }
        </Row>
    )
});

export default ListItem;