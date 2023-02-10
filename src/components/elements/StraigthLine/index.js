import React, { memo } from "react";

const StraigthLine = memo((props) => {

  const { label, textColor, lineColor } = props

  return (
    <div
      style={{ height: "50px", color: textColor }}
      className="d-flex justify-content-between align-items-center w-100"
    >
      <div
        style={{
          backgroundColor: lineColor,
          width: "45%",
          height: "0.5px",
        }}
      ></div>
      {label}
      <div
        style={{
          backgroundColor: lineColor,
          width: "45%",
          height: "0.5px",
        }}
      ></div>
    </div>
  );
});

export default StraigthLine;
