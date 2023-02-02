import React, { memo } from "react";
import { Col, Container, Row } from "react-bootstrap";

const Button = memo((props) => {
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
    // <Container fluid>
    //     <Row style={{ backgroundColor: '#9159FF', height: 52, width: 'auto', borderRadius: 100, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    //         <Col xs={12} md={12} className='d-flex justify-content-center align-items-center'>
    //             <p className="m-0 text-white">{title}</p>
    //         </Col>
    //     </Row>
    // </Container>
  );
});

export default Button;
