import React, { Fragment, memo } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import FooterImage from '../../../../assets/images/FooterImage.jpg';
import FooterImageMobile from '../../../../assets/images/FooterImageMobile.jpg';
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
    const { title, description, button, navigateTo, image, mobImage } = props;

    const renderImage = (viewport) => (
        <Container fluid className='px-0 py-lg-3 py-1'>
            <Row>
                <Col xs={10} md={6} lg={5} xl={3}>
                    <Heading color='white' heading={title} bold size="xxl" />
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
            <Row className='my-3'>
                <Col xs={8} md={4} className={i18n.language === locales.AR && "py-3"}>
                    <Button onClick={() => navigate(navigateTo ? navigateTo : routes.REGISTER)} title={button} />
                </Col>
            </Row>
        </Container>
    )

    return (
        <Fragment>
            {/* desktop */}
            <div className="d-none d-md-flex align-items-end flex-lg-column py-0 py-lg-5  img-upper-footer"
                style={{
                    backgroundImage: `${i18n.language === locales.EN ? image ? image : `url(${FooterImage})` : image ? image : `url(${FooterImage_ar})`}`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: '100%'
                }}>
                <Container fluid className='px-0 py-3 max-width'>
                    {renderImage()}
                </Container>
            </div>
            {/* mobile */}
            <div className="d-flex d-md-none align-items-end flex-lg-column py-0 py-lg-5  img-upper-footer"
                style={{
                    backgroundImage: `${i18n.language === locales.EN ? mobImage ? mobImage : `url(${FooterImageMobile})` : mobImage ? mobImage : `url(${FooterImage_ar})`}`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: "100%"
                }}>
                <Container fluid className='px-0 py-3 max-width'>
                    {renderImage()}
                </Container>
            </div>
        </Fragment>
    )
});

export default UpperFooter;