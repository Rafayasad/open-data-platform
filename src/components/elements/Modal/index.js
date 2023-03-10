import React, { memo, useState } from "react";
import { Modal, Spinner } from 'react-bootstrap';
import { useNavigate } from "react-router";
import { routes } from "../../../router/helper";
import Heading from '../Heading'
import './style.css';

const ModalEelment = memo((props) => {

  const { size, backdrop, loading, title, description } = props;

  const [show, setShow] = useState(true)
  const navigate = useNavigate();

  console.log("Checkkkkkkkkkkkkk", description)

  return (
    <Modal
      size={size}
      show={show}
      onHide={() => {
        setShow(false)
        navigate(-1);
      }}
      centered
      scrollable
      className="py-5 mt-4"
      fullscreen='lg-down'
      backdrop={backdrop}
    >

      <Modal.Header className="px-4 py-4" closeButton>
        <Heading nomargin heading={title} size="lg" />
      </Modal.Header>

      <Modal.Body className="px-4 py-1">
        {
          loading ?
            <div className="d-flex align-items-center justify-content-center">
              <Spinner />
            </div> :
            <Heading nomargin heading={description} size="xxs" />
        }
      </Modal.Body>

    </Modal>
  )
})

export default ModalEelment