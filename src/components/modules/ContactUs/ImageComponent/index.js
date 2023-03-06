import React, { memo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { colors } from "../../../../utils/colors";
import Heading from "../../../elements/Heading";
import Background from '../../../../assets/images/Contact-Us.png'
// import BackgroundAr from '../../../../assets/images/Contact-Us-ar.png'
import BreadCrumb from "../../../elements/BreadCrumb";
import { useTranslation } from "react-i18next";
import i18n from "../../../../i18n/i18n";
import { locales } from "../../../../i18n/helper";

const ImageComponent = memo(() => {
    const { t } = useTranslation();
    return (
        <div
            style={{
                height: "100%",
                width: "100%",
                backgroundImage: i18n.language === locales.EN ? `url(${Background})` : `url(${Background})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
            }}
        >
            <Container className="pt-1 px-4" fluid>
                <Row className="pt-5 p-0">
                    <Col>
                        <div className="py-4 p-0">
                            <BreadCrumb textcolor={colors.white} iconColor={colors.white} items={[t("aboutus")]} />
                        </div>
                        <Heading heading={t("contactUs")} size="xl" bold color={colors.white} />
                    </Col>
                </Row>
                <Row className="px-0">
                    <Col md={7} className={""}>
                        <Heading nomargin heading={t("footerPartText")} size="xs" color={colors.white} />
                    </Col>
                </Row>
            </Container>

        </div>
    )
})

export default ImageComponent;