import React, { memo, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Heading from '../Heading'
import './style.css';

const ModalEelment = memo((props) => {

  const { heading, size } = props
  const [show, setShow] = useState(true)

  return (
    <Modal
      size={size}
      show={show}
      onHide={() => setShow(false)}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header className="mx-4 mt-4" closeButton>
        <Heading heading={heading} size="lg" />
      </Modal.Header>
      <Modal.Body className="mx-4 mb-4">
        
      </Modal.Body>
    </Modal>
  )
})

export default ModalEelment