import React, { memo } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import FooterImage from '../../../../assets/images/FooterImage.png';
import Button from '../../../elements/Button';
import Heading from '../../../elements/Heading';

const UpperFooter = memo((props) => {

    const { title } = props

    return (
        <div className="d-flex flex-column py-5 px-3" style={{
            height: '75vh',
            backgroundImage: `url(${FooterImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            <Container fluid>
                <Row>
                    <Col xs={8} md={4}>
                        <Heading color='white' heading={title} />
                    </Col>
                </Row>
                <Row>
                    <Col xs={8} md={4}>
                        <Button title={"Register Now"} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
});

export default UpperFooter;