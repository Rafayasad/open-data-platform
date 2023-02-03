import React, { memo } from "react";

const Button = memo((props) => {

<<<<<<< HEAD
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
=======
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
>>>>>>> ad7f86850c0b98f121aa9496ad90df30861c83ae
});

export default Button;
