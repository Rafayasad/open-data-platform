import React, { memo } from "react";

const Button = memo((props) => {

    const { title, backgroundColor, textColor, width, borderColor, onClick } = props

    return (
        <button
            onClick={onClick}
            className="px-4"
            style={{
                backgroundColor: backgroundColor ? backgroundColor : 'white',
                color: textColor ? textColor : 'black',
                height: 52,
                width: width ? width : 'auto',
                borderRadius: 100,
                border: borderColor ? '2px solid' : 'none',
                borderColor: borderColor,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            {title}
        </button>
    )
});

export default Button;
