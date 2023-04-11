import React, { memo } from "react";
import { Col, Row } from "react-bootstrap";
import './style.css';
import Heading from "../Heading";

const ListItem = memo((props) => {

    const { title, value, image, onClick } = props;

    return (
        <Row className="p-4 m-0 list-item-hover">
            <Col md={12} className="p-0 m-0 d-flex">
                <p className="display-1 m-0 text-white" onClick={() => onClick()} style={{ cursor: 'pointer' }}>
                    {title}
                    <span className="mx-3 position-relative">
                        <sup className="text-white h1 position-absolute m-0" style={{ top: -7 }}>{value}</sup>
                    </span>
                </p>
                {
                    image &&
                    <div className='d-none d-lg-flex align-items-center'>
                        <img style={{ zIndex: 1, left: title.length < 15 ? '50%' : '65%' }} src={image} height="200px" className={"position-absolute"} />
                    </div>
                }
            </Col>
        </Row>
    )
});

export default ListItem;