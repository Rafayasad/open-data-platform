import React, { memo } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { colors } from "../../../../utils/colors";
import Button from "../../../elements/Button";
import Dropdown from "../../../elements/DropDown";
import Heading from "../../../elements/Heading";
import { useTranslation } from "react-i18next";

const Header = memo((props) => {

    const { t } = useTranslation()

    const { title, backgroundColor, nobutton, size, dropdown, onClickButton, buttonText } = props

    let color = colors.white;
    let headingSize;

    if (backgroundColor === colors.white) {
        color = colors.black
    }

    if (size !== 'lg') {
        headingSize = 'xl'
    }

    return (
        <Container fluid className="d-flex justify-content-between align-items-center py-4">
            <Row className="w-100 p-0 m-0 align-items-center">
                <Col className="px-0">
                    <div>
                        <Heading
                            bold
                            nomargin
                            size={headingSize}
                            color={color}
                            heading={title} />
                    </div>
                </Col>
                <Col md={3} xs={6} className="px-0 d-flex justify-content-end align-items-center">
                    {
                        !nobutton ?
                            <div>
                                <Button
                                    title={buttonText ? buttonText : t("viewAll")}
                                    textColor={color}
                                    borderColor={color}
                                    backgroundColor='transparent'
                                    onClick={onClickButton}
                                />
                            </div> :
                            dropdown ?
                                <Dropdown
                                    textColor={dropdown.selectedValue && "black"}
                                    highlightableItem
                                    autoClose={true}
                                    name={dropdown.title}
                                    options={dropdown.options}
                                    selectedValue={dropdown.selectedValue}
                                    dropdownWidth={"100%"}
                                    width={"100%"}
                                /> :
                                null
                    }
                </Col>
            </Row>
        </Container >
    )
});

export default Header;