import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink} from 'react-router-dom';
import { Container, ListItemIcon, TextField } from '@mui/material';
import { blue, deepOrange, deepPurple, grey, indigo } from '@mui/material/colors';
import rent from './photo/rent.webp';
import AirlineSeatIndividualSuiteIcon from '@mui/icons-material/AirlineSeatIndividualSuite';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import CloseIcon from '@mui/icons-material/Close';
import BottomHeader from '../../components/bottomHeader';
import Auth from '../auth';
import useAuth from '../../useAuth';
import AccountMenu from '../../components/account';

const navItems = [
    {
        id: 1,
        title: "Mexmonxonalar",
        icon: <AirlineSeatIndividualSuiteIcon 
            sx={{
                color: {xs: deepPurple[500], sm: deepPurple[500], md: "#fff"}, 
                fontSize: {xs: '20px', sm: "20px", md: "20px", lg: "30px", xl: "30px"}}}/>,
        path: "/",
    },
    {
        id: 2,
        title: "Parvozlar",
        icon: <AirplanemodeActiveIcon sx={{color: {xs: deepPurple[500], sm: deepPurple[500], md: "#fff"}, transform: "rotate(90deg)", 
        fontSize: {xs: '20px', sm: "20px", md: "20px", lg: "30px", xl: "30px"}}}/>,
        path: "/flights",
    },
    {
        id: 3,
        title: "Avtomobil ijarasi",
        icon: <DriveEtaIcon sx={{color: {xs: deepPurple[500], sm: deepPurple[500], md: "#fff"}, 
        fontSize: {xs: '20px', sm: "20px", md: "20px", lg: "30px", xl: "30px"}}}/>,
        path: "/carrentals",
    },
    {
        id: 4,
        title: "Diqqatga sazovor joylari",
        icon: <AirlineSeatIndividualSuiteIcon sx={{color: {xs: deepPurple[500], sm: deepPurple[500], md: "#fff"}, 
        fontSize: {xs: '20px', sm: "20px", md: "20px", lg: "30px", xl: "30px"}}}/>,
        path: "/attractions",
    },
    {
        id: 5,
        title: "Aeroport taksilari",
        icon: <LocalTaxiIcon sx={{color: {xs: deepPurple[500], sm: deepPurple[500], md: "#fff"}, 
        fontSize: {xs: '20px', sm: "20px", md: "20px", lg: "30px", xl: "30px"}}}/>,
        path: "/airporttaxis",
    },
];

function Layout({children}, props) {

  const {isLoading, LogOut} = useAuth();
//   console.log(bool);
    const logout = () => LogOut;    

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box  
        sx={{ textAlign: 'center',
        height: '100%'
        }}>
        <Box sx={{p: 1.5, 
                backgroundColor: indigo[700],}}>
            <Box sx={{ 
                display: 'flex', 
                alignItems: "center",
                justifyContent: "space-between"
                }}>
                <Box sx={{display: "flex", alignItems: "center"}}>
                <img src={rent} width={"40px"} height={"40px"}
                    style={{
                        borderRadius: "5px",
                        marginRight: "15px",
                    }}
                    alt="" />
                    <Typography variant='h5'>Rentals</Typography>
                </Box>
                <IconButton sx={{color: "#fff"}} onClick={handleDrawerToggle}><CloseIcon/></IconButton>
            </Box>
            <Box sx={{
                display: 'flex', 
                alignItems: "center",
                justifyContent: "end",
                mt: 2,
            }}>
                <Box sx={{mr: 2}}><Auth 
                        title={"Register"} 
                        /></Box>
                    <Box><Auth title={"Login"} 
                    /></Box>
                </Box>
        </Box>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <NavLink to={item.path} 
            style={({isActive}) => { 
                return{
                textDecoration: "none",
                width: "100%",
                backgroundColor: isActive ? grey[300] : ""
            }}
        }
            >
                <ListItemButton onClick={handleDrawerToggle}>
                    <ListItemIcon>
                        {item.icon}
                    </ListItemIcon>
                    <ListItemText  primary={<Typography sx={{color: grey[800], fontSize: {xs: "14px", sm: '16px'}}}>{item.title}</Typography>} />
                </ListItemButton>
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" sx={{
        backgroundColor: indigo[700],
        boxShadow: "none",
      }}>
        <Container maxWidth="lg">
            <Toolbar sx={{
                justifyContent: "space-between",
            }}>
                <Box sx={{display: "flex", alignItems: "center"}}>
                    <img src={rent} width={"40px"} height={"40px"}
                    style={{
                        borderRadius: "5px",
                        marginRight: "15px",
                    }}
                    alt="" />
                    <Typography variant='h5'>Rentals</Typography>
                </Box>
                <Box sx={{
                    display: {xs: "none", sm: "none", md: "flex"}
                }}>
                    <Box sx={{mr: 2}}><Auth 
                        title={"Register"}
                    /></Box>
                    <Box><Auth title={"Login"}
                    /></Box>
                    <AccountMenu/>
                </Box> 
                    
                <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'block', md: "none" } }}
                >
                    <MenuIcon sx={{color: "#fff"}}/>
                </IconButton>
            </Toolbar>
            <Toolbar sx={{
                display: {xs: "none", sm: "none", md: "block"},
                mt: 2
            }}>
            <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
                {navItems.map((item, index) => (
                <NavLink to={item.path} key={index}
                style={({isActive}) => {
                    return{
                    display: "flex",
                    alignItems: 'center',
                    marginRight: "10px",
                    border: isActive ? "1px solid #fff" : "",
                    padding: "5px 15px",
                    borderRadius: '30px',
                    textDecoration: "none",
                    }
                }}
                >
                    <Box sx={{
                        mr: 1,
                        mt: 0.5,
                    }}>
                        {item.icon}
                    </Box>
                    <Typography sx={{
                        color: "#fff",
                        fontSize: {md: "14px", lg: "16px"}
                    }}>{item.title}</Typography>
                </NavLink>
                ))}
            </Box>
            </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'block', md: "none" },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: {xs: "100%", sm: "350px"} },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{pt: {xs: 0, sm: 0, md: 10, lg: 10, xl: 10}}}>
        <Toolbar />
        <Box sx={{width: "100vw"}}>
            <Box sx={{
                backgroundColor: indigo[700],
                pt: 5,
                pb: 12,
            }}>
                <BottomHeader/>
            </Box>
            {children}
            <Box sx={{
                backgroundColor: indigo[700],
                py: 7
            }}>
                <Typography variant='h4' sx={{
                    textAlign: "center",
                    color: "#fff"
                }}>Save time, save money!</Typography>
                <Typography sx={{
                    textAlign: "center",
                    color: "#fff",
                    my: 2,
                }}>Sign up and we'll send the best deals to you</Typography>
                <Box sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                }}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        width: "400px"
                    }}>
                        <TextField fullWidth placeholder='Your Email' sx={{mr: 2, backgroundColor: '#fff', boxShadow: 2, borderRadius: "5px"}} variant='outlined'  size='small'/>
                        <Button variant='contained' color='primary1'>Subscribe</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
      </Box>
    </Box>
  );
}

Layout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Layout;
