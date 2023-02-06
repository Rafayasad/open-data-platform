import React, { memo } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { colors } from "../../../../utils/colors";
import Heading from "../../../elements/Heading";
import Button from "../../../elements/Button";
import TextInput from "../../../elements/TextInput";
import StraigthLine from "../../../elements/StraigthLine";
import CheckBox from "../../../elements/CheckBox";

const AuthCard = memo((props) => {

  const { title, subtitle, linktext, inputFields, button, checkbox, isForgetPassword } = props;

  return (
    <Card
      className="p-5"
      style={{
        width: "32vw",
        backgroundColor: colors.white,
        borderRadius: "30px",
      }}
    >
      <Container>
        <Row>
          <Col>
            <Heading heading={title} size="xl" />
          </Col>
        </Row>
        <Row>
          <Col className="d-flex">
            <div>
              <Heading heading={subtitle} size="xxs" />
            </div>
            {
              linktext &&
              <div className="mx-2">
                <Heading
                  heading={linktext.display_text}
                  size="xxs"
                  color={colors.purple}
                  underline
                />
              </div>
            }
          </Col>
        </Row>
        <Row>
          {
            inputFields.map((items, index) => (
              <Col key={index} md={12}>
                <TextInput placeholder={items.placeholder} type={items.type} />
              </Col>
            ))
          }
        </Row>
        {
          isForgetPassword &&
          <Row>
            <Col className=" d-flex direction-row justify-content-end">
              <Heading
                heading={"Forget password"}
                size="xxs"
                color={colors.purple}
                underline
              />
            </Col>
          </Row>
        }
        {
          checkbox &&
          <Row>
            <Col className="d-flex mt-3">
              <CheckBox borderColor={checkbox.boxColor} callBack={""} />
              <div className="d-flex mx-2">
                <Heading
                  heading={checkbox.label}
                  size="xxs"
                  color={checkbox.labelColor}
                />
                <div className="mx-1">
                  <Heading
                    heading={checkbox.linktext}
                    size="xxs"
                    color={checkbox.linktextColor}
                    underline
                  />
                </div>
              </div>
            </Col>
          </Row>
        }
        <Row className="my-3">
          {title === "Register" && <Col md={8}>i'm not a robot</Col>}
          <Col md={title === "Register" && 4}>
            {
              button.map((items, index) => (
                <div className="d-flex flex-column align-items-center">
                  <Button
                    title={items.title}
                    backgroundColor={items.backgroundColor}
                    textColor={items.textColor}
                    borderColor={items.borderColor && items.borderColor}
                  />
                  {
                    button.length - 1 != index &&
                    <StraigthLine
                      label="or"
                      textColor={colors.gray}
                      lineColor={colors.light_gray}
                    />
                  }
                </div>
              ))
            }
          </Col>
        </Row>
      </Container>
    </Card>
  );
});

export default AuthCard;
