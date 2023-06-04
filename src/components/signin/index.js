import { Alert, Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import SignUp from '../signup'
import useAuth from '../../useAuth'

export default function SignIn({handleClose}) {
    const [register, setRegister] = useState(false)

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [envalid, setEnvalid] = useState(false);
    const {SignIn,  error, isLoading} = useAuth();

    const onSubmit = (e) => {
        e.preventDefault();
        if(!password.length || !email.length){
            setEnvalid(true);
        }
        setEnvalid(false);
        // const payload = { email, password };
        SignIn(email, password);
        // console.log(payload);
        
    };
  return (
    <Box component={register ? "" : "form"} onSubmit={onSubmit} sx={{
        mt: register ? "" : 3,
    }}>
        {register ? "" : error ?<Alert severity="error" sx={{mb: 2}}>{error}</Alert>: ""}
        {register ? <SignUp/> :
            <Box>
            <TextField type='email' variant='outlined' 
                size='small' fullWidth 
                color='info' label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={envalid ? true : false}
                />
            <TextField type='password' variant='outlined' 
                size='small' fullWidth 
                color='info' label="Password"
                sx={{
                    my: 2,
                }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={envalid ? true : false}
                />
            <Button variant='contained' type='submit'
                fullWidth color='primary1' 
                sx={{color: "#fff",
                fontWeight: 'bold',
                mb: 2,
                }}
                // onClick={error ? "" : handleClose}
                >
                    {isLoading ? "Loading..." :  "Kirish"}
                </Button>
            
            <Typography sx={{textAlign: 'center'}}>Ro'yxatdan o'tmaganmisiz: 
                <Button variant='text' color='primary1' 
                    onClick={() => setRegister(true)}>Register</Button></Typography>
            </Box> 
        }
    </Box>
  )
}
