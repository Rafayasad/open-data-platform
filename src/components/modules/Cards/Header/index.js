import React, { memo, useState } from "react";
import { Container } from "react-bootstrap";
import { string } from "../../../../i18n/helper";
import Button from "../../../elements/Button";
import CustomDropdown from "../../../elements/DropDown";
import Heading from "../../../elements/Heading";

const Header = memo((props) => {

    const { title, color, dropdown } = props

    const [selectedValue, setSelectedValue] = useState("");
    const handleSelect = (selectedValue) => {
        console.log("callback", selectedValue);
        setSelectedValue(selectedValue)
    }

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

    return (
        <Container fluid className="d-flex justify-content-between align-items-center py-4">
            <div>
                <Heading
                    size="xl"
                    color={color}
                    heading={title} />

            </div>
            <div>
                {dropdown ?
                    <CustomDropdown data={data} bgColor={"transparent"} selectedValue={selectedValue} />
                    : <Button title={"View All"} />
                }
            </div>
        </Container>
    )
});

export default Header;