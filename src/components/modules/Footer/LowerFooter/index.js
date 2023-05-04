import React, { memo, useCallback } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import { useTranslation } from 'react-i18next';
import Heading from '../../../elements/Heading';
import Emirates from '../../../../assets/images/Emirates.png'
import AbuDhabi from '../../../../assets/images/Abu-Dhabi-Govt.png'
import { socialLinks } from '../../../../utils';
import { useNavigate } from 'react-router';
import { routes } from '../../../../router/helper';
import { colors } from '../../../../utils/colors';

const LowerFooter = memo(() => {

    const { t } = useTranslation()
    const navigate = useNavigate();

    const onClickInstagram = useCallback(() => window.open(socialLinks.instagram));
    const onClickTwitter = useCallback(() => window.open(socialLinks.twitter));

    return (
        <Container fluid className='bg-black py-4 footer-padding'>
            <div className='d-none d-lg-block max-width'>
                <hr className='text-white' />
                <Col className='my-4'>
                    <Heading size="xs" color="white" heading={t("powered")} />
                </Col>
            </div>
            <Row className='d-flex justify-content-between max-width my-1'>
                <div className={`p-0 col-12 col-md-6 d-flex ${window.screen.width >= 768 ? "justify-content-start" : "justify-content-end"}`}>
                    <div className={`${window.innerWidth >= 768 ? "px-0" : "px-4"}`}>
                        <img height={"100px"} width={"auto"} src={AbuDhabi} />
                    </div>
                    <div className={`px-0 px-lg-4 ms-2 ms-lg-0`}>
                        <img height={"100px"} width={"auto"} src={Emirates} />
                    </div>
                </div>
                <div className={`p-0 col-12 col-sm-12 col-md-6 d-flex flex-row-reverse flex-sm-row justify-content-between align-items-center align-items-md-end py-3 py-lg-0`}>
                    <div className={`d-flex justify-content-between align-items-center`}>
                        <p className='text-white m-0 px-4 fs-2xs-static' style={{ cursor: "pointer" }} onClick={() => { navigate(routes.POLICY) }}>
                            {`${t("privacy")}`}
                        </p>
                        <span className='text-white m-0 fs-2xs-static' style={{ cursor: "pointer" }} onClick={() => { navigate(routes.POLICY) }}>
                            {`${t("terms")}`}
                        </span>
                    </div>
                    <div>
                        <div className='text-start text-sm-end py-3'>
                            <BsTwitter className='mx-2' color='white' size={28} onClick={onClickTwitter} style={{ cursor: 'pointer' }} />
                            <BsInstagram className='mx-2' color='white' size={28} onClick={onClickInstagram} style={{ cursor: 'pointer' }} />
                        </div>
                        <div className='d-none d-md-block'>
                            <p style={{ fontSize: "12px" }} className='text-white m-0'>{t('allRights')}</p>
                        </div>
                    </div>
                </div>
                <div className='d-md-none col-12'>
                    {/* <Heading nomargin size={"xxs"} color={colors.white} heading={t('allRights')} /> */}
                     <p style={{ fontSize: "12px" }} className='text-white'>{t('allRights')}</p>
                </div>
            </Row>
        </Container>
    )
});

export default LowerFooter;