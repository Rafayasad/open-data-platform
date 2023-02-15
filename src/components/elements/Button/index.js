import React, { memo } from "react";
import { useTranslation } from "react-i18next";

const Button = memo((props) => {

    const { t } = useTranslation()

    const { title, backgroundColor, textColor, borderColor, onClick } = props

    return (
        <button
            onClick={onClick}
            className="px-4 en-font-default"
            style={{
                backgroundColor: backgroundColor ? backgroundColor : 'white',
                color: textColor ? textColor : 'black',
                height: 52,
                width: 'auto',
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
