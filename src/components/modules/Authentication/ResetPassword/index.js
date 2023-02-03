import React, { memo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AuthBackground2 from "../../../../assets/images/recover-pass-Image.png";
import { colors } from "../../../../utils/colors";
import Heading from "../../../elements/Heading";
import AuthCard from "../AuthCard";

const ResetPassword = memo(() => {
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
                <Heading heading="You're almost there!" color={colors.white} />
                <Heading
                  heading="Password must be different from your previous there."
                  color={colors.white}
                  size="xs"
                />
              </Col>
            </Row>
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <AuthCard
              title="Reset password"
              subtitle="Create a strong password to ensure account safety."
              inputFields={[
                { placeholder: "Government email", type: "email" },
                { placeholder: "Password", type: "password" },
                { placeholder: "Re-enter password", type: "password" },
              ]}
              checkbox={{
                label: "I agree to Abu Dhabi Open Data",
                linktext: "terms and privacy policy",
                boxColor: colors.light_gray,
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
          </Col>
        </Row>
      </Container>
    </div>
  );
});

export default ResetPassword;
