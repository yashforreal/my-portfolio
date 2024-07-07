import React from 'react';
import './App.css';
import { Link, Element } from 'react-scroll';
import { Chip, Container, Typography, Box } from '@mui/material';

function App() {
  const skills = ['JavaScript', 'React', 'Node.js', 'CSS', 'HTML'];

  return (
    <div className="App">
      <nav className="navbar">
        <Link to="about" smooth={true} duration={500}>About</Link>
        <Link to="contact" smooth={true} duration={500}>Contact</Link>
      </nav>
      <Element name="about" className="section">
        <Container>
          <Typography variant="h2">About</Typography>
          <Typography variant="body1">This is the About section.</Typography>
        </Container>
      </Element>
      <Element name="skills" className="section">
        <Container>
          <Typography variant="h2">Skills</Typography>
          <Box mt={2}>
            {skills.map((skill, index) => (
              <Chip key={index} label={skill} style={{ margin: '5px' }} />
            ))}
          </Box>
        </Container>
      </Element>
      <Element name="projects" className="section">
        <Container>
          <Typography variant="h2">Projects</Typography>
          <Typography variant="body1">This is the Projects section.</Typography>
        </Container>
      </Element>
      <Element name="experience" className="section">
        <Container>
          <Typography variant="h2">Experience</Typography>
          <Typography variant="body1">This is the Experience section.</Typography>
        </Container>
      </Element>
      <Element name="contact" className="section">
        <Container>
          <Typography variant="h2">Contact</Typography>
          <Typography variant="body1">This is the Contact section.</Typography>
        </Container>
      </Element>
    </div>
  );
}

export default App;
