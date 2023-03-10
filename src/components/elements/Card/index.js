import React, { memo, useState } from "react";
import { Card as RBCard, Col, Row } from "react-bootstrap";
import { BsPerson, BsShare, BsThreeDots } from "react-icons/bs";
import { MdOutlineFileDownload } from 'react-icons/md';
import { FaFilePdf, FaFileExcel, FaFileCsv } from "react-icons/fa";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { colors } from "../../../utils/colors";
import { useCallback } from "react";
import Dropdown from '../../elements/DropDown';
import Heading from "../Heading";
import Tag from "../Tag";
import './style.css';
import { shareOptions } from "../../../utils";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import pdfImage from '../../../assets/images/pdf_img.png';
import excelImage from '../../../assets/images/excel_img.png';
import csvImage from '../../../assets/images/csv_img.png';
import apiImage from '../../../assets/images/api_img.png';

const Card = memo((props) => {

    const { t } = useTranslation();
    const navigate = useNavigate();

    const { resources, title, publisher, description, tags, size, noborder,
        hoverable, nopadding, shortTitle, headingSize, onClick, nodropdown, noheadercomponent, notags, notagsactive, url } = props;

    var height = "332px", border, ClassName;

    const [selectedDropdownValue, setSelectedDropdownValue] = useState();
    const [isDownloadLink, setIsDownloadLink] = useState(); // for linking url

    const isClicked = useCallback((value) => { setSelectedDropdownValue(value) })
    const downloadResources = useCallback((links) => { setIsDownloadLink(links) }); //callback for url redirect

    if (size === "xs") {
        height = "225px"
    } else if (size === 'sm') {
        height = "332px"
    } else if (size === 'md') {
        height = '290px'
    }

    if (noborder) {
        border = 0
    }

    if (hoverable) {
        ClassName = "card-hover-" + hoverable

        if (hoverable === "primary") {
            if (description && !shortTitle) {
                ClassName = ClassName + " " + "hover-second"
            } else {
                ClassName = ClassName + " " + "hover-third"
            }
        }

    }

    const onClickTag = useCallback((route, state) => {
        if (route) navigate(route, { state })
    }, [])

    const options = [
        {
            title: t("download"),
            icon: <MdOutlineFileDownload size={20} color="black" />,
            onClick: isClicked,
        },
        {
            title: t("share"),
            icon: <BsShare color="black" />,
            onClick: isClicked,
        }
    ]

    const specificDownloadOptions = resources?.map((item, index) => (
        {
            title: item.title && item.title,
            onClick: downloadResources,
            downloadLink: item.downloadURL,
            icon: item.format === "pdf" ? <img src={pdfImage} />
                : item.format === "excel" ? <img src={excelImage} />
                    : item.format === "csv" ? <img src={csvImage} />
                        : item.format === "API" && <img src={apiImage} />
        }
    ))

    const specificShareOptions = shareOptions?.map((item, index) => (
        {
            title: t(item.title),
            format: item.format,
            url: url,
            icon: item.format === "facebook" ? <FaFacebookF />
                : item.format === "linkedin" ? <FaLinkedinIn />
                    : item.format === "twitter" && <FaTwitter />
        }
    ))

    return (
        <RBCard className={`${nopadding ? "py-4" : "p-4"} ${ClassName}`} style={{ height: height, borderRadius: "30px", borderWidth: border }}>
            {
                !notags &&
                <Row className={`${nopadding && "m-0"} h-25 align-items-center`}>
                    <Col className="d-flex">
                        {
                            tags && tags.length > 0 && tags.map((item, index) => (
                                <Tag key={index} title={item}
                                    onClick={() => !notagsactive && onClickTag("/dataset", { listItem: [{ title: item, type: "theme" }] })} />
                            ))
                        }
                    </Col>
                    {
                        !nodropdown &&
                        <Col md={2} className='d-flex justify-content-end'>
                            <Dropdown
                                noheadercomponent={noheadercomponent}
                                autoClose={"outside"}
                                size={selectedDropdownValue === t("download") ? "md" : "sm"}
                                options={selectedDropdownValue === t("download") ? specificDownloadOptions : selectedDropdownValue === t("share") ? specificShareOptions : options}
                                selectedDropdownValue={selectedDropdownValue}
                                setSelectedDropdownValue={setSelectedDropdownValue}
                                headerComponent={<BsThreeDots color={colors.black} size={28} style={{ cursor: 'pointer' }} />}
                            />
                        </Col>
                    }
                </Row>
            }
            <Row className={`${nopadding && "m-0"} ${publisher && !notags ? "h-50" : "h-75"}`}>
                <Col md={shortTitle ? 8 : 12}>
                    <Heading bold underline maxNumberOfLines={shortTitle ? 2 : 3} size={headingSize ? headingSize : "md"} heading={title} onClick={onClick} />
                </Col>
                {
                    description &&
                    <Col md={10}>
                        <Heading maxNumberOfLines={shortTitle ? 2 : 3} color={'#404040'} size={shortTitle ? "xs" : "xxs"} heading={description} />
                    </Col>
                }
            </Row>
            {
                publisher &&
                <Row className={`${nopadding && "m-0"} h-25 align-items-end`} >
                    <Col>
                        <Heading size='xxs' color={colors.gray} nomargin heading={publisher} />
                    </Col>
                </Row>
            }
        </RBCard>
    )
});

export default Card;