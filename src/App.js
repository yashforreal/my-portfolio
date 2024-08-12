import React from 'react';
import { Box } from '@mui/material';
import { Intro } from './sections/intro';
import Navbar from './components/navbar'; // Import the Navbar component
import './App.css'
import Skills from './sections/skills';
import AboutMe from './sections/aboutMe';

function App() {
  return (
    <>
      <Navbar />
      <Box className='content'>
        <Intro />
        <section id='about'> <AboutMe /> </section>
        <section id='skills'> <Skills /> </section> 
        {/* TODO: Work Experience section */}
        {/* TODO: Project section */}
      </Box>
    </>
  );
}

export default App;
