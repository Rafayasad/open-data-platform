import React, { memo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AuthBackground2 from "../../../../assets/images/recover-pass-Image.png";
import { colors } from "../../../../utils/colors";
import Heading from "../../../elements/Heading";
import AuthCard from "../AuthCard";
import { useTranslation } from "react-i18next";

const ResetPassword = memo(() => {

  const { t } = useTranslation()

  return (
    <div
      className="d-flex"
      style={{
        height: "100vh",
        width: "100vw",
        backgroundImage: `url(${AuthBackground2})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100vw 100vh",
      }}
    >
      <Container fluid className="py-5">
        <Row className="py-5">
          <Col>
            <Row className="p-5">
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
            <AuthCard
              title="resetPassword"
              subtitle="strongPassword"
              inputFields={[
                { placeholder: "governmentEmail", type: "email" },
                { placeholder: "password", type: "password" },
                { placeholder: "rePwd", type: "password" },
              ]}
              checkbox={{
                label: "agreeCond",
                linktext: "termsAndPolicy",
                borderColor: colors.light_gray,
                linktextColor: colors.purple,
                labelColor: colors.black,
              }}
              button={[
                {
                  title: "login",
                  onClick: "",
                  backgroundColor: colors.black,
                  textColor: colors.white,
                  textSize: "",
                },
              ]}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
});

export default ResetPassword;
