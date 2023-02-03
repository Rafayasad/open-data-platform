import React, { memo } from "react";
import { Card as RBCard, Col, Row } from "react-bootstrap";
import { BsThreeDots } from "react-icons/bs";
import './style.css';
import { colors } from "../../../utils/colors";
import Heading from "../Heading";
import Tag from "../Tag";

const Card = memo((props) => {

    const { title, publisher, description, tags, size, noborder, hoverable, shortTitle, headingSize } = props

    var height = "332px", border, ClassName;

    if (size == 'sm') {
        height = "332px"
    }

    if (noborder) {
        border = 0
    }

    if (hoverable) {
        ClassName = "card-hover-" + hoverable
    }

    return (
        <RBCard className={`p-4 ${ClassName}`} style={{ height: height, borderRadius: "30px", borderWidth: border }}>
            <Row className="h-25 align-items-center">
                <Col className="d-flex">
                    {
                        tags && tags.length > 0 && tags.map((item, index) => (
                            <Tag title={item} />
                        ))
                    }
                </Col>
                <Col md={2} className='d-flex justify-content-end'>
                    <BsThreeDots size={28} style={{ cursor: 'pointer' }} />
                </Col>
            </Row>
            <Row className="h-50">
                <Col md={shortTitle ? 8 : 12}>
                    <Heading underline maxNumberOfLines={shortTitle ? 2 : 3} size={headingSize ? headingSize : "md"} heading={title} />
                </Col>
                {
                    description &&
                    <Col md={10}>
                        <Heading maxNumberOfLines={shortTitle ? 2 : 3} color={'#404040'} size="xs" heading={description} />
                    </Col>
                }
            </Row>
            <Row className="h-25 align-items-end">
                <Col>
                    <Heading size='xxs' color={colors.gray} nomargin heading={publisher} />
                </Col>
            </Row>
        </RBCard>
    )
});

export default Card;