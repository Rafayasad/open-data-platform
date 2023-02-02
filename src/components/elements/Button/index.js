import React, { memo } from "react";
import { Col, Container, Row } from "react-bootstrap";

const Button = memo((props) => {

    const { title, backgroundColor, textColor, borderColor } = props

    return (
        <button
            className="px-4"
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