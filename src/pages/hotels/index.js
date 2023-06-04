import { Box, Container, Typography } from '@mui/material'
import React from 'react'

export default function Hotels() {
  return (
    <Box sx={{py: 6}}>
      <Container maxWidth="lg">
        <Box sx={{px: 2.8}}>
          <Typography variant='h4'>Hotels</Typography>
        </Box>
      </Container>
    </Box>
  )
}
