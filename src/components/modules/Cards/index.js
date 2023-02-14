import React, { memo } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Header from "./Header";
import Loader from "../Loader";
import Card from "../../elements/Card";
import CardWithText from "../../elements/CardWithText";
import SupportOne from '../../../assets/images/Support-1.png';
import SupportOneHover from '../../../assets/images/Support-1-Hover.png';
import SupportTwo from '../../../assets/images/Support-2.png';
import SupportTwoHover from '../../../assets/images/Support-2-Hover.png';
import SupportThree from '../../../assets/images/Support-3.png';
import SupportThreeHover from '../../../assets/images/Support-3-Hover.png';
import CardWithOuterText from "../../elements/CardWithOuterText";
import CardStory from "../../elements/CardStory";
import { useTranslation } from "react-i18next";
import { locales } from "../../../i18n/helper";

let images = [
    {
        image: SupportOne,
        image_hover: SupportOneHover
    },
    {
        image: SupportTwo,
        image_hover: SupportTwoHover
    },
    {
        image: SupportThree,
        image_hover: SupportThreeHover
    }
]

let sizes = ['400px', '340px', '280px']

const Cards = memo((props) => {

    const { i18n } = useTranslation();

    const { title, data, backgroundColor, hoverable, type, onClick } = props

    const renderContent = () => {
        if (type === 'image-inner-text') {
            return (
                data && data.length > 0 ? data.map((item, index) => (
                    <Col key={index} md={4} className="py-2">
                        <CardWithText
                            hoverable
                            noborder
                            title={item.title}
                            description={item.description}
                            image={images[Math.floor(Math.random() * images.length)]}
                            onClick={() => onClick(item.id)}
                        />
                    </Col>
                )) : <Loader type={type} backgroundColor={backgroundColor} />
            )
        } else if (type === 'image-outer-text') {
            return (
                data && data.length > 0 ? data.map((item, index) => (
                    <Col key={index} md={4} className="py-2">
                        <CardWithOuterText
                            title={i18n.language === locales.AR ? item.title_ar : item.title}
                            description={i18n.language === locales.AR ? item.description_ar : item.description}
                            image={item.image}
                            onClick={() => onClick(item.id)}
                        />
                    </Col>
                )) : <Loader type={type} backgroundColor={backgroundColor} />
            )
        } else if (type === 'story-cards') {
            return (
                data && data.length > 0 && data.map((item, index) => (
                    <Col key={index} md={4} className="py-2">
                        <CardStory
                            title={i18n.language === locales.AR ? item.title_ar : item.title}
                            publisher={i18n.language === locales.AR ? item.publisher_ar : item.publisher}
                            image={item.image}
                            height={sizes[Math.floor(Math.random() * sizes.length)]}
                        />
                    </Col>
                ))
            )
        } else {
            return (
                data && data.length > 0 ? data.map((item, index) => (
                    <Col key={index} md={4} className="py-2">
                        <Card
                            hoverable={hoverable}
                            title={i18n.language === locales.AR ? item.title_ar : item.title}
                            publisher={i18n.language === locales.AR ? item.publisher_ar : item.publisher}
                            onClick={() => onClick(item.id)}
                        />
                    </Col>
                )) : <Loader backgroundColor={backgroundColor} />
            )
        }
    }

    return (
        <Container fluid style={{ backgroundColor: backgroundColor }}>
            {
                title &&
                <Row>
                    <Header backgroundColor={backgroundColor} title={title} />
                </Row>
            }
            <Row>{renderContent()}</Row>
        </Container>
    )
});

export default Cards;