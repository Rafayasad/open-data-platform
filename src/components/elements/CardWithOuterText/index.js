import React, { memo } from "react";
import { Col, Row, Card as RBCard } from "react-bootstrap";
import { FiArrowUpLeft, FiArrowUpRight } from 'react-icons/fi';
import { locales } from "../../../i18n/helper";
import i18n from "../../../i18n/i18n";
import Heading from "../Heading";

const CardWithOuterText = memo((props) => {

    const { title, description, image, onClick } = props

    var height = "250px";

    return (
        <div>
            <RBCard className="p-4 justify-content-center align-items-center" style={{ height: height, borderRadius: "30px" }}>
                <img height={'140px'} width={'240px'} src={image} />
            </RBCard>
            <Row>
                <Col className="d-flex py-4" xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                    <Heading bold underline nomargin size='sm' heading={title} onClick={onClick} />
                    <sup className="mx-1 my-1">
                        {
                            i18n.language === locales.AR ? <FiArrowUpLeft size={24} /> : <FiArrowUpRight size={24} />
                        }

                    </sup>
                </Col>
                <Col md={10} className="py-1">
                    <Heading size='xxs' heading={description} />
                </Col>
            </Row>
        </div>
    )
});

export default CardWithOuterText;