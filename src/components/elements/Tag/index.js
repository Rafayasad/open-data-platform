import React, { memo } from "react";

const Tag = memo((props) => {

    const { title, backgroundColor, textColor, onClick, borderColor, crossIcon } = props;

    return (
        <div onClick={() => onClick ? onClick() : () => { }} className="px-3 mx-1 d-flex justify-content-center align-items-center" style={{ minHeight: '36px', backgroundColor: backgroundColor ? backgroundColor : '#F3E6FA', borderRadius: '100px', color: textColor ? textColor : '#8207C9', cursor: "pointer", borderColor: "lightgray", border: borderColor && borderColor }}>
            <p className="m-0">{title} {crossIcon && crossIcon}</p>
        </div>
    )
});

export default Tag;