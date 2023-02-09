import React, { memo } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { colors } from "../../../../utils/colors";
import Heading from "../../../elements/Heading";
import Tag from "../../../elements/Tag";

const StoriesDetails = memo((props) => {

    const { data } = props;

    return (
        <Container>
            <Row className="d-flex align-items-center justify-content-center">
                <Col className="" xxl={8} xl={8} md={8} sm={8} xs={8}>
                    {data?.map((item, index) => {
                        return (
                            <div className="py-3">
                                <Heading color={colors.darker_gray} size={"xxs"} heading={item.publisher} />
                                <Heading color={colors.darker_gray} size={"xl"} heading={item.title} />
                                <Heading color={colors.dark_gray} size={"xs"} heading={item.short_description} />
                                <Heading color={colors.gray} size={"xxs"} heading={item.publish_date} />
                                <Row className="d-flex py-3">
                                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                        <img src={item.image} width={"783px"} style={{ borderRadius: "30px" }} />
                                    </Col>
                                </Row>
                                <Heading color={colors.dark_gray} size={"xxs"} heading={item.para_description} />
                                <div className="py-3">
                                    <Heading color={colors.darker_gray} size={"xl"} heading={item.second_title} />
                                    <Heading color={colors.dark_gray} size={"xxs"} heading={item.second_description} />
                                </div>
                                <div className="py-3"><Heading color={colors.darker_gray} size={"xl"} heading={item.third_title} /></div>
                                <Row className="d-flex py-3">
                                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                        <img src={item.secondImage} width={"783px"} style={{ borderRadius: "30px" }} />
                                    </Col>
                                </Row>
                                <Heading color={colors.dark_gray} size={"xxs"} heading={item.third_description} />
                                <div className="d-flex py-5">
                                    {item.tags?.map((item, index) => {
                                        return (
                                            <Tag title={item} />
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </Col>
            </Row>
        </Container>
    )
})

export default StoriesDetails;