import React, { memo, useState } from "react";
import { Card as RBCard, Col, Row } from "react-bootstrap";
import { BsPerson, BsShare, BsThreeDots } from "react-icons/bs";
import { MdOutlineFileDownload } from 'react-icons/md';
import { BsArrowDownCircleFill } from "react-icons/bs";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
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
import i18n from "../../../i18n/i18n";
import { locales } from "../../../i18n/helper";
import BottomSheetBar from "../../modules/BottomSheet";
import { routes } from "../../../router/helper";
import { addDownloadCount } from "../../../axios/api";
import i18next from "i18next";

const Card = memo((props) => {

    const { t } = useTranslation();
    const navigate = useNavigate();

    const { resources, title, publisher, description, tags, size, noborder,
        hoverable, nopadding, shortTitle, headingSize, onClick, nodropdown,
        noheadercomponent, notags, notagsactive, url, dropdownWidth, handleReload, cardStyle, datasetID, tempIncreaseDownloadCount } = props;

    var HEIGHT = "332px", border, ClassName;

    const [selectedDropdownValue, setSelectedDropdownValue] = useState();
    const [isDownloadLink, setIsDownloadLink] = useState(); // for linking url
    const [openBottomSheet, setOpenBottomSheet] = useState(false)
    const [selectedSheetValue, setSelectedSheetValue] = useState();

    const isClicked = useCallback((value, id) => {
        setSelectedDropdownValue(value)
    })

    const downloadResources = useCallback((links) => { setIsDownloadLink(links) }); //callback for url redirect

    const addDownloadCounts = useCallback((title, id) => {
        addDownloadCount(tempIncreaseDownloadCount ? datasetID : id, tempIncreaseDownloadCount).then((res) => {
            console.log("hello its running...s", datasetID);
            handleReload()
        })
    });

    if (size === "xs") {
        HEIGHT = "225px"
    } else if (size === 'sm') {
        HEIGHT = "332px"
    } else if (size === 'md') {
        HEIGHT = '288px'
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
            title: window.innerWidth <= 768 ? t("downloadDatasets") : t("download"),
            icon: window.innerWidth <= 768 ? <BsArrowDownCircleFill size={20} color="black" /> : <MdOutlineFileDownload size={20} color="black" />,
            onClick: isClicked,
        },
        {
            title: t("share"),
            icon: <BsShare color="black" />,
            onClick: isClicked,
        }
    ]

    const specificDownloadOptions = resources?.map(item => (
        {
            id: item.id,
            title: i18n.language === locales.AR ? (item.title_ar && item.title_ar != "" ? item.title_ar : item.downloadURL) : (item.title && item.title != "" ? item.title : item.downloadURL),
            onClick: addDownloadCounts,
            downloadLink: item.downloadURL,
            icon: item.format === "pdf" ? <img src={pdfImage} />
                : item.format === "excel" ? <img src={excelImage} />
                    : item.format === "xlsx" ? <img src={excelImage} />
                        : item.format === "csv" ? <img src={csvImage} height={20} width={20} />
                            : item.format === "api" && <img src={apiImage} />
        }
    ))

    const specificShareOptions = shareOptions?.map(item => (
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
        <>
            <BottomSheetBar
                open={openBottomSheet}
                setOpen={setOpenBottomSheet}
                setSelectedSheetValue={setSelectedSheetValue}
                selectedSheetValue={selectedSheetValue}
                heading={title}
                options={selectedSheetValue === t("downloadDatasets") ? specificDownloadOptions : selectedSheetValue === t("share") ? specificShareOptions : options} />
            <RBCard
                // onClick={onClick}
                className={`${nopadding ? "py-4" : "p-4"} ${ClassName} hover-pl`}
                style={{ height: HEIGHT, width: "100%", borderRadius: "30px", borderWidth: border }}>
                {
                    !notags &&
                    <Row className={`${nopadding && "m-0"} h-25 align-items-center`}>
                        <Col xs={8} className="d-flex scroll">
                            {
                                tags && tags.length > 0 && tags.map((item, index) => (
                                    <Tag key={index} title={item}
                                        margin={"0"}
                                        onClick={() => !notagsactive && onClickTag(routes.DATASET, { listItem: [{ title: item, type: i18n.language === locales.AR ? "themelear" : "theme" }] })} />
                                ))
                            }
                        </Col>
                        {
                            !nodropdown &&
                            <Col xs={4} className='d-flex justify-content-end'>
                                <div className="d-block d-lg-none">
                                    <HiOutlineDotsHorizontal onClick={() => setOpenBottomSheet(true)} color={colors.black} size={28} style={{ cursor: 'pointer' }} />
                                </div>
                                <div className="d-none d-lg-block">
                                    <Dropdown
                                        dropdownWidth={dropdownWidth ? dropdownWidth : "15%"}
                                        width={"100%"}
                                        noheadercomponent={noheadercomponent}
                                        autoClose={"outside"}
                                        minWidth={"50%"}
                                        size={"xl"}
                                        // size={selectedDropdownValue === t("download") ? window.innerWidth >= 768 ? "sm" : "xl" : window.innerWidth >= 768 ? "sm" : "lg"}
                                        options={selectedDropdownValue === t("download") ? specificDownloadOptions : selectedDropdownValue === t("share") ? specificShareOptions : options}
                                        selectedDropdownValue={selectedDropdownValue}
                                        setSelectedDropdownValue={setSelectedDropdownValue}
                                        headerComponent={<HiOutlineDotsHorizontal color={colors.black} size={28} style={{ cursor: 'pointer' }} />}
                                    />
                                </div>
                            </Col>
                        }
                    </Row>
                }
                <Row className={`${nopadding && "m-0"} ${publisher && !notags ? "h-50" : "h-75"}`}>
                    <Col md={shortTitle ? 8 : 12}>
                        {cardStyle ?
                            <p className={`${onClick && 'text-underline-hover'} ${shortTitle ? 'multine-ellipsis-2' : 'multine-ellipsis-3'} ${cardStyle?.titleFs} ${i18next.language === locales.AR ? "ar-font-bold" : "en-font-bold"}`}
                                onClick={onClick ? onClick : () => { }}
                            >
                                {title}
                            </p>
                            :
                            <>
                                <p
                                    className={`${headingSize ? headingSize : "fs-sm"} text-underline-hover ${shortTitle ? 'multine-ellipsis-2' : 'multine-ellipsis-3'} ${i18n.language === locales.AR ? "ar-font-bold" : "en-font-bold"}`}
                                    onClick={onClick}>
                                    {title}
                                </p>
                                {/* <Heading
                                    bold
                                    underline
                                    maxNumberOfLines={shortTitle ? 2 : 3}
                                    size={headingSize ? headingSize : "md"}
                                    heading={title}
                                    onClick={onClick}
                                /> */}
                            </>
                        }

                    </Col>
                    {
                        description && cardStyle ?
                            <Col md={8}>
                                <p className={`${shortTitle ? 'multine-ellipsis-2' : 'multine-ellipsis-3'} ${cardStyle?.descFs} ${i18next.language === locales.AR ? "ar-font" : "en-font"}`} style={{ color: colors.dark_gray }}>
                                    {description}
                                </p>
                            </Col>
                            :
                            <Col md={8}>
                                <Heading maxNumberOfLines={shortTitle ? 2 : 3} color={'#404040'} size={shortTitle ? "xs" : "xxs"} heading={description} />
                            </Col>
                    }
                </Row>
                {
                    publisher && cardStyle ?
                        <Row className={`${nopadding && "m-0"} h-25 align-items-end`} >
                            <Col>
                                <p className={`${cardStyle?.publisher} ${i18next.language === locales.AR ? "ar-font" : "en-font"}`} style={{ color: colors.gray }}>
                                    {publisher}
                                </p>
                            </Col>
                        </Row>
                        :
                        <Row className={`${nopadding && "m-0"} h-25 align-items-end`} >
                            <Col>
                                <Heading size='xxs' color={colors.gray} nomargin heading={publisher} />
                            </Col>
                        </Row>
                }
            </RBCard>
        </>
    )
});

export default Card;