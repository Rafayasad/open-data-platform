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

    const [selectedValue, setSelectedValue] = useState("");

    let color = colors.white;
    let headingSize;

    if (backgroundColor === colors.white) {
        color = colors.black
    }

    if (size !== 'lg') {
        headingSize = 'xl'
    }

    const handleSelect = useCallback((value) => setSelectedValue(value), [selectedValue]);

    const data = [
        {
            title: string("modified"),
            onClick: handleSelect,
        },
        {
            title: string("title"),
            onClick: handleSelect,
        }
    ]

    const iconData = [
        {
            title: string("excel source texts ssssssss ssssssss sssssssssss sssssssssssssssss ssssssssss"),
            onClick: handleSelect,
            icon: <FaFileExcel size={25} />
        },
        {
            title: string("csv source text"),
            onClick: handleSelect,
            icon: <FaFileCsv size={25} />
        },
        {
            title: string("pdf source text"),
            onClick: handleSelect,
            icon: <FaFilePdf size={25} />
        }
    ]

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
                            dropdownName={string("sortBy")}
                            data={data}
                            bgColor={"transparent"}
                            selectedValue={selectedValue}
                        /> :
                        null
            }
        </Container >
    )
});

export default Header;