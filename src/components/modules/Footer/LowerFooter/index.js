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

const LowerFooter = memo(() => {

    const { t } = useTranslation()
    const navigate = useNavigate();

    const onClickInstagram = useCallback(() => window.open(socialLinks.instagram));
    const onClickTwitter = useCallback(() => window.open(socialLinks.twitter));

    return (
        <Container fluid className='bg-black py-3 px-4'>
            <hr className='text-white' />
            <Col className='my-4'>
                <Heading size="xs" color="white" heading={t("powered")} />
            </Col>
            <Row className='d-flex justify-content-between'>
                <div className='col-12 col-md-6 d-flex'>
                    <div className='px-2'>
                        <img height={"100px"} width={"auto"} src={AbuDhabi} />
                    </div>
                    <div className='px-2'>
                        <img height={"100px"} width={"auto"} src={Emirates} />
                    </div>
                </div>
                <div className='col-sm-12 col-md-6 d-flex flex-row-reverse flex-sm-row justify-content-between align-items-end'>
                    <div className='w-25 d-flex justify-content-around align-items-center'>
                        <p className='text-white m-0' style={{ cursor: "pointer" }} onClick={() => { navigate(routes.POLICY) }}>
                            {`${t("privacy")}`}
                        </p>
                        <span className='text-white m-0' style={{ cursor: "pointer" }} onClick={() => { navigate(routes.POLICY) }}>
                            {`${t("terms")}`}
                        </span>
                    </div>
                    <div>
                        <div className='text-start text-sm-end py-3'>
                            <BsTwitter className='mx-2' color='white' size={28} onClick={onClickTwitter} style={{ cursor: 'pointer' }} />
                            <BsInstagram className='mx-2' color='white' size={28} onClick={onClickInstagram} style={{ cursor: 'pointer' }} />
                        </div>
                        <div>
                            <p className='text-white m-0'>{t('allRights')}</p>
                        </div>
                    </div>
                </div>
            </Row>
        </Container>
    )
});

export default LowerFooter;