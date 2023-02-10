import React, { memo } from "react";
import { Col, Container, Row } from "react-bootstrap";
import background from '../../../../assets/images/Desktop.png';
import CardOne from '../../../../assets/images/Card-One.png';
import CardTwo from '../../../../assets/images/Card-Two.png';
import Heading from "../../../elements/Heading";
import Button from "../../../elements/Button";
import { colors } from "../../../../utils/colors";

const StoryTitleImage = memo(() => {
    return (
        <Container fluid style={{ }}>
            <Row>
                <Col className="my-3">
                    <div className="d-flex flex-column justify-content-center" style={{
                        height: '100vh',
                        backgroundImage: `url(${background})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        borderRadius: '30px',
                        backgroundPosition: 'center'
                    }}>
                        <Row>
                            <Col className='text-center'>
                                <Heading size="xxs" color="white" heading="27 August 2022  ·  7-minute read" />
                            </Col>
                            <div className="d-flex">
                                <Col />
                                <Col xs={12} md={8} className='px-3 d-flex justify-content-center align-items-center text-center'>
                                    <Heading underline color='white' heading="Title of success story with no truncation; text box can exceed to however many characters" />
                                </Col>
                                <Col />
                            </div>
                        </Row>
                    </div>
                </Col>
            </Row>

        </Container>
    )
});

export default StoryTitleImage;