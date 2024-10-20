import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Toolbar from '@mui/material/Toolbar';
import CustomTypography from './StyledTypography';
import Box from '@mui/material/Box';

function Navbar({ activeTab, onTabChange }) {
  return (
    <AppBar
      position="fixed"
      sx={{ height: { xs: '50px', md: '90px' }, overflow: 'hidden', top: 0 }}
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
            padding: { xs: 0, md: '2rem' }, // Padding adjusted for screen size
          }}
        >
          <CustomTypography
            variant="h4"
            component="div"
            text="Yoshinori Takeshima"
            sx={{
              marginTop: { xs: '1rem' },
              marginX: 'auto', // No margin on small screens, add margin on larger screens
              fontSize: { xs: '1rem', md: '2rem' }, // Adjust the font size for small screens
              textAlign: 'center', // Center the text for smaller screens
              marginBottom: { xs: -2, md: 0 },
            }}
          ></CustomTypography>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginRight: '2rem',
              flexGrow: 1,
            }}
          >
            {/* Tabs */}
            <Tabs
              value={activeTab >= 0 ? activeTab : false}
              onChange={(event, newValue) => {
                console.log(event.target, newValue);
                onTabChange(newValue);
              }}
              textColor="inherit"
              indicatorColor="secondary"
              sx={{
                marginBottom: { xs: '0.6rem' },
                '.MuiTabs-indicator': {
                  backgroundColor: activeTab >= 0 ? 'white' : 'transparent',
                },
              }}
            >
              <Tab
                sx={{
                  fontSize: { xs: '0.6rem', md: '1.4rem' }, // Smaller font size for small screens
                  fontWeight: 'bold',
                  fontFamily: '"Poppins", sans-serif',
                }}
                label="About"
              />
              <Tab
                sx={{
                  fontSize: { xs: '0.6rem', md: '1.4rem' }, // Smaller font size for small screens
                  fontWeight: 'bold',
                  fontFamily: '"Poppins", sans-serif',
                }}
                label="Skills"
              />
              <Tab
                sx={{
                  fontSize: { xs: '0.6rem', md: '1.4rem' }, // Smaller font size for small screens
                  fontWeight: 'bold',
                  fontFamily: '"Poppins", sans-serif',
                }}
                label="Projects"
              />
              <Tab
                sx={{
                  fontSize: { xs: '0.6rem', md: '1.4rem' }, // Smaller font size for small screens
                  fontWeight: 'bold',
                  fontFamily: '"Poppins", sans-serif',
                }}
                label="Contact"
              />
            </Tabs>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
