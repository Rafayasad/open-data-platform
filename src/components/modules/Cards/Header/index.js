import React, { memo } from "react";
import { Container } from "react-bootstrap";
import { colors } from "../../../../utils/colors";
import Button from "../../../elements/Button";
import Dropdown from "../../../elements/DropDown";
import Heading from "../../../elements/Heading";
import { useTranslation } from "react-i18next";

const Header = memo((props) => {

    const { t } = useTranslation()

    const { title, backgroundColor, nobutton, size, dropdown } = props

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
            <div>
                <Heading
                    nomargin
                    size={headingSize}
                    color={color}
                    heading={title} />

            </div>
            {
                !nobutton ?
                    <div>
                        <Button
                            title={t("viewAll")}
                            textColor={color}
                            borderColor={color}
                            backgroundColor='transparent'
                        />
                    </div> :
                    dropdown ?
                        <Dropdown
                            name={dropdown.title}
                            options={dropdown.options}
                            selectedValue={dropdown.selectedValue}
                        /> :
                        null
            }
        </Container >
    )
});

export default Header;