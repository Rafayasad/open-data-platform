import React, { memo } from "react";
import { Container } from "react-bootstrap";
import { colors } from "../../../../utils/colors";
import Button from "../../../elements/Button";
import Heading from "../../../elements/Heading";

const Header = memo((props) => {

    const { title, backgroundColor, nobutton } = props

    let color = colors.white;

    if (backgroundColor === colors.white) {
        color = colors.black
    }

    return (
        <Container fluid className="d-flex justify-content-between align-items-center py-4">
            <div>
                <Heading
                    nomargin
                    size="xl"
                    color={color}
                    heading={title} />

            </div>
            {
                !nobutton &&
                <div>
                    <Button
                        title={"View All"}
                        textColor={color}
                        borderColor={color}
                        backgroundColor='transparent'
                    />
                </div>
            }
        </Container>
    )
});

export default Header;