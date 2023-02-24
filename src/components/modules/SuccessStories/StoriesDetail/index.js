import React, { memo, useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { locales } from "../../../../i18n/helper";
import Heading from "../../../elements/Heading";
import Shimmer from "../../../elements/Shimmer";
import Tag from "../../../elements/Tag";

const StoriesDetails = memo((props) => {

    const { item } = props;
    const { i18n } = useTranslation();

    const [headerOnTop, setHeaderOnTop] = useState(false);

    useEffect(() => {
        window.onscroll = () => {
            if (document?.getElementById("main")?.getBoundingClientRect().top <= 40) {
                setHeaderOnTop(true)
            } else {
                setHeaderOnTop(false)
            }
        }
    }, [])

    return (
        <>
            <Container>
                <Row className="d-flex align-items-center justify-content-center">
                    <Col lg={8}>
                        {
                            item ? (
                                <div className="py-3">
                                    {/* <Heading color={colors.darker_gray} size={"xxs"} heading={item.publisher} /> */}
                                    <div id="main" className={`${headerOnTop && `sticky-top`}`} style={{}}>
                                        <Heading bold size={headerOnTop ? "md" : "xl"} heading={i18n.language === locales.AR ? item?.title_ar : item?.title} />
                                    </div>
                                    <Heading size={"xs"} heading={i18n.language === locales.AR ? item?.short_description_ar : item?.short_description} />
                                    <div className="py-2">
                                        <Heading size={"xxs"} heading={"Published on " + item?.created} />
                                    </div>
                                    <div className="py-3">
                                        <img src={item?.image} width='100%' style={{ borderRadius: "30px" }} />
                                    </div>
                                    <div className="py-3">
                                        <Heading size={"xxs"} heading={i18n.language === locales.AR ? item?.description_ar : item?.description} />
                                    </div>
                                    {
                                        item?.rows.map(item => (
                                            <div className="py-2">
                                                <div className="py-2">
                                                    <Heading size={"xl"} heading={i18n.language === locales.AR ? item.title_ar : item.title} />
                                                </div>
                                                {
                                                    item.image &&
                                                    <div className="py-5">
                                                        <img src={item.image} width='100%' style={{ borderRadius: "30px" }} />
                                                    </div>
                                                }
                                                <div className="py-2">
                                                    <Heading size={"xxs"} heading={i18n.language === locales.AR ? item.description_ar : item.description} />
                                                </div>
                                            </div>
                                        ))
                                    }
                                    <div className="d-flex py-5">
                                        {
                                            i18n.language === locales.AR ?
                                                item?.tags_ar?.map((item, index) => {
                                                    return (
                                                        <Tag key={index} title={item} />
                                                    )
                                                }) :
                                                item?.tags?.map((item, index) => {
                                                    return (
                                                        <Tag key={index} title={item} />
                                                    )
                                                })
                                        }
                                    </div>
                                </div>
                            ) : (
                                <div className="py-3">
                                    <Col>
                                        <Shimmer rounded="xs" height={36} className="my-1" />
                                        <Shimmer rounded="xs" height={36} className="my-1" width="30%" />
                                    </Col>
                                    <Col className="py-3">
                                        <Shimmer rounded="xs" className="my-1" />
                                        <Shimmer rounded="xs" className="my-1" width="80%" />
                                    </Col>
                                    <Col className="py-2">
                                        <Shimmer rounded="xs" className="my-1" width="50%" />
                                    </Col>
                                    <Col className="py-3">
                                        <Shimmer rounded='sm' height={'70vh'} />
                                    </Col>
                                </div>
                            )
                        }
                    </Col>
                </Row>
            </Container>
        </>
    )
})

export default StoriesDetails;