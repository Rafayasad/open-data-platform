import React, { memo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AuthBackground2 from "../../../../assets/images/recover-pass-Image.png";
import { colors } from "../../../../utils/colors";
import Heading from "../../../elements/Heading";
import AuthCard from "../AuthCard";

const RecoverPassword = memo(() => {
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
                <Heading
                  heading="An Open Data experience that's tailored for you"
                  color={colors.white}
                />
              </Col>
            </Row>
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <AuthCard
              title="Recover password"
              subtitle="Enter the email you use for Abu Dhabi Data. We'll send you instructions there."
              inputFields={[{ placeholder: "Registered email", type: "email" }]}
              button={[
                {
                  title: "Send code",
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
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
});

export default RecoverPassword;
