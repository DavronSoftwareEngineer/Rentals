import { Alert, Box, Button, TextField } from '@mui/material'
import React, {useState} from 'react'
import useAuth from '../../useAuth';

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [envalid, setEnvalid] = useState(false);
    const {SignUp, error, isLoading} = useAuth();

    const onSubmit = (e) => {
        e.preventDefault();
        if(!password.length || !email.length){
            setEnvalid(true);
        }
        setEnvalid(false);
        // const payload = { email, password };
        SignUp(email, password);
        // console.log(payload);
        
    };

    
  return (
    <Box sx={{mt: 2}} component={"form"} onSubmit={onSubmit}>
        {error ?<Alert severity="error" sx={{mb: 2}}>{error}</Alert>: ""}
        <TextField type='text' variant='outlined' 
            size='small' fullWidth 
            color='info' label="Isim"
        />
        <TextField type='text' variant='outlined' 
            size='small' fullWidth 
            color='info' label="Fameliya"
            sx={{my: 2}}
            />
        <TextField type='email' variant='outlined' 
            size='small' fullWidth 
            color="info" label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={envalid ? true : false}
            />
        <TextField type='tel' variant='outlined' 
            size='small' fullWidth 
            color='info' label="Phone"
            sx={{my: 2}}
            />
        <TextField type='password' variant='outlined' 
            size='small' fullWidth 
            color='info' label="Password"
            sx={{mb: 2}}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={envalid ? true : false}
            />
        <Button type='submit' variant='contained' color='primary1' disabled={isLoading} fullWidth 
            sx={{color: "#fff", fontWeight: "bold"}}>
                {isLoading ? "Loading..." :  "Ro'yxatdan o'tish"}
                </Button>
    </Box>
  )
}