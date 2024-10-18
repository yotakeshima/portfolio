import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Navbar({ activeTab, onTabChange }) {
  const [value, setValue] = useState(0);

  return (
    <AppBar
      position='fixed'
      sx={{ height: '80px', overflow: 'hidden', top: 0 }}
    >
      <Toolbar>
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' }, // Stack vertically on small screens, horizontal on medium and larger
            justifyContent: { xs: 'center', md: 'center' }, // Center on both small and large screens
            alignItems: 'center', // Align vertically in the center
            marginX: 'auto',
            padding: { xs: '1rem', md: '2rem' }, // Padding adjusted for screen size
          }}
        >
          <Typography
            variant='h4'
            component='div'
            className='logo font'
            sx={{
              marginRight: { xs: 0, md: '30rem' }, // No margin on small screens, add margin on larger screens
              fontSize: { xs: '1.5rem', md: '2rem' }, // Adjust the font size for small screens
              textAlign: 'center', // Center the text for smaller screens
              mb: { xs: '1rem', md: 0 }, // Add margin on the bottom for smaller screens
            }}
          >
            Yoshinori Takeshima
          </Typography>
          <Tabs
            value={activeTab}
            onChange={(_, newValue) => onTabChange(newValue)}
            textColor='inherit'
            indicatorColor='secondary'
            centered
            sx={{
              width: { xs: '100%', md: '100%' },
              '.MuiTabs-indicator': {
                backgroundColor: 'white',
              },
            }}
          >
            <Tab
              className='font'
              sx={{
                fontSize: { xs: '0.875rem', md: '1.18rem' }, // Smaller font size for small screens
                fontWeight: 'bold',
              }}
              label='About'
            />
            <Tab
              className='font'
              sx={{
                fontSize: { xs: '0.875rem', md: '1.18rem' }, // Smaller font size for small screens
                fontWeight: 'bold',
              }}
              label='Experience'
            />
            <Tab
              className='font'
              sx={{
                fontSize: { xs: '0.875rem', md: '1.18rem' }, // Smaller font size for small screens
                fontWeight: 'bold',
              }}
              label='Projects'
            />
            <Tab
              className='font'
              sx={{
                fontSize: { xs: '0.875rem', md: '1.18rem' }, // Smaller font size for small screens
                fontWeight: 'bold',
              }}
              label='Contact'
            />
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
