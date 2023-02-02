import React, { memo } from "react";

const Button = memo((props) => {

  const { title, backgroundColor, textColor } = props;

  return (
    <button
      className="px-4"
      style={{
        backgroundColor: backgroundColor ? backgroundColor : "white",
        color: textColor ? textColor : "black",
        height: 52,
        width: "auto",
        borderRadius: 100,
        border: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {title}
    </button>
  );
});

export default Button;
