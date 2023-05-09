import React, { memo } from "react";
import { Col, Row } from "react-bootstrap";
import './style.css';
import Heading from "../Heading";
import i18next from "i18next";
import { locales } from "../../../i18n/helper";

const ListItem = memo((props) => {

    const { title, value, image, onClick } = props;

    return (
        <Row className="page-padding  m-0 list-item-hover padding-xl">
            <Col md={12} className="p-0 m-0 d-flex">
                <p className={`fs-2xl m-0 text-white ${i18next.language === locales.AR ? 'ar-font-bold' : 'en-font-bold'}`} onClick={() => onClick()} style={{ cursor: 'pointer' }}>
                    {title}
                    <span className="mx-3 position-relative">
                        <sup className={`text-white h1 position-absolute m-0 fs-kilo ${i18next.language === locales.AR ? 'ar-font' : 'en-font'}`} style={{ top: -7 }}>{value}</sup>
                    </span>
                </p>
                {
                    image &&
                    <div className='d-none d-lg-flex align-items-center'>
                        <img style={{ zIndex: 1, left: title.length < 15 ? '50%' : '65%' }} src={image} height="268px" className={"position-absolute"} />
                    </div>
                }
            </Col>
        </Row>
    )
});

export default ListItem;