import React, { memo } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import AuthBackground2 from "../../../../assets/images/recover-pass-Image.png";
import { colors } from "../../../../utils/colors";
import Heading from "../../../elements/Heading";
import AuthCard from "../AuthCard";

const RecoverPassword = memo(() => {
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
                      backgroundColor: colors.white,
                      textColor: colors.black,
                      borderColor: colors.black,
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
                      backgroundColor: colors.white,
                      textColor: colors.black,
                      borderColor: colors.black,
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

export default RecoverPassword;
