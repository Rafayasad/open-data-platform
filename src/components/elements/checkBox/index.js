import React, { memo } from "react";
import Form from "react-bootstrap/Form";
import './style.css';

const CheckBox = memo(({ boxColor, callBack }) => {
  return (
    <Form.Check.Input
      type="checkbox"
      style={{
        minWidth: "16px",
        maxWidth: "16px",
        borderColor: boxColor,
      }}
    />
  );
});

export default CheckBox;
