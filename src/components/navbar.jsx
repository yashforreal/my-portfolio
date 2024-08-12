import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'left' }}>
          My Portfolio
        </Typography>
        <Box>
          <Button sx={{ color: '#fff' }} href="#about">About Me</Button>
          <Button sx={{ color: '#fff' }} href="#skills">Skills</Button>
          <Button sx={{ color: '#fff' }} href="#experience">Work Experience</Button>
          <Button sx={{ color: '#fff' }} href="#projects">Projects</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
