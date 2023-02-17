import React, { memo } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Heading from "../../../elements/Heading";
import GOADLogo from "../../../../assets/images/GOAD-Logo.png";
import TAMMLogo from "../../../../assets/images/TAMM-Logo.png";
import TELogo from "../../../../assets/images/TE-Logo.png";
import { useTranslation } from "react-i18next";

let data = [GOADLogo, GOADLogo, TELogo, TAMMLogo]

const AdLogo = memo(() => {

    const { t } = useTranslation()

    return (
        <Container className="py-4">
            <Row className="my-4">
                <Col className="text-center">
                    <Heading size="xs" heading={t("powered")} />
                </Col>
            </Row>
            <Row className="my-4">
                <Container>
                    <Row>
                        {
                            data && data.length > 0 && data.map((item, index) => (
                                <Col md={6} lg={3} key={index} className='d-flex justify-content-center align-items-center'>
                                    <img width={'150px'} src={item} />
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </Row>
        </Container>
    )
});

export default AdLogo;