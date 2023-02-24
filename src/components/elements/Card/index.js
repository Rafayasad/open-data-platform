import React, { memo, useState } from "react";
import { Card as RBCard, Col, Row } from "react-bootstrap";
import { BsPerson, BsShare, BsThreeDots } from "react-icons/bs";
import { colors } from "../../../utils/colors";
import { useCallback } from "react";
import Dropdown from '../../elements/DropDown';
import Heading from "../Heading";
import Tag from "../Tag";
import './style.css';

const Card = memo((props) => {

    const { title, publisher, description, tags, size, noborder, hoverable, shortTitle, headingSize, onClick } = props

    var height = "332px", border, ClassName;

    const [selectedDropdownValue, setSelectedDropdownValue] = useState();
    const [isDownloadLink, setIsDownloadLink] = useState(); // for linking url

    const isClicked = useCallback((value) => { setSelectedDropdownValue(value) })
    const downloadResources = useCallback((links) => { setIsDownloadLink(links) }); //callback for url redirect

    if (size === 'sm') {
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

    const options = [
        {
            title: "Download",
            icon: <BsPerson />,
            onClick: isClicked,
        },
        {
            title: "Share",
            icon: <BsShare />,
            onClick: isClicked,
        }
    ]

    const specificDownloadOptions = [
        {
            title: selectedDropdownValue === "Download" ? "Download resourcel one" : "Facebook",
            onClick: downloadResources,
            downloadLink: "http://www.pdf995.com/samples/pdf.pdf",
        },
        {
            title: selectedDropdownValue === "Download" ? "Download resourcel two" : "LinkedIn",
            onClick: downloadResources,
            downloadLink: "http://www.pdf995.com/samples/pdf.pdf",
        },
        {
            title: selectedDropdownValue === "Download" ? "Download resourcel three" : "Twitter",
            onClick: downloadResources,
            downloadLink: "http://www.pdf995.com/samples/pdf.pdf",
        }
    ]

    return (
        <RBCard className={`p-4 ${ClassName}`} style={{ height: height, borderRadius: "30px", borderWidth: border }}>
            <Row className="h-25 align-items-center">
                <Col className="d-flex">
                    {
                        tags && tags.length > 0 && tags.map((item, index) => (
                            <Tag key={index} title={item} />
                        ))
                    }
                </Col>
                <Col md={2} className='d-flex justify-content-end'>
                    <Dropdown
                        autoClose={"outside"}
                        width={"12rem"}
                        size={selectedDropdownValue === "Download" && "md"}
                        options={selectedDropdownValue ? specificDownloadOptions : options}
                        selectedDropdownValue={selectedDropdownValue}
                        setSelectedDropdownValue={setSelectedDropdownValue}
                        headerComponent={<BsThreeDots color={colors.black} size={28} style={{ cursor: 'pointer' }} />}
                    />
                </Col>
            </Row>
            <Row className={`${publisher ? "h-50" : "h-75"}`}>
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
                <Row className="h-25 align-items-end" >
                    <Col>
                        <Heading size='xxs' color={colors.gray} nomargin heading={publisher} />
                    </Col>
                </Row>
            }
        </RBCard>
    )
});

export default Card;