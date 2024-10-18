import React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import profilePic from '../assets/profile.jpg';

function Profile() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }, // Column layout on small screens, row on medium and above
        alignItems: 'center',
        padding: '4rem',
        borderRadius: '8px',
        maxWidth: '40vw', // Make the container responsive
        marginX: { xs: '6rem', md: '20rem' },
        marginTop: { xs: '2rem', md: '6rem' }, // Adjust top margin for smaller screens
      }}
    >
      {/* Avatar */}
      <Avatar
        alt='Profile Picture'
        src={profilePic}
        sx={{
          width: { xs: 200, md: 400 }, // Responsive size for the avatar
          height: { xs: 200, md: 400 },
          mb: { xs: 2, md: 0 }, // Bottom margin for small screens
        }}
      />

      <Box
        sx={{
          flex: 1,
          minWidth: { xs: '100%', md: '40rem' }, // Responsive text box width
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'center', md: 'center' }, // Center on small screens, left-align on larger screens
          marginLeft: { md: '5rem' }, // Add left margin only on larger screens
          gap: 1,
          textAlign: { xs: 'center', md: 'left' }, // Center text on small screens, left-align on larger screens
        }}
      >
        {/* Intro */}
        <Typography variant='body1' component='div'>
          Hello I'm
        </Typography>

        {/* Name */}
        <Typography
          variant='h5'
          component='div'
          sx={{
            fontWeight: 'bold',
            mb: 1,
            fontSize: { xs: '2rem', md: '3rem' }, // Responsive font size
          }}
        >
          Yoshinori Takeshima
        </Typography>

        {/* Bio */}
        <Typography
          variant='body1'
          component='div'
          sx={{ mb: 2, textAlign: 'center' }}
        >
          I am a passionate software developer with experience in full-stack web
          development. I love creating efficient and user-friendly applications.
        </Typography>

        {/* Social Icons for GitHub and LinkedIn */}
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            justifyContent: { xs: 'center', md: 'flex-start' },
          }}
        >
          {/* GitHub Icon */}
          <IconButton
            component='a'
            href='https://github.com/yotakeshima'
            target='_blank'
            rel='noopener noreferrer'
            sx={{ color: '#333' }}
          >
            <GitHubIcon sx={{ fontSize: { xs: 40, md: 50 } }} />{' '}
            {/* Responsive icon size */}
          </IconButton>

          {/* LinkedIn Icon */}
          <IconButton
            component='a'
            href='https://www.linkedin.com/in/yoshinori-takeshima'
            target='_blank'
            rel='noopener noreferrer'
            sx={{ color: '#0077b5' }}
          >
            <LinkedInIcon sx={{ fontSize: { xs: 40, md: 50 } }} />{' '}
            {/* Responsive icon size */}
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default Profile;
