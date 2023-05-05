import '../style.css';
import React, { memo, useCallback, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import AuthBackground1 from "../../../../assets/images/Auth-Background-1.jpg";
import { colors } from "../../../../utils/colors";
import Heading from "../../../elements/Heading";
import AuthCard from "../AuthCard";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { register } from "../../../../axios/api";
import { routes } from "../../../../router/helper";
import { toast } from "react-toastify";
import { isStrongPassword, validateEmail } from "../../../../utils/generic";
import { locales } from "../../../../i18n/helper";

const Register = memo(() => {

  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [disable, setDisable] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reEmail, setReEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isChecked, setIsChecked] = useState(false);
  const [isRecaptcha, setIsRecaptcha] = useState();

  console.log("name", name, email);

  const onClickRegister = useCallback(() => {
    if (email === '' || reEmail === '' || password === '' || name === '' || isRecaptcha == null || !isChecked) {
      toast("Please fill all the fields.", { type: "error" })
    } else if (validateEmail(email) === false) {
      toast("Please provide a valid email address.", { type: "error" })
    } else if (isStrongPassword(password) === false) {
      toast("Password isn't matching validation requirements.", { type: "error" })
    } else if (email !== reEmail) {
      toast("Both email doesn't match.", { type: "error" })
    } else if (!isChecked) {
      toast("Please check the Abu Dhabi Open Data terms and policy.", { type: "error" })
    } else if (isChecked && isRecaptcha != null && name && email && reEmail && password) {
      register(navigate, routes.HOME, setLoading, { email, password, reEmail, name })
    }
  });

  const checked = useCallback((check) => setIsChecked(check), [isChecked]);
  const recaptcha = useCallback((value) => setIsRecaptcha(value));
  const onClickLogin = useCallback(() => navigate(routes.LOGIN));
  const onClickTermsAndPolicy = useCallback(() => navigate(routes.POLICY));



  return (
    <div>
      <div
        className={`d-none d-lg-flex main-auth ${i18n.language === locales.AR ? "flipImage" : "defaultImage"}`}>
        <Container fluid className="my-5 pt-5">
          <Row className="p-0">
            <Col className="pt-2 m-0">
              <Row className="px-3 py-5">
                <Col md={8}>
                  <p className={`fs-mega text-white ${i18n.language === locales.AR ? "ar-font-bold" : "en-font-bold"}`}>{t("openDataTitle")}</p>
                  {/* <Heading
                    heading={t("openDataTitle")}
                    color={colors.white}
                  /> */}
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
                  view="desktop"
                  title={t("register")}
                  recaptcha={recaptcha}
                  subtitle={t("accExist")}
                  linktext={{ display_text: t("login"), onClick: onClickLogin }}
                  inputFields={[
                    { placeholder: t("fullName"), type: "text", onChange: (value) => setName(value), value: name },
                    { placeholder: t("pwdEmail"), type: "text", onChange: (value) => setEmail(value), value: email },
                    { placeholder: t("reEmail"), type: "text", onChange: (value) => setReEmail(value), value: reEmail },
                    { placeholder: t("password"), type: "password", onChange: (value) => setPassword(value), value: password },
                  ]}
                  button={[{
                    title: t("register"),
                    onClick: onClickRegister,
                    backgroundColor: name && email && reEmail && password && isChecked && isRecaptcha ? colors.black : colors.lighter_gray,
                    textColor: name && email && reEmail && password && isChecked && isRecaptcha ? colors.white : colors.gray,
                    textSize: '',
                    borderColor: name && email && reEmail && password && isChecked && isRecaptcha && colors.black,
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
      <div style={{ width: '100vw', height: '' }} className="mt-5 pt-5 d-flex justify-content-center align-items-end d-lg-none">
        <Container fluid>
          <Row>
            <Col className="d-flex my-3 justify-content-center align-items-center">
              <Card
                className="p-0"
                style={{
                  width: "100vw",
                  backgroundColor: colors.white,
                  // borderRadius: "30px",
                  // height: "80%",
                  borderColor: 'transparent'
                }}
              >
                <AuthCard
                  view="mobile"
                  title={t("register")}
                  subtitle={t("alreadyAccount")}
                  linktext={{ display_text: t("login"), onClick: onClickLogin }}
                  recaptcha={recaptcha}
                  inputFields={[
                    { placeholder: "Full name", type: "text", onChange: (value) => setName(value), value: name },
                    { placeholder: "Email", type: "text", onChange: (value) => setEmail(value), value: email },
                    { placeholder: "Re-enter email", type: "text", onChange: (value) => setReEmail(value), value: reEmail },
                    { placeholder: "Password", type: "password", onChange: (value) => setPassword(value), value: password },
                  ]}
                  button={[{
                    title: t("register"),
                    onClick: onClickRegister,
                    backgroundColor: colors.black,
                    textColor: colors.white,
                    textSize: '',
                    borderColor: colors.black
                  }]}
                  checkbox={{
                    onClick: checked,
                    label: <p>{t("agreeCond")} <span onClick={() => navigate(routes.POLICY, { state: { data: { email } } })} style={{ color: colors.purple, cursor: "pointer" }}> {t("terms")} </span > {t("and")} <span onClick={() => navigate(routes.POLICY)} style={{ color: colors.purple, cursor: "pointer" }}> {t("policy")} </span></p>,
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
