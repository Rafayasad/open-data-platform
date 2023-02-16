import React, { memo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AuthBackground1 from "../../../../assets/images/Auth-Background-1.png";
import { colors } from "../../../../utils/colors";
import Heading from "../../../elements/Heading";
import AuthCard from "../AuthCard";
import { useTranslation } from "react-i18next";

const Login = memo(() => {

  const { t } = useTranslation()

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
                  heading={t("pwdopendata")}
                  color={colors.white}
                />
              </Col>
            </Row>
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <AuthCard
              title="logIn"
              subtitle="accDontExist"
              linktext={{ display_text: "requestAccess", onClick: "" }}
              inputFields={[
                { placeholder: "governmentEmail", type: "email" },
                { placeholder: "password", type: "password" },
              ]}
              button={[
                {
                  title: "logIn",
                  onClick: "",
                  backgroundColor: colors.black,
                  textColor: colors.white,
                  textSize: "",
                },
                {
                  title: "LoginWithUAE",
                  onClick: "",
                  backgroundColor: colors.white,
                  textColor: colors.black,
                  borderColor:colors.black,
                  textSize: "",
                },
              ]}
              isForgetPassword
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
});

export default Login;
