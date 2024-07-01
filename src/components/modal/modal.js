import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Avatar } from '@mui/material';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Modal = ({ open, handleClose, title, description, img }) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title" style={{fontWeight: "bold"}}>{title}</DialogTitle>
      <DialogContent>
        <div className="flex flex-col items-center">
          <Avatar 
            src={img} 
            alt={title} 
            sx={{ width: 96, height: 96, mb: 4 }}
          />
          <p id="alert-dialog-slide-description">
            {description}
          </p>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
