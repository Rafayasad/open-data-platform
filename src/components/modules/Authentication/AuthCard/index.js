import React, {memo } from "react";
import {
  Card,
  Container,
  Row,
  Col,
  FloatingLabel,
  Form,
} from "react-bootstrap";
import { colors } from "../../../../utils/colors";
import Heading from "../../../elements/Heading";
import Button from "../../../elements/Button";

const AuthCard = memo(({ title, subtitle, linktext, inputFields, button }) => {
  return (
    <Card
      className="p-5"
      style={{
        height: "650px",
        width: "500px",
        backgroundColor: colors.white,
        borderRadius: "30px",
      }}
    >
      <Container>
        <Row>
          <Col>
            <Heading heading={title} />
          </Col>
        </Row>
        <Row>
          <Col className="d-flex">
            <div>
              <Heading heading={subtitle} size="xxs" />
            </div>
            <div className="mx-2">
              <Heading
                heading={linktext.display_text}
                size="xxs"
                color={colors.purple}
                underline
              />
            </div>
          </Col>
        </Row>
        <Row>
          {inputFields.map((items, index) => {
            return (
                <Col key={index} md={12}>
                  <FloatingLabel
                    controlId="floatingInput"
                    label={items.placeholder}
                    className="mb-3"
                    style={{ color: colors.gray }}
                  >
                    <Form.Control
                      style={{
                        borderColor: "transparent",
                        borderBottomColor: colors.gray,
                        borderRadius: 0,
                        boxShadow: "none",
                      }}
                      type={items.type}
                      placeholder={items.placeholder}
                    />
                  </FloatingLabel>
                </Col>
            );
          })}
        </Row>
        <Row>
          <Col>
            <Button
              title={button.title}
              backgroundColor={button.backgroundColor}
              textColor={button.textColor}
            />
          </Col>
        </Row>
      </Container>
    </Card>
  );
});

export default AuthCard;
