import React, { memo } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import FooterImage from '../../../../assets/images/FooterImage.png';
import FooterImage_ar from '../../../../assets/images/FooterImage-ar.png';
import Button from '../../../elements/Button';
import Heading from '../../../elements/Heading';
import i18n from '../../../../i18n/i18n';
import { locales } from '../../../../i18n/helper';
import { routes } from '../../../../router/helper';
import { useNavigate } from 'react-router';
import { colors } from '../../../../utils/colors';

const UpperFooter = memo((props) => {

    const navigate = useNavigate();
    const { title, description, button, navigateTo, image } = props

    return (
        <div className="d-flex flex-column py-5 px-4" style={{
            height: '75vh',
            // width:"100vh",
            backgroundImage: `${i18n.language === locales.EN ? image ? image : `url(${FooterImage})` : image ? image : `url(${FooterImage_ar})`}`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            <Container fluid className='p-0'>
                <Row>
                    <Col xs={8} md={5}>
                        <Heading color='white' bold heading={title} />
                    </Col>
                </Row>
                {
                    description &&
                    <Row>
                        <Col xs={12} md={6}>
                            <Heading size='xxs' color='white' heading={description} />
                        </Col>
                    </Row>
                }
                <Row className='my-2'>
                    <Col xs={8} md={4} className={i18n.language === locales.AR && "py-3"}>
                        <Button onClick={() => navigate(navigateTo ? navigateTo : routes.REGISTER)} title={button} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
});

export default UpperFooter;