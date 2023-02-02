import React, { memo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AuthBackground1 from "../../../../assets/images/Auth-Background-1.png";
import { colors } from "../../../../utils/colors";
import Heading from "../../../elements/Heading";
import AuthCard from "../AuthCard";

const Register = memo(() => {
  return (
    <div
      className="d-flex"
      style={{
        height: "100vh",
        width: "100vw",
        backgroundImage: `url(${AuthBackground1})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Container fluid className="py-5">
        <Row className="py-5">
          <Col>
            <Row className="p-4">
              <Col md={8}>
                <Heading
                  heading="An Open Data experience that's tailored for you"
                  color={colors.white}
                />
              </Col>
            </Row>
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <AuthCard
              title="Register"
              subtitle="Already have an account?"
              linktext={{ display_text: "Login", onCLick: "" }}
              inputFields={[
                { placeholder: "Full name", type: "text" },
                { placeholder: "Email", type: "email" },
                { placeholder: "Re-enter email", type: "email" },
                { placeholder: "Password", type: "password" },
              ]}
              button={{
                title: "Register",
                onclick: "",
                backgroundColor: colors.black,
                textColor: colors.white,
              }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
});

export default Register;
