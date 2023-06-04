import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import SignIn from '../../components/signin';
import SignUp from '../../components/signup';
import { grey } from '@mui/material/colors';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 450,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 1.5,
  borderRadius: "5px",
};

export default function Auth({title, variant, text}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} variant={variant ? "text" : "contained"} 
        sx={{fontWeight: "bold"}} color={variant ? "primary1" : "primary"}>{variant ? text : title}</Button>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Box sx={{
                display: "flex",
                alignItems: 'center',
                justifyContent: "space-between"
            }}>
                <Typography sx={{color: grey[800], fontSize: "20px", fontWeight: "bold"}}>{
                   (title === "Login" || title === "Login / Register") ? "Tizimga kirish" : title === "Register" ? "Ro'yxatdan o'tish" : "" 
                }</Typography>
                <IconButton onClick={handleClose}><Close sx={{color: "#000"}}/></IconButton>
            </Box>
            <Box>
                {
                   title === "Register"  ? 
                        <SignUp/> : (title === "Login" || title === "Login / Register") ? 
                           <SignIn handleClose={handleClose}/> : "" 
                }
            </Box>
        </Box>
      </Modal>
    </div>
  );
}
