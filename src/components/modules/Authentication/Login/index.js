import React, { memo, useCallback, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import AuthBackground1 from "../../../../assets/images/Auth-Background-1.png";
import { validateUser } from "../../../../axios/api";
import { routes } from "../../../../router/helper";
import { colors } from "../../../../utils/colors";
import Heading from "../../../elements/Heading";
import AuthCard from "../AuthCard";
import { toast } from "react-toastify";

const Login = memo(() => {

  const { t } = useTranslation();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const onClickLogin = useCallback(() => {

    if (email && password) {
      validateUser(navigate, routes.OTP, setLoading, { email, password })
    } else {
      toast("All fields are required.", { type: "error" })
    }

  });
  const onClickForgetPassword = useCallback(() => navigate(routes.RECOVER));
  const onClickRegister = useCallback(() => navigate(routes.REGISTER));

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
        <Container fluid className="my-5 pt-5">
          <Row>
            <Col>
              <Row className="p-4">
                <Col md={8}>
                  <Heading
                    heading={t("openDataTitle")}
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
                  title={t("logIn")}
                  subtitle={t("accDontExist")}
                  linktext={{ display_text: t("requestAccess"), onClick: onClickRegister }}
                  inputFields={[
                    { placeholder: t("governmentEmail"), type: "email", onChange: (value) => setEmail(value) },
                    { placeholder: t("password"), type: "password", onChange: (value) => setPassword(value) },
                  ]}
                  button={[
                    {
                      title: t("logIn"),
                      onClick: onClickLogin,
                      backgroundColor: colors.black,
                      textColor: colors.white,
                      textSize: "",
                      loading
                    },
                    {
                      title: t("LoginWithUAE"),
                      onClick: "",
                      backgroundColor: colors.white,
                      textColor: colors.black,
                      borderColor: colors.black,
                      textSize: "",
                    },
                  ]}
                  onClickForgetPassword={onClickForgetPassword}
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
                className="p-0 my-5"
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
                  title={t("logIn")}
                  subtitle={t("accDontExist")}
                  linktext={{ display_text: t("requestAccess"), onClick: onClickRegister }}
                  inputFields={[
                    { placeholder: t("governmentEmail"), type: "email" },
                    { placeholder: t("password"), type: "password" },
                  ]}
                  button={[
                    {
                      title: t("logIn"),
                      onClick: "",
                      backgroundColor: colors.black,
                      textColor: colors.white,
                      textSize: "",
                    },
                    {
                      title: t("LoginWithUAE"),
                      onClick: "",
                      backgroundColor: colors.white,
                      textColor: colors.black,
                      borderColor: colors.black,
                      textSize: "",
                    },
                  ]}
                  onClickForgetPassword={onClickForgetPassword}
                />
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
});

export default Login;
