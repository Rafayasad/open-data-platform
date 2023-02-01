import React, { memo } from "react";
import { Container } from "react-bootstrap";
import Button from "../../../elements/Button";
import Heading from "../../../elements/Heading";

const Header = memo((props) => {

    const { title, color } = props

    return (
        <Container fluid className="d-flex justify-content-between align-items-center py-4">
            <div>
                <Heading
                    size="xl"
                    color={color}
                    heading={title} />

            </div>
            <div>
                <Button title={"View All"} />
            </div>
        </Container>
    )
});

export default Header;