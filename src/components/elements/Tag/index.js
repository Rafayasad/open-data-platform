import React, { memo } from "react";
import './style.css';

const Tag = memo((props) => {

    const { title, backgroundColor, textColor, onClick, borderColor, crossIcon, hoverEffect, margin } = props;

    return (
        <div onClick={() => onClick ? onClick() : () => { }} className={`tag-primary py-1 px-3 mx-${!margin ? "1" : margin} d-flex justify-content-center align-items-center ${hoverEffect && "tag-hover"}`} style={{ minHeight: '36px', backgroundColor: backgroundColor ? backgroundColor : '#F3E6FA', borderRadius: '100px', color: textColor ? textColor : '#8207C9', cursor: "pointer", border: borderColor && borderColor }}>
            <p className="m-0 en-font-default">{title} {crossIcon && crossIcon}</p>
        </div>
    )
});

export default Tag;