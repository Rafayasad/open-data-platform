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
      {
        loading ? (
          <div className="d-flex align-items-center justify-content-center">
            <Spinner />
          </div>
        ) : (
          <>
            <Modal.Header className="px-4 py-4" closeButton>
              <Heading nomargin bold heading={title} size="lg" />
            </Modal.Header>
            <Modal.Body className="px-4 py-1">
              <Heading nomargin heading={description} size="xxs" />
            </Modal.Body>
            <Modal.Footer className="border-0" />
          </>
        )
      }
    </Modal>
  )
})

export default ModalEelment