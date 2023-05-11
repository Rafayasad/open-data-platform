// import React, { memo, useState } from "react";
// import { Modal, Spinner } from 'react-bootstrap';
// import { useNavigate } from "react-router";
// import { routes } from "../../../router/helper";
// import Heading from '../Heading'
// import './style.css';

// const ModalEelment = memo((props) => {

//   const { size, backdrop, loading, title, description } = props;

//   const [show, setShow] = useState(true)
//   const navigate = useNavigate();

//   return (
//     <Modal
//       size={size}
//       show={show}
//       onHide={() => {
//         setShow(false)
//         navigate(-1);
//       }}
//       centered
//       scrollable
//       className="py-5 mt-4"
//       fullscreen='lg-down'
//       backdrop={backdrop}
//     >
//       {
//         loading ? (
//           <div className="d-flex align-items-center justify-content-center">
//             <Spinner />
//           </div>
//         ) : (
//           <>
//             <Modal.Header className="px-4 py-4" closeButton>
//               <Heading nomargin bold heading={title} size="lg" />
//             </Modal.Header>
//             <Modal.Body className="px-4 py-1">
//               <Heading nomargin heading={description} size="xxs" />
//             </Modal.Body>
//             <Modal.Footer className="border-0" />
//           </>
//         )
//       }
//     </Modal>
//   )
// })

// export default ModalEelment


import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { memo } from 'react';
import { Spinner } from 'react-bootstrap';
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import Heading from '../Heading';
import './style.css';

const style = {
  position: 'absolute',
  borderRadius: "30px",
  overflow: "scroll",
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'white',
  boxShadow: 24,
  color: 'black',
  border: 0,
  minHeight: "400px",
  p: 4,
};

const ModalEelment = memo((props) => {

  const { size, backdrop, loading, title, description } = props;
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false)
    navigate(-1);
  };

  return (
    <div>
      {window.innerWidth >= 992 ?
        <Modal
          open={open}
          //onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          //slots = {{backdrop:false}}
          //scroll="body"
          hideBackdrop 
          disableEnforceFocus 
          style={{ position: 'initial' }} 
          disableBackdropClick
        >
          <Box sx={style}>
            {
              loading ? (
                <div className="d-flex align-items-center justify-content-center">
                  <Spinner />
                </div>
              ) : (
                <>
                  <div className='d-flex align-items-start justify-content-between'>
                    <Typography className='pb-4' id="modal-modal-title" variant="h6" component="h2">
                      {/* <Heading heading={title} nomargin bold size={"lg"} /> */}
              
                      <p className='fs-kilo en-font-bold'>{title}</p>
          
                    </Typography>
                    <div>
                      <AiOutlineClose style={{ cursor: "pointer" }} onClick={handleClose} />
                    </div>
                  </div>
                  {/* <Typography id="modal-modal-description modal-body" sx={{ mt: 2, overflowY: "scroll", height: "350px" }}>
                  {description}
                </Typography> */}
                  <div style={{ overflowY: "scroll", height: "400px" }}>
                    <p className='' dangerouslySetInnerHTML={{ __html: description }} />
                  </div>
                </>
                
              )}
          </Box>
        </Modal>
        :
        <div className='w-100 p-3'>
          {
            loading ? (
              <div className="d-flex align-items-center justify-content-center">
                <Spinner />
              </div>
            ) : (
              <>
                <div className='d-flex align-items-start justify-content-between'>
                  <Typography className='pb-4' id="modal-modal-title" variant="h6" component="h2">
                    <p className='fs-kilo en-font-bold'>{title}</p>
                  </Typography>
                  <div className=''>
                    <AiOutlineClose style={{ cursor: "pointer" }} onClick={handleClose} />
                  </div>
                </div>
                {/* <Typography id="modal-modal-description modal-body" sx={{ mt: 2, overflowY: "scroll", height: "350px" }}>
                  {description}
                </Typography> */}
                <div style={{ overflowY: "scroll", height: window.innerWidth >= 992 ? "400px" : "100%" }}>
                  <p dangerouslySetInnerHTML={{ __html: description }} />
                </div>
              </>
            )}
        </div>
      }
    </div>
  );
})

export default ModalEelment;



