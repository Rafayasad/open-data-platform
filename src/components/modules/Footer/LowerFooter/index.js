import React, { memo } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from '../../../elements/Button';
import Heading from '../../../elements/Heading';
import Emirates from '../../../../assets/images/Emirates.png'
import AbuDhabi from '../../../../assets/images/Abu-Dhabi-Govt.png'
import { BsTwitter, BsInstagram } from 'react-icons/bs'

const LowerFooter = memo((props) => {

    return (
        <Container fluid className='bg-black py-3'>
            <Col className='my-4'>
                <Heading size="xs" color="white" heading="Powered By" />
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
                    <div>
                        <p className='text-white m-0'>Privacy & Terms</p>
                    </div>
                    <div>
                        <div className='text-start text-sm-end py-3'>
                            <BsTwitter className='mx-2' color='white' size={28} />
                            <BsInstagram className='mx-2' color='white' size={28} />
                        </div>
                        <div>
                            <p className='text-white m-0'>All rights reserved © 2022 Abu Dhabi Data</p>
                        </div>
                    </div>
                </div>
            </Row>
        </Container>
    )
});

export default LowerFooter;