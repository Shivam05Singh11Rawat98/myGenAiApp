import React from 'react';
import AppBar from '@mui/material/AppBar';
import logo from '../Images/Logo_New_York_Life.png'; 
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const NavbarContainer = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#0a3c53',
  color: 'white',
  boxShadow: 'none',
  padding: '0 20px',
}));

const Logo = styled('img')(({ theme }) => ({
  height: 50,
  fontolor: 'white',
  marginRight: theme.spacing(2),
}));

const LogoText = styled(Typography)(({ theme }) => ({
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginRight: theme.spacing(2),
  }));
  

export const Navbar = () => {
  return (
    <NavbarContainer position="static">
      <Toolbar>
        <Logo src={logo} alt="Logo" />
        <LogoText>QveryGPT</LogoText>
      </Toolbar>
    </NavbarContainer>
  );
};
