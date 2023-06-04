import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import FilterSearch from '../filterSearch'
import Auth from '../../pages/auth'
import useAuth from '../../useAuth'

export default function BottomHeader() {
    const {isLoading} = useAuth();
  return (
    <Container maxWidth="lg">
        <Box 
            sx={{px: 2.8,
            position: "relative"
            }}
            >
            <Typography variant='h5'
            sx={{
                fontSize: "25px",
                fontWeight: "bold",
            }}>
                Bizning Rentals ilovamizdan foydalaning va uzoq
                muddatle chegirmaga ega bo'ling.
            </Typography>
            <Typography variant='body1' sx={{mt: 3, color: "#fff", fontSize: "18px"}}>Sayohatlaringiz uchun mukofot oling Rentals ilovasining
            hisobidan 10% yoki undan ko'piroq chegirmalarga ega bo'ling
            </Typography>
            <Box sx={{display: "flex", mt: 3}}>
                <Box><Auth 
                    title={"Login / Register"} /></Box>
            </Box>
            <Box sx={{
                position: 'absolute',
                bottom: "-128px",
                width: "100%"
            }}><FilterSearch/></Box>
        </Box>
    </Container>
    )
}
