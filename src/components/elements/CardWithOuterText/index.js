import './style.css';
import React, { memo, useEffect, useRef, useState } from "react";
import { Col, Row, Card as RBCard } from "react-bootstrap";
import { FiArrowUpLeft, FiArrowUpRight } from 'react-icons/fi';
import { locales } from "../../../i18n/helper";
import i18n from "../../../i18n/i18n";
import Heading from "../Heading";
import { colors } from "../../../utils/colors";
import { useTranslation } from "react-i18next";
import _ from 'lodash';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../../router/helper';

const CardWithOuterText = memo((props) => {

    const { title, description, image, datasetViewCount, onClick } = props;
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();

    var height = "250px";

    // const containerRef = useRef(null);
    // const [isExpanded, setIsExpanded] = useState(false);

    // useEffect(() => {
    //     const container = containerRef.current;
    //     const linesToShow = isExpanded ? Infinity : 5;
    //     const lineHeight = 1.5; // Adjust line height as needed
    //     const fontSize = 16; // Adjust font size as needed
    //     const containerHeight = linesToShow * lineHeight * fontSize;

    //     container.style.height = `${containerHeight}px`;
    //     container.style.overflow = "hidden";
    //     container.style.display = "-webkit-box";
    //     container.style.WebkitLineClamp = linesToShow.toString();
    //     container.style.WebkitBoxOrient = "vertical";
    //     container.style.wordWrap = "break-word";
    //     container.style.wordBreak = "break-all";
    //     container.style.width = "80%";
    // }, [description, isExpanded]);

    // const toggleExpand = () => {
    //     setIsExpanded(!isExpanded);
    // };

    const [isTruncated, setIsTruncated] = useState(true);

    return (
        <div>
            <RBCard className="p-4 justify-content-center align-items-center" style={{ height: height, borderRadius: "30px" }}>
                <img height={'140px'} width={'240px'} style={{ objectFit: "contain" }} src={image} />
            </RBCard>
            <Row>
                <Col className="d-flex pt-4 pb-2" xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                    <p onClick={!datasetViewCount && onClick} className={`fs-sm-md-const ${!datasetViewCount && "text-underline-hover"} m-0 text-black ${i18n.language === locales.AR ? "ar-font-bold" : "en-font-bold"}`}>{title}</p>
                    {/* <Heading bold underline nomargin size='sm' heading={title} onClick={onClick} /> */}
                    {!datasetViewCount &&
                        <sup className="mx-1 my-1">
                            {
                                i18n.language === locales.AR ? <FiArrowUpLeft size={28} /> : <FiArrowUpRight size={28} />
                            }
                        </sup>
                    }
                </Col>
                <Col md={10} className="py-1">
                    <p className="fs-xs en-font-default m-0">{_.truncate(description, {
                        'length': 200,
                    })}<span className='fs-xs en-font-default en-font-bold ms-2' style={{ color: colors.purple, cursor: "pointer" }}>{t("more")}</span></p>
                </Col>
                {datasetViewCount &&
                    <Col xs={5} md={4} className="py-2">
                        <p
                            onClick={() => {
                                navigate(routes.DATASET, {
                                    replace: true, state: {
                                        listItem: [{
                                            title: title,
                                            type: i18n.language === locales.AR ? "themelear" : "theme"
                                        }]
                                    }
                                })
                            }}
                            className="fs-2xs-static w-100 p-0" style={{ color: colors.purple, cursor: "pointer" }}>
                            {`${t('viewDatasets')} (${datasetViewCount})`}
                        </p>
                    </Col>
                }
            </Row>
        </div >
    )
});

export default CardWithOuterText;