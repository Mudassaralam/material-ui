import {
  Alert,
  Button,
  Container,
  IconButton,
  Modal,
  Snackbar,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import "./addpost.css";
import React, { useState } from "react";
function Addpost() {
  const [open, setOpen] = useState(false);
  const [openAlert,setOpenAlert] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false);
  };

  return (
    <>
      <Tooltip title="Add" aria-label="Add" onClick={() => setOpen(true)}>
        <IconButton color="secondary" className="add-post-btn">
          <AddCircleIcon id="icon-add" />
        </IconButton>
      </Tooltip>
      <Modal open={open}>
        <Container className="modal-container">
          <form className="form-addpost" autoComplete="off">
            <div className="item-add-post">
              <TextField
                id="standard-basic"
                label="Title"
                variant="outlined"
                fullWidth
                style={{ marginTop: "5px" }}
              />
            </div>
            <div className="item-add-post">
              <TextField
                id="outlined-multiline-static"
                label="Description"
                multiline
                rows={4}
                fullWidth
                style={{ marginTop: "10px" }}
              />
            </div>
            <div className="item-add-post">
              
            </div>
            <div className="item-add-post" style={{marginTop:'10px'}}>
              <Button variant="outlined" color="primary" onClick={()=>setOpenAlert(true)}>Create</Button> 
              <Button variant="outlined" color="success" style={{marginLeft:'5px'}} onClick={()=>setOpen(false)}>Cancel</Button> 

            </div> 
          </form>
        </Container>
      </Modal>
      <Snackbar open={openAlert} autoHideDuration={6000}  onClose={handleClose}>
         <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </>
  );
}
export default Addpost;
