import React, { memo } from "react";
import { Container, Navbar as RBNavbar, Nav } from "react-bootstrap";

const Navbar = memo(() => {
    return (
        <RBNavbar bg="transparent" style={{ position: 'absolute', top: 0, right: 0, left: 0 }}>
            <Container>
                <RBNavbar.Brand href="#home">
                    <img
                        src="/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </RBNavbar.Brand>
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav"> */}
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                {/* </Navbar.Collapse> */}
            </Container>
        </RBNavbar>
    )
});

export default Navbar;
