import React, { memo, useCallback, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Heading from "../../../elements/Heading";
import TextInput from '../../../elements/TextInput'
import TextArea from "../../../elements/TextArea";
import { colors } from "../../../../utils/colors";
import Button from "../../../elements/Button";
import Dropdown from "../../../elements/DropDown";
import { BsShare, BsPerson } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import BreadCrumb from "../../../elements/BreadCrumb";

const FormComponent = memo(() => {

    const { t } = useTranslation();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [selectedValue, setSelectedValue] = useState("Select a subject");
    const [message, setMessage] = useState("");
    const [disable, setDisable] = useState(true);

    const isClicked = useCallback((value) => { setSelectedValue(value) });

    const options = [
        {
            title: t("Technical issues"),
            onClick: isClicked,
        },
        {
            title: t("Datasets"),
            onClick: isClicked,
        },
        {
            title: t("General inquiry"),
            onClick: isClicked,
        }
    ]

    return (
        <Container className="my-5 py-5" fluid>
            <Row className="d-flex justify-content-center d-lg-none zindex-modal">
                <Col md={10}>
                    <Heading heading="Contact us" size="xxl" />
                </Col>
                <Col md={10}>
                    <Heading nomargin heading="Send us a message using the contact form and someone from the team will get back to you." size="xxs" color={colors.gray} />
                </Col>
            </Row>
            <Row className="d-flex justify-content-center py-3">
                <Col md={10}>
                    <TextInput value={name} placeholder="Your Full Name" type="text" onChange={(value) => setName(value)} />
                </Col>
            </Row>

            <Row className="d-flex justify-content-center py-3">
                <Col md={10}>
                    <TextInput placeholder="Your Email" type="email" onChange={(value) => setEmail(value)} />
                </Col>
            </Row>

            <Row className="d-flex justify-content-center py-3">
                <Col md={10}>
                    <div className="">
                        <Heading heading={"Subject of your query"} size={"xxs"} color={colors.gray} nomargin />
                    </div>
                    <Dropdown
                        autoClose={true}
                        dropdownWidth={"100%"}
                        options={options}
                        selectedValue={selectedValue}
                        placeholderColor={colors.gray}
                        shadow={"shadow"}
                    />
                </Col>
            </Row>
            <Row className="d-flex justify-content-center my-4">
                <Col md={10}>
                    <Heading heading="Your message" size="xxs" nomargin color={colors.gray} />
                </Col>
                <Col md={10} className="mt-1">
                    <TextArea label="Type your message here" onChange={(value) => setMessage(value)} />
                </Col>
            </Row>

            <Row className="d-flex justify-content-center">
                <Col md={10} className="d-flex justify-content-end">
                    <Button
                        disable={disable}
                        title="Submit" backgroundColor={colors.black} textColor={colors.white} />
                </Col>
            </Row>
        </Container>
    )
})

export default FormComponent;