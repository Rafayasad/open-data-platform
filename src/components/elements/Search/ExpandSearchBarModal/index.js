import React from "react";
import { memo } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ExpandSearchBarModal = memo((props) => {
    const { show, onHide } = props;
    console.log("SHOW", show, onHide);
    return (
        // <Modal
        //     show={show}
        //     onHide={() => onHide(false)}
        //     size="md"
        //     aria-labelledby="contained-modal-title-vcenter"
        //     centered
        // >
        //     <Modal.Header closeButton>
        //         <Modal.Title id="contained-modal-title-vcenter">
        //             Modal heading
        //         </Modal.Title>
        //     </Modal.Header>
        //     <Modal.Body>
        //         <h4>Centered Modal</h4>
        //         <p>
        //             Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
        //             dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
        //             consectetur ac, vestibulum at eros.
        //         </p>
        //     </Modal.Body>
        //     <Modal.Footer>
        //         <Button onClick={onHide}>Close</Button>
        //     </Modal.Footer>
        // </Modal>
        // <Sheet>Holy sheet!</Sheet>
        <></>
    )
})

export default ExpandSearchBarModal;

// function App() {
//   const [modalShow, setModalShow] = React.useState(false);

//   return (
//     <>
//       <Button variant="primary" onClick={() => setModalShow(true)}>
//         Launch vertically centered modal
//       </Button>

//       <MyVerticallyCenteredModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       />
//     </>
//   );
// }