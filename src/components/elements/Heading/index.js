import React, { memo } from "react";
import { RxArrowTopRight, RxArrowTopLeft } from "react-icons/rx";
import i18next from "i18next";
import "./style.css";
import i18n from "../../../i18n/i18n";
import { locales } from "../../../i18n/helper";

const Heading = memo((props) => {

  const { heading, color, size, underline, maxNumberOfLines, nomargin, capitalize, bold, onClick, downloadURL } = props;

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
    ClassName = "display-3";
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
        color: color ? color : "#00000",
        cursor: onClick && "pointer",
        // maxWidth: "30%"
      }}
      onClick={onClick ? onClick : () => { }}
    >
      {downloadURL && <a style={{ textDecoration: "none", color: "white" }} target={"_blank"} href={downloadURL}>{heading} {i18n.language === locales.EN ? <RxArrowTopRight size={25} color='white' className='mx-2' /> : <RxArrowTopLeft size={25} color='white' className='mx-2' />}</a>}
      {!downloadURL && heading}
    </Tag>
  );
});

export default Heading;
