import React, { memo } from "react";
import { Form } from "react-bootstrap";
import { colors } from "../../../utils/colors";

const TextInput = memo((props) => {

  const { placeholder, type } = props;

  return (
    <Form.Floating
      className="mb-3"
      controlId="floatingInput"
      label={placeholder}
      style={{ color: colors.gray }}
    >
      <Form.Control
        className="px-0"
        id="floatingInputCustom"
        type={type}
        placeholder={placeholder}
        style={{
          border: 0,
          borderRadius: 0,
          borderBottom: "1.5px solid " + colors.gray,
          boxShadow: "none",
        }}
      />
      <label className="px-0" htmlFor="floatingInputCustom">
        {placeholder}
      </label>
    </Form.Floating>
  );
});

export default TextInput;
