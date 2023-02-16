import React, { memo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AuthBackground1 from "../../../../assets/images/Auth-Background-1.png";
import { colors } from "../../../../utils/colors";
import Heading from "../../../elements/Heading";
import AuthCard from "../AuthCard";
import { useTranslation } from "react-i18next";

const Register = memo(() => {

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
              title="register"
              subtitle="accExist"
              linktext={{ display_text: "login", onClick: "" }}
              inputFields={[
                { placeholder: "fullName", type: "text" },
                { placeholder: "pwdEmail", type: "email" },
                { placeholder: "reEmail", type: "email" },
                { placeholder: "password", type: "password" },
              ]}
              button={[{
                title: "register",
                onClick: "",
                backgroundColor: colors.black,
                textColor: colors.white,
                textSize:'',
                borderColor:colors.black
              }]}
              checkbox={{
                label:'agreeCond',
                linktext:'termsAndPolicy',
                borderColor:colors.light_gray,
                linktextColor:colors.purple,
                labelColor:colors.black
              }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
});

export default Register;
