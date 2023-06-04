import { Box, Button, InputBase, Typography, alpha, styled } from '@mui/material'
import React from 'react'
import AirlineSeatIndividualSuiteIcon from '@mui/icons-material/AirlineSeatIndividualSuite';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BoyIcon from '@mui/icons-material/Boy';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

export default function FilterSearch() {
  return (
    <Box sx={{
        border: '4px solid #fb8c00',
        backgroundColor: '#fff',
        borderRadius: '8px',
        py: 1,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: 'space-between'
    }}>
        <Search>
            <SearchIconWrapper>
              <AirlineSeatIndividualSuiteIcon sx={{color: "grey"}} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Qayirga borayabsiz...?"
              inputProps={{ 'aria-label': 'search' }}   
            />
          </Search>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
          }}>
            <CalendarMonthIcon sx={{color: 'grey', mr: 1}}/>
            <Typography sx={{color: 'grey'}}>06/04/2023 to 06/06/2024</Typography>
          </Box>
          <Box sx={{display: 'flex', alignItems: 'center'}}>
            <BoyIcon sx={{color: "grey"}}/>
            <Typography sx={{color: "grey"}}>5 adult - 3 children - 9 rom</Typography>
          </Box>
          <Button variant='contained' color='primary1' sx={{color: "#fff", fontWeight: 'bold', mr:2}}>Search</Button>
    </Box>
  )
}
