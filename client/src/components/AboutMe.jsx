import React from 'react';
import Avatar from '@mui/material/Avatar';
import CustomTypography from './StyledTypography';
import Box from '@mui/material/Box';
import aboutPic from '../assets/profile.jpg'; // Replace with the path to your "About Me" image

function AboutMe() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }, // Stack vertically on small screens, row on larger screens
        alignItems: 'center',
        justifyContent: 'center',
        padding: { xs: '1rem', md: '2rem' },
        maxWidth: '50vw', // Limit the width to 90% of the viewport width
        minHeight: '40vw',
        margin: 'auto', // Center the About Me box horizontally
      }}
    >
      <Box
        sx={{
          flex: 1,
          minWidth: { xs: '100%', md: '60%' }, // Take full width on small screens, 60% on larger screens
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center', // Center text on small screens, left align on larger screens
          marginLeft: { md: '2rem' }, // Add left margin on larger screens
          textAlign: 'center', // Center text on small screens, left align on larger screens
          gap: 2, // Add space between text elements
        }}
      >
        {/* Heading */}
        <CustomTypography
          variant='h2'
          component='div'
          sx={{ textAlign: 'left', fontWeight: 'bold', mb: 1 }}
        >
          About Me
        </CustomTypography>

        {/* Biography */}
        <CustomTypography
          variant='body1'
          component='div'
          sx={{
            fontSize: { xs: '1rem', md: '1.4rem' }, // Responsive font size
            mb: 2,
          }}
        >
          "I hold a Bachelor's degree in Computer Science from George Mason
          University, with a focus on full-stack development. While my primary
          expertise lies in building comprehensive web solutions, I have a
          strong interest in exploring AI/ML models and unlocking their
          potential. I am committed to continuous learning and expanding my
          knowledge across the evolving landscape of technology."
        </CustomTypography>
      </Box>
    </Box>
  );
}

export default AboutMe;
