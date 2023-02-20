import React, { memo } from "react";
import { Card as RBCard, Col, Row } from "react-bootstrap";
import { BsPerson, BsShare, BsThreeDots } from "react-icons/bs";
import './style.css';
import Dropdown from '../../elements/DropDown';
import { colors } from "../../../utils/colors";
import Heading from "../Heading";
import Tag from "../Tag";

const Card = memo((props) => {

    const { title, publisher, description, tags, size, noborder, hoverable, shortTitle, headingSize, onClick } = props

    var height = "332px", border, ClassName;

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
                        options={
                            [
                                {
                                    title: "Download",
                                    icon: <BsPerson />
                                },
                                {
                                    title: "Share",
                                    icon: <BsShare />
                                }
                            ]
                        }
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