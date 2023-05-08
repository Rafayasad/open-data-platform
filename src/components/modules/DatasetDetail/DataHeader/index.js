import React, { useEffect, useState, useCallback, memo } from "react";
import { Col, Container } from "react-bootstrap";
import { SlShare } from "react-icons/sl";
import { RxDownload } from "react-icons/rx";
import { useTranslation } from "react-i18next";
import { locales } from "../../../../i18n/helper";
import { colors } from "../../../../utils/colors";
import { BsPerson } from "react-icons/bs";
import { FiTwitter, FiLinkedin } from "react-icons/fi";
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
import BottomSheetBar from "../../BottomSheet";
import { RWebShare } from "react-web-share";
import './style.css';
import { addDownloadCount } from "../../../../axios/api";
import i18next from "i18next";


const DataHeader = memo((props) => {

    const { title, resources, url, nooptions, downloadCount, handleReload } = props

    const { t } = useTranslation();
    const [openBottomSheet, setOpenBottomSheet] = useState(false)

    const [headerOnTop, setHeaderOnTop] = useState(false);
    const [currentHovered, setCurrentHovered] = useState(null);

    const addDownloadCounts = useCallback((title, id) => {
        addDownloadCount(id).then((res) => {
            console.log("hello its running...", id);
            handleReload()
        })
    });

    const onHover = useCallback(() => setCurrentHovered(true), [currentHovered])
    const onLeave = useCallback(() => setCurrentHovered(false), [currentHovered])

    const options = resources && resources.length > 0 && resources.map(item => (
        {
            id: item.id,
            title: i18n.language === locales.AR ? item.title_ar : item.title,
            onClick: addDownloadCounts,
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
            icon: item.format === "facebook" ? <BsPerson />
                : item.format === "linkedin" ? <FiLinkedin />
                    : item.format === "twitter" && <FiTwitter />,
        }
    ))



    const handleClick = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Example Title',
                    text: 'Example Text',
                    url: url,
                });
            } catch (error) {
                console.log(error);
            }
        } else {
            // Fallback option for sharing via email or social media
            const shareUrl = `mailto:?subject=${title}&body=${url}"`;
            window.location.href = shareUrl;
        }
    }

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
            <BottomSheetBar selectedSheetValue={t("download")} open={openBottomSheet} setOpen={setOpenBottomSheet} options={options} />
            <Col md={12} lg={8} className="px-2">
                {
                    !title ? <><Shimmer rounded="xs" height={"32px"} className="my-2" /><Shimmer rounded="xs" height={"32px"} width="70%" className="my-2" /></> : (
                        <div>
                            {/* <Heading
                                bold
                                nomargin
                                size={headerOnTop ? 'lg' : "xl"}
                                heading={title}
                                maxNumberOfLines={headerOnTop && 2}
                            /> */}
                            <p className={`fs-lg multine-ellipsis-${headerOnTop && 2} ${i18next.language === locales.AR ? "ar-font-bold" : "en-font-bold"}`}>
                                {title}
                            </p>
                        </div>
                    )
                }
            </Col>
            {
                !nooptions &&
                (
                    <>
                        <Col className="d-none d-lg-flex justify-content-end">
                            <div className="px-2" onClick={() => setCurrentHovered(false)} onMouseOver={onHover} onMouseLeave={onLeave}>
                                <Dropdown
                                    nopadding
                                    autoClose={true}
                                    options={shareOption}
                                    size={"xl"}
                                    headerComponent={<Button backgroundColor="white" textColor="black" borderColor={currentHovered ? colors.purple : colors.black} icon={<SlShare size={20} color={currentHovered ? colors.purple : colors.black} />} />}
                                />
                            </div>
                            <div className="d-flex flex-column">
                                <div className="d-flex">
                                    <Dropdown
                                        // onClickDownloadItem={addDownloadCounts}
                                        nopadding
                                        autoClose={true}
                                        size={"md"}
                                        options={options}
                                        headerComponent={<Button icon={<RxDownload className="ms-1" size={20} />} title={t("download")} backgroundColor="black" textColor="white" iconend />}
                                    />
                                </div>
                                {
                                    downloadCount >= 0 ?
                                        <div className="d-flex justify-content-center">
                                            <p className="m-0 px-1 text-center">{downloadCount}</p><span style={{ color: colors.light_gray }}>{t("download")}</span>
                                        </div> : ""
                                }
                            </div>
                        </Col>
                        {
                            !openBottomSheet &&
                            <div className="d-flex d-lg-none justify-content-between align-items-center fixed-bottom bg-white p-3">
                                <Col>
                                    {window.navigator.canShare ?
                                        <Button onClick={handleClick} backgroundColor="white" textColor="black" borderColor={colors.black} icon={<SlShare size={20} />} />
                                        :
                                        <RWebShare
                                            data={{
                                                url: url,
                                                title: title
                                            }}
                                            onClick={() => console.log("shared successfully!")}
                                        >
                                            <Button backgroundColor="white" textColor="black" borderColor={colors.black} icon={<SlShare size={20} />} />
                                        </RWebShare>
                                    }
                                </Col>
                                <Col xs={4} className="d-flex justify-content-center align-items-center px-3 text-end">
                                    <Heading size='xxs' nomargin heading={`${downloadCount} ${t("download")}`} />
                                </Col>
                                <Col className="d-flex justify-content-end">
                                    <Button onClick={() => setOpenBottomSheet(true)} title={t("download")} backgroundColor="black" textColor="white" />
                                </Col>
                            </div>
                        }
                    </>
                )
            }
        </Container >
    )
});

export default DataHeader;