import React from 'react';
import Box from '@mui/material/Box';
import CustomTypography from './StyledTypography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import VerifiedIcon from '@mui/icons-material/Verified';
import Grid2 from '@mui/material/Grid2';

function Skills() {
  const skills = [
    'Java',
    'Python',
    'JavaScript',
    'C',
    'PostgreSQL',
    'MongoDB',
    'REST',
    'React',
    'Express.js',
    'PyTorch',
  ];

  // Calculate the midpoint to split the skills into two columns
  const midPoint = Math.ceil(skills.length / 2);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row', // Stack vertically on small screens, row on larger screens
        alignItems: 'center',
        justifyContent: 'center',
        padding: { xs: '1rem', md: '2rem' },
        maxWidth: '50vw', // Limit the width to 90% of the viewport width
        minHeight: '40vw',
        margin: 'auto', // Center the About Me box horizontally
        marginTop: '9rem',
      }}
    >
      <Box
        sx={{
          backgroundColor: '#f5f5f5',
          borderRadius: '8px',
          padding: '2rem',
          maxWidth: '800px',
          minWidth: { xs: '200px', md: '600px' },
          marginX: 'auto',
          minHeight: '25rem',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
        }}
      >
        <CustomTypography
          variant="h4"
          component="div"
          sx={{ fontWeight: 'bold', marginBottom: '1rem', textAlign: 'center' }}
        >
          My Skills
        </CustomTypography>

        {/* Grid2 for two columns */}
        <Grid2 container spacing={{ xs: 0, sm: 5, md: 20 }}>
          {/* First Column */}
          <Grid2 xs={6}>
            <List>
              {skills.slice(0, midPoint).map((skill, index) => (
                <ListItem key={index} sx={{ marginBottom: '1rem' }}>
                  <ListItemIcon>
                    <VerifiedIcon sx={{ color: '#1976d2' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={`${skill}`}
                    primaryTypographyProps={{
                      fontSize: { xs: '0.9rem', md: '1.2rem' },
                      fontWeight: '500',
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Grid2>

          {/* Second Column */}
          <Grid2 xs={6}>
            <List>
              {skills.slice(midPoint).map((skill, index) => (
                <ListItem key={index} sx={{ marginBottom: '1rem' }}>
                  <ListItemIcon>
                    <VerifiedIcon sx={{ color: '#1976d2' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={`${skill}`}
                    primaryTypographyProps={{
                      fontSize: { xs: '0.9rem', md: '1.2rem' },
                      fontWeight: '500',
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
}

export default Skills;
