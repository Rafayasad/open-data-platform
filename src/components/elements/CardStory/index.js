import React, { memo } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { colors } from "../../../utils/colors";
import Heading from "../Heading";
import Tag from "../Tag";

const CardStory = memo((props) => {

    const { title, publisher, image, height, tags } = props

    return (
        <div>
            <Card
                style={{
                    borderRadius: "30px",
                    height: height
                }}
            >
                <img
                    style={{
                        borderRadius: "30px",
                        height: '100%'
                    }}
                    src="https://picsum.photos/2000"
                />
            </Card>
            <Row className="flex-column py-2">
                <Col>
                    <Heading size='sm' underline heading={title} />
                </Col>
                <Col>
                    <Heading color={colors.gray} size='xxs' heading={publisher} />
                </Col>
                <Col className="d-flex">
                    {
                    tags?.map((item, index) => {
                        return (
                            <Tag key={index} title={item} />
                        )
                    })}
                </Col>
            </Row>
        </div>
    )
});

export default CardStory;