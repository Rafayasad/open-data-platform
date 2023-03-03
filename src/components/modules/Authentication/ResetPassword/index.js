import React, { memo } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import AuthBackground2 from "../../../../assets/images/recover-pass-Image.png";
import { colors } from "../../../../utils/colors";
import Heading from "../../../elements/Heading";
import AuthCard from "../AuthCard";
import { useTranslation } from "react-i18next";

const ResetPassword = memo(() => {

  const { t } = useTranslation()

  return (
    <div>
      <div
        className="d-none d-lg-flex"
        style={{
          minHeight: "100vh",
          width: "100vw",
          backgroundImage: `url(${AuthBackground2})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100vw 100%",
        }}
      >
        <Container fluid className="my-5 pt-5">
          <Row>
            <Col>
              <Row className="px-3 py-5">
                <Col md={8}>
                  <Heading heading={t("almostThere")} color={colors.white} />
                  <Heading
                    heading={t("passwordValidation")}
                    color={colors.white}
                    size="xs"
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
                  title={t("resetPassword")}
                  subtitle={t("strongPassword")}
                  inputFields={[
                    { placeholder: t("governmentEmail"), type: "email" },
                    { placeholder: t("password"), type: "password" },
                    { placeholder: t("rePwd"), type: "password" },
                  ]}
                  checkbox={{
                    label: t("agreeCond"),
                    linktext: "terms and privacy policy",
                    borderColor: colors.light_gray,
                    linktextColor: colors.purple,
                    labelColor: colors.black,
                  }}
                  button={[
                    {
                      title: t("login"),
                      onClick: "",
                      backgroundColor: colors.black,
                      textColor: colors.white,
                      textSize: "",
                    },
                  ]}
                />
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div style={{ width: '100vw', height: '100vh' }} className="d-flex justify-content-center align-items-end d-lg-none">
        <Container>
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
                  title="Reset password"
                  subtitle="Create a strong password to ensure account safety"
                  inputFields={[
                    { placeholder: "Government email", type: "email" },
                    { placeholder: "Password", type: "password" },
                    { placeholder: "Re-enter password", type: "password" },
                  ]}
                  checkbox={{
                    label: "I agree to Abu Dhabi Open Data",
                    linktext: "terms and privacy policy",
                    borderColor: colors.light_gray,
                    linktextColor: colors.purple,
                    labelColor: colors.black,
                  }}
                  button={[
                    {
                      title: "Login",
                      onClick: "",
                      backgroundColor: colors.black,
                      textColor: colors.white,
                      textSize: "",
                    },
                  ]}
                />
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
});

export default ResetPassword;
