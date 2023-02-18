import React, { memo } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import AuthBackground1 from "../../../../assets/images/Auth-Background-1.png";
import { colors } from "../../../../utils/colors";
import Heading from "../../../elements/Heading";
import AuthCard from "../AuthCard";
import { useTranslation } from "react-i18next";

const Register = memo(() => {

  const { t } = useTranslation()

  return (
    <div>
      <div
        className="d-none d-lg-flex"
        style={{
          minHeight: "100vh",
          width: "100vw",
          backgroundImage: `url(${AuthBackground1})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100vw 100%",
        }}
      >
        <Container fluid className="my-5">
          <Row>
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
              <Card
                className="p-5"
                style={{
                  width: "450px",
                  backgroundColor: colors.white,
                  borderRadius: "30px",
                  height: "100%"
                }}
              >
                <AuthCard
                  view="dekstop"
                  title="Register"
                  subtitle="Already have an account?"
                  linktext={{ display_text: "Login", onClick: "" }}
                  inputFields={[
                    { placeholder: "Full name", type: "text" },
                    { placeholder: "Email", type: "email" },
                    { placeholder: "Re-enter email", type: "email" },
                    { placeholder: "Password", type: "password" },
                  ]}
                  button={[{
                    title: "Register",
                    onClick: "",
                    backgroundColor: colors.black,
                    textColor: colors.white,
                    textSize: '',
                    borderColor: colors.black
                  }]}
                  checkbox={{
                    label: 'I agree to Abu Dhabi Open Data',
                    linktext: 'terms and privacy policy',
                    borderColor: colors.light_gray,
                    linktextColor: colors.purple,
                    labelColor: colors.black
                  }}
                />
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div style={{ width: '100vw', height: '100vh' }} className="d-flex justify-content-center align-items-end d-lg-none">
        <Container fluid>
          <Row>
            <Col className="d-flex justify-content-center align-items-center">
              <Card
                className="p-0 mt-5"
                style={{
                  width: "100vw",
                  backgroundColor: colors.white,
                  borderRadius: "30px",
                  height: "100%",
                  borderColor: 'transparent'
                }}
              >
                <AuthCard
                  view="mobile"
                  title="Register"
                  subtitle="Already have an account?"
                  linktext={{ display_text: "Login", onClick: "" }}
                  inputFields={[
                    { placeholder: "Full name", type: "text" },
                    { placeholder: "Email", type: "email" },
                    { placeholder: "Re-enter email", type: "email" },
                    { placeholder: "Password", type: "password" },
                  ]}
                  button={[{
                    title: "Register",
                    onClick: "",
                    backgroundColor: colors.black,
                    textColor: colors.white,
                    textSize: '',
                    borderColor: colors.black
                  }]}
                  checkbox={{
                    label: 'I agree to Abu Dhabi Open Data',
                    linktext: 'terms and privacy policy',
                    borderColor: colors.light_gray,
                    linktextColor: colors.purple,
                    labelColor: colors.black
                  }}
                />
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
});

export default Register;
