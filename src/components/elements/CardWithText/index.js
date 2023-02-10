import React, { memo, useCallback, useState } from "react";
import { Card as RBCard, Col, Row } from "react-bootstrap";
import './style.css';
import Heading from "../Heading";

const CardWithText = memo((props) => {

    const { title, description, image, noborder, hoverable, onClick } = props

    const [currentHovered, setCurrentHovered] = useState(null);

    const onHover = useCallback(() => setCurrentHovered(true), [currentHovered])
    const onLeave = useCallback(() => setCurrentHovered(false), [currentHovered])

    var height = "250px", border, ClassName;

    if (noborder) {
        border = 0
    }

    if (hoverable) {
        ClassName = "card-hover"
    }

    return (
        <div onMouseOver={onHover} onMouseLeave={onLeave} className={ClassName} style={{
            borderRadius: '30px',
            backgroundImage: currentHovered ? `url(${image.image_hover})` : `url(${image.image})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }}>
            <RBCard className={`p-4 justify-content-center align-items-center bg-transparent`} style={{ minHeight: '250px', height: height, borderWidth: border }}>
                <Row>
                    <Col className="d-flex text-center">
                        <Heading size='md' heading={title} onClick={onClick} />
                    </Col>
                </Row>
                <Row>
                    <Col />
                    <Col md={8} className="d-flex text-center">
                        <Heading nomargin size='xxs' heading={description} />
                    </Col>
                    <Col />
                </Row>
            </RBCard>
        </div>
    )
});

export default CardWithText;