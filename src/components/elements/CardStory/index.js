import React, { memo } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { colors } from "../../../utils/colors";
import Heading from "../Heading";
import Tag from "../Tag";
import { useTranslation } from "react-i18next";

const CardStory = memo((props) => {

    const { t } = useTranslation();

    const { title, description, image, created, height, tags, onClick } = props;

    return (
        <div>
            <Card
                className="border-0 shadow-sm"
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
                    src={image}
                />
            </Card>
            <Row className="flex-column py-2">
                <Col>
                    <Heading size='sm' underline heading={title} onClick={onClick} />
                </Col>
                <Col>
                    <Heading color={colors.gray} size='xxs' heading={`${t("publishedOn")} ${created}`} />
                </Col>
                <Col className="d-flex">
                    {
                        tags && tags.length > 0 && tags.map((item, index) => (
                            <Tag key={index} title={item} />
                        )
                        )}
                </Col>
            </Row>
        </div>
    )
});

export default CardStory;