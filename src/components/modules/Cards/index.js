import React, { memo } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Card from "../../elements/Card";
import CardWithText from "../../elements/CardWithText";
import Header from "./Header";
import SupportOne from '../../../assets/images/Support-1.png';
import SupportOneHover from '../../../assets/images/Support-1-Hover.png';
import SupportTwo from '../../../assets/images/Support-2.png';
import SupportTwoHover from '../../../assets/images/Support-2-Hover.png';
import SupportThree from '../../../assets/images/Support-3.png';
import SupportThreeHover from '../../../assets/images/Support-3-Hover.png';
import CardWithOuterText from "../../elements/CardWithOuterText";

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

const Cards = memo((props) => {

    const { title, data, backgroundColor, hoverable, type, onClick } = props

    const renderContent = () => {
        if (type === 'image-inner-text') {
            return (
                data && data.length > 0 && data.map((item, index) => (
                    <Col key={index} md={4} className="py-2">
                        <CardWithText hoverable noborder title={item.title} description={item.description} image={images[Math.floor(Math.random() * images.length)]} onClick={() => onClick(item.id)} />
                    </Col>
                ))
            )
        } else if (type === 'image-outer-text') {
            return (
                data && data.length > 0 && data.map((item, index) => (
                    <Col key={index} md={4} className="py-2">
                        <CardWithOuterText title={item.title} description={item.description} image={item.image} onClick={() => onClick(item.id)} />
                    </Col>
                ))
            )
        } else {
            return (
                data && data.length > 0 && data.map((item, index) => (
                    <Col key={index} md={4} className="py-2">
                        <Card hoverable={hoverable} title={item.title} publisher={item.publisher} onClick={() => onClick(item.id)} />
                    </Col>
                ))
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