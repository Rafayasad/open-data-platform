import React, { memo, useCallback, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import AuthBackground1 from "../../../../assets/images/Auth-Background-1.png";
import { colors } from "../../../../utils/colors";
import Heading from "../../../elements/Heading";
import AuthCard from "../AuthCard";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { register } from "../../../../axios/api";
import { routes } from "../../../../router/helper";

const Register = memo(() => {

  const { t } = useTranslation();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reEmail, setReEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isChecked, setIsChecked] = useState(false);
  const [isRecaptcha, setIsRecaptcha] = useState();

  const onClickRegister = useCallback(() => {
    if (isChecked && isRecaptcha != null && name && email && reEmail && password) {
      register(navigate, routes.HOME, setLoading, { email, password, reEmail, name })
    } else {
      alert("sorry");
    }
  });

  const checked = useCallback((check) => setIsChecked(check), [isChecked]);
  const recaptcha = useCallback((value) => setIsRecaptcha(value));
  const onClickLogin = useCallback(() => navigate(routes.LOGIN));
  const onClickTermsAndPolicy = useCallback(() => navigate(routes.POLICY));

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
                  title={t("register")}
                  recaptcha={recaptcha}
                  subtitle={t("accExist")}
                  linktext={{ display_text: t("login"), onClick: onClickLogin }}
                  inputFields={[
                    { placeholder: t("fullName"), type: "text", onChange: (value) => setName(value) },
                    { placeholder: t("pwdEmail"), type: "email", onChange: (value) => setEmail(value) },
                    { placeholder: t("reEmail"), type: "email", onChange: (value) => setReEmail(value) },
                    { placeholder: t("password"), type: "password", onChange: (value) => setPassword(value) },
                  ]}
                  button={[{
                    title: t("register"),
                    onClick: onClickRegister,
                    backgroundColor: colors.black,
                    textColor: colors.white,
                    textSize: '',
                    borderColor: colors.black,
                    loading
                  }]}
                  checkbox={{
                    onClick: checked,
                    naviagte: onClickTermsAndPolicy,
                    label: <p>{t("agreeCond")} <span onClick={() => navigate(routes.POLICY)} style={{ color: colors.purple, cursor: "pointer" }}> {t("terms")} </span > {t("and")} <span onClick={() => navigate(routes.POLICY)} style={{ color: colors.purple, cursor: "pointer" }}> {t("policy")} </span></p>,
                    borderColor: colors.light_gray,
                    linktextColor: colors.purple,
                    labelColor: colors.black,

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
                  recaptcha={recaptcha}
                  inputFields={[
                    { placeholder: "Full name", type: "text", onChange: (value) => setName(value) },
                    { placeholder: "Email", type: "email", onChange: (value) => setEmail(value) },
                    { placeholder: "Re-enter email", type: "email", onChange: (value) => setReEmail(value) },
                    { placeholder: "Password", type: "password", onChange: (value) => setPassword(value) },
                  ]}
                  button={[{
                    title: "Register",
                    onClick: onClickRegister,
                    backgroundColor: colors.black,
                    textColor: colors.white,
                    textSize: '',
                    borderColor: colors.black
                  }]}
                  checkbox={{
                    onClick: checked,
                    label: <p>{t("agreeCond")} <span onClick={() => navigate(routes.POLICY)} style={{ color: colors.purple, cursor: "pointer" }}> {t("terms")} </span > {t("and")} <span style={{ color: colors.purple, cursor: "pointer" }}> {t("policy")} </span></p>,
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
