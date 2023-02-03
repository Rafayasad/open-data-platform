import React, { Fragment, memo } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import { colors } from "../../../utils/colors";

const AuthInputField = memo(({ placeholder, type }) => {
  return (
    <Fragment>
      <Form.Floating
        className="mb-3"
        controlId="floatingInput"
        label={placeholder}
        style={{ color: colors.grayish}}
      >
        <Form.Control
            className="px-0"
          id="floatingInputCustom"
          type={type}
          placeholder={placeholder}
          style={{
            borderColor: "transparent",
            borderBottomColor: colors.light_gray,
            borderRadius: 0,
            boxShadow: "none",
          }}
        />
        <label className="px-0" htmlFor="floatingInputCustom">{placeholder}</label>
      </Form.Floating>
    </Fragment>
  );
});

export default AuthInputField;
