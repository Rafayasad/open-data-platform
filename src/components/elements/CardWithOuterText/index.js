import React, { memo } from "react";
import { Col, Row, Card as RBCard } from "react-bootstrap";
import { FiArrowUpRight } from 'react-icons/fi';
import Heading from "../Heading";

const CardWithOuterText = memo((props) => {

    const { title, description, image } = props

    var height = "250px";

    return (
        <div>
            <RBCard className="p-4 justify-content-center align-items-center" style={{ height: height, borderRadius: "30px" }}>
                <img height={'140px'} width={'240px'} src={image} />
            </RBCard>
            <Row>
                <Col className="d-flex py-3" xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                    <Heading nomargin size='sm' heading={title} />
                    <sup className="mx-1">
                        <FiArrowUpRight size={24} />
                    </sup>
                </Col>
                <Col xs={12} sm={12} md={10} lg={10} xl={10} xxl={10}>
                    <Heading size='xxs' heading={description} />
                </Col>
            </Row>
        </div>
    )
});

export default CardWithOuterText;