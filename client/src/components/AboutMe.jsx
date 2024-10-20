import React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
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
        minHeight: '50vw',
        margin: 'auto', // Center the About Me box horizontally
        marginTop: '9rem', // Add spacing between Profile and About Me
      }}
    >
      {/* Avatar (About Me Picture) */}
      <Avatar
        alt='About Me Picture'
        src={aboutPic} // Replace with the image path
        sx={{
          width: { xs: 150, md: 250 }, // Responsive avatar size
          height: { xs: 150, md: 250 }, // Responsive avatar size
          mb: { xs: '1rem', md: 0 }, // Add bottom margin on small screens
          objectFit: 'cover',
        }}
      />

      <Box
        sx={{
          flex: 1,
          minWidth: { xs: '100%', md: '60%' }, // Take full width on small screens, 60% on larger screens
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'center', md: 'flex-start' }, // Center text on small screens, left align on larger screens
          marginLeft: { md: '2rem' }, // Add left margin on larger screens
          textAlign: { xs: 'center', md: 'left' }, // Center text on small screens, left align on larger screens
          gap: 2, // Add space between text elements
        }}
      >
        {/* Heading */}
        <Typography
          variant='h4'
          component='div'
          sx={{ fontWeight: 'bold', mb: 1 }}
        >
          About Me
        </Typography>

        {/* Biography */}
        <Typography
          variant='body1'
          component='div'
          sx={{
            fontSize: { xs: '1rem', md: '1.25rem' }, // Responsive font size
            mb: 2,
          }}
        >
          I am a passionate software developer with experience in full-stack web
          development. I specialize in building efficient, scalable, and
          user-friendly applications. In my spare time, I enjoy learning new
          technologies and exploring the ever-evolving world of software
          development.
        </Typography>
      </Box>
    </Box>
  );
}

export default AboutMe;
