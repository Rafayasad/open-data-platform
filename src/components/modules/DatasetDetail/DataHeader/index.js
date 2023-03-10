import React, { useEffect, useState, useCallback, memo } from "react";
import { Col, Container } from "react-bootstrap";
import { SlShare } from "react-icons/sl";
import { MdDownloadForOffline } from "react-icons/md"
import { useTranslation } from "react-i18next";
import { locales } from "../../../../i18n/helper";
import { colors } from "../../../../utils/colors";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Heading from "../../../elements/Heading";
import Button from "../../../elements/Button";
import Shimmer from "../../../elements/Shimmer";
import Dropdown from "../../../elements/DropDown";
import i18n from "../../../../i18n/i18n";
import { shareOptions } from "../../../../utils";
import pdfImage from '../../../../assets/images/pdf_img.png';
import excelImage from '../../../../assets/images/excel_img.png';
import csvImage from '../../../../assets/images/csv_img.png';
import apiImage from '../../../../assets/images/api_img.png';


const DataHeader = memo((props) => {

    const { title, resources, url } = props

    const { t } = useTranslation();

    const [headerOnTop, setHeaderOnTop] = useState(false);
    const [downloadLink, setDownloadLink] = useState();

    const downloadResources = useCallback((links) => { console.log(links) });

    const [currentHovered, setCurrentHovered] = useState(null);

    const onHover = useCallback(() => setCurrentHovered(true), [currentHovered])
    const onLeave = useCallback(() => setCurrentHovered(false), [currentHovered])

    const options = resources?.map(item => (
        {
            title: i18n.language === locales.AR ? item.title_ar : item.title,
            onClick: downloadResources,
            downloadLink: item.downloadURL,
            icon: item.format === "pdf" ? <img src={pdfImage} />
                : item.format === "excel" ? <img src={excelImage} />
                    : item.format === "csv" ? <img src={csvImage} height={20} width={20} />
                        : item.format === "API" && <img src={apiImage} />
        }
    ))

    const shareOption = shareOptions?.map(item => (
        {
            title: t(item.title),
            format: item.format,
            url: url,
            icon: item.format === "facebook" ? <FaFacebookF />
                : item.format === "linkedin" ? <FaLinkedinIn />
                    : item.format === "twitter" && <FaTwitter />,
        }
    ))

    useEffect(() => {
        window.onscroll = () => {
            if (document?.getElementById("main")?.getBoundingClientRect().top <= 20) {
                setHeaderOnTop(true)
            } else {
                setHeaderOnTop(false)
            }
        }
    }, [])

    return (
        <Container id='main' fluid className={`d-flex justify-content-between align-items-start py-4 bg-white shadow-none ${headerOnTop && "sticky-top shadow-sm w-100 m-0"}`}>
            <Col md={12} lg={8}>
                {
                    !title ? <><Shimmer rounded="xs" height={"32px"} className="my-2" /><Shimmer rounded="xs" height={"32px"} width="70%" className="my-2" /></> : (
                        <div>
                            <Heading
                                bold
                                nomargin
                                size={headerOnTop ? 'lg' : "xl"}
                                heading={title}
                                maxNumberOfLines={headerOnTop && 2}
                            />
                        </div>
                    )
                }
            </Col>
            <Col className="d-none d-lg-flex justify-content-end align-items-center">
                <div className="d-flex" onMouseOver={onHover} onMouseLeave={onLeave}>
                    <Dropdown
                        autoClose={true}
                        options={shareOption}
                        size={"sm"}
                        headerComponent={<Button backgroundColor="white" textColor="black" borderColor={currentHovered ? colors.purple : colors.black} icon={<SlShare size={20} color={currentHovered ? colors.purple : colors.black} />} />}
                    />
                </div>
                <div className="">
                    <Dropdown
                        autoClose={true}
                        size={"md"}
                        options={options}
                        headerComponent={<Button icon={<MdDownloadForOffline className="mx-1" size={20} />} title={t("download")} backgroundColor="black" textColor="white" />}
                    />
                </div>
            </Col>
            <div className="d-flex d-lg-none justify-content-between align-items-center fixed-bottom bg-white p-3">
                <Col>
                    <Button backgroundColor="white" textColor="black" borderColor={colors.black} icon={<SlShare size={20} />} />
                </Col>
                <Col xs={4} className="d-flex justify-content-center align-items-center px-3 text-end">
                    <Heading size='xxs' nomargin heading="135 downloads" />
                </Col>
                <Col className="d-flex justify-content-end">
                    <Button title={"Download"} backgroundColor="black" textColor="white" />
                </Col>
            </div>
        </Container >
    )
});

export default DataHeader;