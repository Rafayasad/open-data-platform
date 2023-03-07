import React, { memo } from "react";
import { Spinner } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { colors } from "../../../utils/colors";

const Button = memo((props) => {

    const { t } = useTranslation()

    const { isFilled, title, icon, backgroundColor, textColor, width, borderColor, loading, onClick, disable } = props
    console.log("button ka disable", loading);
    return (
        <button
            onClick={onClick ? onClick : () => { }}
            disabled={loading}
            className="m-0 px-4 en-font-default"
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
            {
                loading ? (
                    <Spinner animation="border" variant="light" size="sm" />
                ) : <>
                    {icon}
                    {title}
                </>
            }
        </button>
    )
});

export default Button;
