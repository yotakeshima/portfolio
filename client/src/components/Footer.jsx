import React from 'react';
import { Box, Typography } from '@mui/material';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
  return (
    <Box
      component='footer'
      fullwidth
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#333',
        color: '#fff',
        padding: '1rem',
        mt: 'auto',
        width: 'auto',
      }}
    >
      <Typography
        variant='body2'
        align='center'
        sx={{ display: 'flex', alignItems: 'center' }}
      >
        <CopyrightIcon fontSize='small' sx={{ mr: 0.5 }} />
        {new Date().getFullYear()} Yoshinori Takeshima &nbsp; | &nbsp; All
        rights reserved
      </Typography>
    </Box>
  );
};

export default Footer;
