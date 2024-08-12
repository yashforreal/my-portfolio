import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';
import { data } from "../data";
import { red } from '@mui/material/colors';


function Skill({ name, stars }) {
  return (
    <Box>
      <Typography variant="h6">{name}</Typography>
      {Array.from({ length: 10 }).map((_, index) =>
        index < stars ? (
          <StarIcon key={index} style={{ color: "red" }} />
        ) : (
          <StarBorderIcon key={index} />
        )
      )}
    </Box>
  );
}

function Skills() {
  return (
    <Box sx={{ my: 1 }}>
      <Typography variant="h5" fontFamily={"fantasy"}>Skills</Typography>
      {data.skills.map((skill, index) => (
        <Skill key={index} name={skill.name} stars={skill.stars} />
      ))}
    </Box>
  );
}

export default Skills;
