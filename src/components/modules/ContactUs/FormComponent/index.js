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
import { toast } from "react-toastify";
import { routes } from "../../../../router/helper";
import { validateEmail } from "../../../../utils/generic";

const FormComponent = memo(() => {

    const { t } = useTranslation();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [selectedValue, setSelectedValue] = useState(t("selectsubject"));
    const [message, setMessage] = useState("");
    const [disable, setDisable] = useState(true);

    const isClicked = useCallback((value) => { setSelectedValue(value) });

    const onSubmitHandler = useCallback(() => {

        if (name && email && selectedValue && message) {
            toast("All fields are required.", { type: "error" })
        } else if (validateEmail(email) === false) {
            toast("Please provide a valid email address.", { type: "error" })
        } else {
            // recoverPassword(navigate, routes.HOME, setLoading, { email })
        }

    });

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
                    <Heading heading={t("contactUs")} size="xxl" />
                </Col>
                <Col md={10}>
                    <Heading nomargin heading={t("footerPartText")} size="xxs" color={colors.gray} />
                </Col>
            </Row>
            <Row className="d-flex justify-content-center py-3">
                <Col md={10}>
                    <TextInput value={name} placeholder={t("fieldFullName")} type="text" onChange={(value) => setName(value)} />
                </Col>
            </Row>

            <Row className="d-flex justify-content-center py-3">
                <Col md={10}>
                    <TextInput placeholder={t("fieldEmail")} value={email} type="email" onChange={(value) => setEmail(value)} />
                </Col>
            </Row>

            <Row className="d-flex justify-content-center py-3">
                <Col md={10}>
                    <div className="">
                        <Heading heading={t("subjectquery")} size={"xxs"} color={colors.gray} nomargin />
                    </div>
                    <Dropdown
                        borderColor={"black"}
                        autoClose={true}
                        dropdownWidth={"100%"}
                        options={options}
                        textColor={selectedValue === t("selectsubject") ? "#707070" : "black"}
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
                    <TextArea value={message} label="Type your message here" onChange={(value) => setMessage(value)} />
                </Col>
            </Row>

            <Row className="d-flex justify-content-center">
                <Col md={10} className="d-flex justify-content-end">
                    <Button
                        onClick={onSubmitHandler}
                        disable={name && email && selectedValue && message ? disable : false}
                        title="Submit"
                        backgroundColor={name && email && selectedValue && message ? colors.black : colors.lighter_gray}
                        textColor={name && email && selectedValue && message ? colors.white : colors.gray} />
                </Col>
            </Row>
        </Container>
    )
})

export default FormComponent;