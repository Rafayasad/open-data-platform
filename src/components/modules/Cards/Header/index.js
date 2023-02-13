import React, { memo, useCallback, useState } from "react";
import { Container } from "react-bootstrap";
import { string } from "../../../../i18n/helper";
import { colors } from "../../../../utils/colors";
import Button from "../../../elements/Button";
import Dropdown from "../../../elements/DropDown";
import Heading from "../../../elements/Heading";
import { FaFileExcel } from "react-icons/fa";
import { FaFileCsv } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";

const Header = memo((props) => {

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
                            title={"View All"}
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