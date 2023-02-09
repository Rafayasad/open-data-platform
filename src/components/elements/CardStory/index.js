import React, { memo } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { colors } from "../../../utils/colors";
import Heading from "../Heading";
import Tag from "../Tag";

const CardStory = memo((props) => {

    const { title, publisher, image, height, tags } = props
    console.log("tags", tags);
    return (
        <div>
            <Card
                style={{
                    width: '400px',
                    borderRadius: "30px",
                    height: height
                }}
            >
                <img
                    style={{
                        borderRadius: "30px",
                        height: '100%'
                    }}
                    alt="Sample"
                    src="https://picsum.photos/300/200"
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