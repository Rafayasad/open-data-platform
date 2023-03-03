import React, { memo } from "react";
import { Form } from "react-bootstrap";
import { locales } from "../../../i18n/helper";
import i18n from "../../../i18n/i18n";
import { colors } from "../../../utils/colors";

const TextInput = memo((props) => {

  const { placeholder, type, onChange, value } = props;

  return (
    <Form.Floating
      className="mb-2 p-0 s"
      label={placeholder}
      style={{ color: colors.gray, fontSize: '13px' }}
    >
      <Form.Control
        className="px-0 focus-field"
        id="floatingInputCustom"
        type={type}
        placeholder={placeholder}
        dir="rtl"
        onChange={(e) => onChange(e.target.value)}
        style={{
          border: 0,
          borderRadius: 0,
          borderBottom: value ? "1.5px solid " + colors.black : "1.5px solid " + colors.light_gray,
          boxShadow: "none",
          fontSize: '13px',
          direction: i18n.language === locales.AR ? "rtl" : "ltr",
          margin: 0
        }}
      />
      <label className="px-0" htmlFor="floatingInputCustom">
        {placeholder}
      </label>
    </Form.Floating>
  );
});

export default TextInput;
