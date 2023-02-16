import React, { memo } from "react";
import i18next from "i18next";
import "./style.css";

const Heading = memo((props) => {

  const { heading, color, size, underline, maxNumberOfLines, nomargin, capitalize, bold, onClick } = props;

  var Tag,
    ClassName = "";

  if (!size) {
    ClassName = "display-5";
  }

  if (size === "xxs") {
    Tag = "p";
    ClassName = ClassName + " " + "en-font-default"
  } else if (size === "xs") {
    Tag = "h5";
  } else if (size === "sm") {
    Tag = "h4";
  } else if (size === "md") {
    Tag = "h3";
  } else if (size === "lg") {
    Tag = "h2";
  } else if (size === "xxl") {
    Tag = "h1";
    ClassName = "display-3 fw-bolder";
  } else {
    Tag = "h1";
  }

  if (underline) {
    ClassName = ClassName + " " + "text-underline-hover";
  }

  if (maxNumberOfLines) {
    ClassName = ClassName + " " + "multine-ellipsis-" + maxNumberOfLines;
  }

  if (nomargin) {
    ClassName = ClassName + " " + "m-0";
  }

  if (capitalize) {
    ClassName = ClassName + " " + "text-capitalize"
  }

  if (bold) {
    ClassName = ClassName + " " + `${i18next.language === 'ar' ? "ar-font-bold" : "en-font-bold"}`
  }

  return (
    <Tag
      className={ClassName}
      style={{
        color: color ? color : "#00000"
      }}
      onClick={onClick ? onClick : () => { }}
    >
      {heading}
    </Tag>
  );
});

export default Heading;
