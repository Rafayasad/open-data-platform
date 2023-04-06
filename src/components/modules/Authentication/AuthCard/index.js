import React, { memo, useCallback, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { colors } from "../../../../utils/colors";
import Heading from "../../../elements/Heading";
import Button from "../../../elements/Button";
import TextInput from "../../../elements/TextInput";
import StraigthLine from "../../../elements/StraigthLine";
import CheckBox from "../../../elements/CheckBox";
import { useTranslation } from "react-i18next";
import Recaptcha from "../../../elements/Recaptcha";
import OtpInput from "react18-input-otp";

const AuthCard = memo((props) => {



  const { t } = useTranslation()

  const { view, title, subtitle, linktext, inputFields, button, checkbox, recaptcha, onClickForgetPassword, hasOtp, otp, setOtp } = props;

  // const [otp, setOtp] = useState("");

  const recaptchaCallback = useCallback((value) => recaptcha(value));

  const otpCallbackk = useCallback((val) => setOtp(val))

  return (
    <Container fluid>
      <Row className="py-2">
        <Col>
          <Heading bold nomargin heading={title} />
        </Col>
      </Row>
      <Row className="py-2">
        <Col className="d-flex">
          <div>
            <Heading nomargin heading={subtitle} size="xxs" />
          </div>
          {
            linktext &&
            <div className="mx-2">
              <Heading
                nomargin
                heading={linktext.display_text}
                size="xxs"
                color={colors.purple}
                underline
                onClick={linktext.onClick}
              />
            </div>
          }
        </Col>
      </Row>
      {
        inputFields &&
        <Row className="py-2">
          {
            inputFields.length > 0 && inputFields.map((items, index) => (
              <Col key={index} md={12} className="py-2">
                <TextInput title={title} value={items.value} placeholder={items.placeholder} type={items.type} onChange={items.onChange} />
              </Col>
            ))
          }
        </Row>
      }
      {
        hasOtp &&
        <Row className="py-2">
          <Col>
            <OtpInput className="w-100" value={otp} onChange={otpCallbackk} numInputs={6} inputStyle={{ width: '100%', height: '100%', margin: '5px' }} containerStyle={{ width: "auto", height: '50px', margin: '5px' }} />
          </Col>
        </Row>
      }
      {
        onClickForgetPassword &&
        <Row>
          <Col className=" d-flex direction-row justify-content-end">
            <Heading
              nomargin
              heading={t("forgetPassword")}
              size="xxs"
              color={colors.purple}
              underline
              onClick={onClickForgetPassword}
            />
          </Col>
        </Row>
      }
      {
        checkbox &&
        <Row className="py-2">
          <Col className="d-flex">
            <CheckBox borderColor={checkbox.boxColor} callBack={checkbox.onClick} />
            <Col xs={8} className="d-flex mx-2">
              <Heading
                nomargin
                heading={checkbox.label}
                size="xxs"
                color={checkbox.labelColor}
              />
            </Col>
          </Col>
        </Row>
      }
      <Row className="py-2">
        {title === t("register") &&
          <Col sm={8} md={8}>
            <Recaptcha callBack={recaptchaCallback} />
          </Col>
        }
        <Col sm={12} md={title === t("register") ? 4 : 12}>
          {
            button.map((items, index) => (
              <div key={index} className="d-flex flex-column align-items-center">
                <Button
                  padding={items.title === t("logIn") && "mt-3"}
                  width={title === t("register") ? "auto" : "80%"}
                  disable={items.disable}
                  title={items.title}
                  icon={items.icon}
                  backgroundColor={items.backgroundColor}
                  textColor={items.textColor}
                  borderColor={items.borderColor && items.borderColor}
                  onClick={() => items.onClick()}
                  loading={items.loading}
                  bold={items.bold}
                />
                {
                  button.length - 1 != index &&
                  <StraigthLine
                    label={t("or")}
                    textColor={colors.gray}
                    lineColor={colors.light_gray}
                  />
                }
              </div>
            ))
          }
        </Col>
      </Row>
    </Container >
  );
});

export default AuthCard;
