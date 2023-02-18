import React, { memo, useState } from "react";
import { Modal } from 'react-bootstrap';
import Heading from '../Heading'
import './style.css';

const ModalEelment = memo((props) => {

  const { heading, size, backdrop } = props
  const [show, setShow] = useState(true)

  return (
    <Modal
      size={size}
      show={show}
      onHide={() => setShow(false)}
      centered
      scrollable
      className="py-5 mt-4"
      fullscreen='lg-down'
      backdrop={backdrop}
    >

      <Modal.Header className="px-4 py-4" closeButton>
        <Heading nomargin heading={heading} size="lg" />
      </Modal.Header>

      <Modal.Body className="px-4 py-1">
        <Heading nomargin heading="Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
          commodi aspernatur enim, consectetur. Cumque deleniti temporibus
          ipsam atque a dolores quisquam quisquam adipisci possimus
          laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
          accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
          reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
          deleniti rem!Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
          commodi aspernatur enim, consectetur. Cumque deleniti temporibus
          ipsam atque a dolores quisquam quisquam adipisci possimus
          laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
          accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
          reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
          deleniti rem!Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
          commodi aspernatur enim, consectetur. Cumque deleniti temporibus
          ipsam atque a dolores quisquam quisquam adipisci possimus
          laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
          accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
          reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
          deleniti rem! Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
          commodi aspernatur enim, consectetur. Cumque deleniti temporibus
          ipsam atque a dolores quisquam quisquam adipisci possimus
          laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
          accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
          reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
          deleniti rem!Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
          commodi aspernatur enim, consectetur. Cumque deleniti temporibus
          ipsam atque a dolores quisquam quisquam adipisci possimus
          laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
          accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
          reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
          deleniti rem! Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
          commodi aspernatur enim, consectetur. Cumque deleniti temporibus
          ipsam atque a dolores quisquam quisquam adipisci possimus
          laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
          accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
          reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
          deleniti rem!Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
          commodi aspernatur enim, consectetur. Cumque deleniti temporibus
          ipsam atque a dolores quisquam quisquam adipisci possimus
          laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
          accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
          reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
          deleniti rem!Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
          commodi aspernatur enim, consectetur. Cumque deleniti temporibus
          ipsam atque a dolores quisquam quisquam adipisci possimus
          laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
          accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
          reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
          deleniti rem! Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
          commodi aspernatur enim, consectetur. Cumque deleniti temporibus
          ipsam atque a dolores quisquam quisquam adipisci possimus
          laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
          accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
          reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
          deleniti rem!Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
          commodi aspernatur enim, consectetur. Cumque deleniti temporibus
          ipsam atque a dolores quisquam quisquam adipisci possimus
          laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
          accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
          reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
          deleniti rem!" size="xxs" />
      </Modal.Body>

    </Modal>
  )
})

export default ModalEelment