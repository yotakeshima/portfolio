import React from 'react';
import Avatar from '@mui/material/Avatar';
import CustomTypograpy from './StyledTypography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import profilePic from '../assets/profile.jpg';
import ResumeLink from './ResumeLink';

function Profile() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }, // Column layout on small screens, row on medium and above
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4rem',
        minWidth: 'auto', // Make the container responsive
        margin: { xs: '2rem', md: '25rem' },
        marginTop: { xs: '2rem', md: '10rem' }, // Adjust top margin for smaller screens
      }}
    >
      {/* Avatar */}
      <Avatar
        alt='Profile Picture'
        src={profilePic}
        sx={{
          width: { xs: 200, md: 400 }, // Responsive size for the avatar
          height: { xs: 200, md: 400 },
          mb: { xs: 2, md: 0 },
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
        <CustomTypograpy
          variant='body1'
          component='div'
          sx={{ marginBottom: '-0.5rem' }}
        >
          Hello I'm
        </CustomTypograpy>

        {/* Name */}
        <CustomTypograpy
          variant='h5'
          component='div'
          sx={{
            fontWeight: 'bold',
            mb: 1,
            fontSize: { xs: '2rem', md: '3rem' }, // Responsive font size
          }}
        >
          Yoshinori Takeshima
        </CustomTypograpy>

        {/* Bio */}
        <CustomTypograpy
          variant='body1'
          component='div'
          sx={{ mb: 2, textAlign: 'center' }}
        >
          "As an aspiring software developer with hands-on experience in
          full-stack web development, I am passionate about creating
          applications that prioritize and enhance user experience. I thrive on
          turning ideas into impactful solutions that not only meet user needs
          but also elevate their digital interactions."
        </CustomTypograpy>

        {/* Social Icons for GitHub and LinkedIn */}
        <Box
          sx={{
            display: 'flex',
            gap: 4,
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
            <GitHubIcon sx={{ fontSize: { xs: 40, md: 70 } }} />{' '}
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
            <LinkedInIcon sx={{ fontSize: { xs: 40, md: 70 } }} />{' '}
            {/* Responsive icon size */}
          </IconButton>
          <ResumeLink />
        </Box>
      </Box>
    </Box>
  );
}

export default Profile;
