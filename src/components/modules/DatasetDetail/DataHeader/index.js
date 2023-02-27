import React, { useEffect, useState, memo } from "react";
import { Col, Container } from "react-bootstrap";
import { SlShare } from "react-icons/sl";
import { MdDownloadForOffline } from "react-icons/md"
import { locales } from "../../../../i18n/helper";
import { useCallback } from "react";
import { colors } from "../../../../utils/colors";
import { FaFilePdf, FaFileExcel, FaFileCsv, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Heading from "../../../elements/Heading";
import Button from "../../../elements/Button";
import Shimmer from "../../../elements/Shimmer";
import Dropdown from "../../../elements/DropDown";
import i18n from "../../../../i18n/i18n";
import { t } from "i18next";
import { shareOptions } from "../../../../utils";

const DataHeader = memo((props) => {

    const { title, resources } = props

    const [headerOnTop, setHeaderOnTop] = useState(false);
    const [downloadLink, setDownloadLink] = useState();

    const downloadResources = useCallback((links) => { console.log(links) });

    const options = resources?.map((item, index) => (
        {
            title: i18n.language === locales.AR ? item.title_ar : item.title,
            onClick: downloadResources,
            downloadLink: item.downloadURL,
            icon: item.format === "pdf" ? <FaFilePdf />
                : item.format === "excel" ? <FaFileExcel size={20} />
                    : item.format === "csv" && <FaFileCsv />
        }
    ))

    const shareOption = shareOptions?.map((item, index) => (
        {
            title: item.title,
            onClick: downloadResources,
            downloadLink: item.downloadURL,
            icon: item.format === "facebook" ? <FaFacebookF />
                : item.format === "linkedin" ? <FaLinkedinIn />
                    : item.format === "twitter" && <FaTwitter />
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
        <Container id='main' fluid className={`d-flex justify-content-between align-items-center py-4 bg-white ${headerOnTop && "sticky-top"}`}>
            {/* <Link to={downloadLink} download><p>download</p></Link> */}
            <Col md={12} lg={8}>
                {
                    !title ? <><Shimmer rounded="xs" height={"32px"} className="my-2" /><Shimmer rounded="xs" height={"32px"} width="70%" className="my-2" /></> : (
                        <Heading
                            bold
                            nomargin
                            size={headerOnTop ? 'lg' : "xl"}
                            heading={title}
                            maxNumberOfLines={headerOnTop && 2}
                        />
                    )
                }
            </Col>
            <Col className="d-none d-lg-flex justify-content-end align-items-center">
                <div className="d-flex align-items-center">
                    <Dropdown
                        autoClose={true}
                        options={shareOption}
                        size={"sm"}
                        headerComponent={<Button backgroundColor="white" textColor="black" borderColor={colors.black} icon={<SlShare size={20} />} />}
                    />
                </div>
                <div className="mx-1">
                    {/* <Button icon={<MdDownloadForOffline className="mx-1" size={20} />} title={"Download"} backgroundColor="black" textColor="white" /> */}
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