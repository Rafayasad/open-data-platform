import React, { memo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { colors } from "../../../../utils/colors";
import Heading from "../../../elements/Heading";
import Background from '../../../../assets/images/Contact-Us.png'

const ImageComponent = memo(() => {
    return (
        <div
            style={{
                height: "100%",
                width: "100%",
                backgroundImage: `url(${Background})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
            }}
        >
            <Container className="pt-5" fluid>
                <Row className="pt-5">
                    <Col>
                        <Heading heading="Contact us" size="xl" color={colors.white} />
                    </Col>
                </Row>
                <Row>
                    <Col md={8}>
                        <Heading nomargin heading="Send us a message using the contact form and someone from the team will get back to you." size="xxs" color={colors.white} />
                    </Col>
                </Row>
            </Container>

        </div>
    )
})

export default ImageComponent;