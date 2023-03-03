import React, { memo } from "react";
import { Spinner } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { colors } from "../../../utils/colors";

const Button = memo((props) => {

    const { t } = useTranslation()

    const { title, icon, backgroundColor, textColor, width, borderColor, loading, onClick, disable } = props

    return (
        <button
            onClick={onClick ? onClick : () => { }}
            disabled={disable ? disable : loading}
            className="m-0 px-4 en-font-default"
            style={{
                backgroundColor: disable ? colors.lighter_gray : backgroundColor ? backgroundColor : 'white',
                color: disable ? "black" : textColor ? textColor : 'black',
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
