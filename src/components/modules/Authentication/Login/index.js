import React, { memo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AuthBackground1 from "../../../../assets/images/Auth-Background-1.png";
import { colors } from "../../../../utils/colors";
import Heading from "../../../elements/Heading";
import AuthCard from "../AuthCard";

const Login = memo(() => {
  return (
    <div
      className="d-flex"
      style={{
        height: "100vh",
        width: "100vw",
        backgroundImage: `url(${AuthBackground1})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100vw 100vh",
      }}
    >
      <Container fluid className="py-5">
        <Row className="py-5">
          <Col>
            <Row className="p-5">
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
              title="Log in"
              subtitle="Don't have an account?"
              linktext={{ display_text: "Request access", onClick: "" }}
              inputFields={[
                { placeholder: "Government email", type: "email" },
                { placeholder: "Password", type: "password" },
              ]}
              button={[
                {
                  title: "Log in",
                  onClick: "",
                  backgroundColor: colors.black,
                  textColor: colors.white,
                  textSize: "",
                },
                {
                  title: "Log in with UAE PASS",
                  onClick: "",
                  backgroundColor: colors.black,
                  textColor: colors.white,
                  textSize: "",
                },
              ]}
              isForgetPassword={true}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
});

export default Login;
