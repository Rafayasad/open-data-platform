import React, { memo } from "react";
import Form from "react-bootstrap/Form";
import './style.css';

const CheckBox = memo((props) => {

  const { borderColor, callBack } = props

  return (
    <Form.Check.Input
      type="checkbox"
      style={{
        minWidth: "16px",
        maxWidth: "16px",
        marginRight:'10px',
        borderColor: borderColor,
      }}
    />
  );
});

export default CheckBox;
