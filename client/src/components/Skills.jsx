import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import VerifiedIcon from '@mui/icons-material/Verified';
import Grid2 from '@mui/material/Grid2';

function Skills() {
  const skills = ['Java', 'Python', 'JavaScript', 'C', 'PostgreSQL', 'REST'];

  // Calculate the midpoint to split the skills into two columns
  const midPoint = Math.ceil(skills.length / 2);

  return (
    <Box
      sx={{
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
        padding: '2rem',
        maxWidth: '800px',
        marginX: 'auto',
        marginTop: '20rem',
        minHeight: '20vw',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
      }}
    >
      <Typography
        variant='h4'
        component='div'
        sx={{ fontWeight: 'bold', marginBottom: '1rem', textAlign: 'center' }}
      >
        My Skills
      </Typography>

      {/* Grid2 for two columns */}
      <Grid2 container spacing={'15rem'}>
        {/* First Column */}
        <Grid2 item xs={12} md={6}>
          <List>
            {skills.slice(0, midPoint).map((skill, index) => (
              <ListItem key={index} sx={{ marginBottom: '1rem' }}>
                <ListItemIcon>
                  <VerifiedIcon sx={{ color: '#1976d2' }} />
                </ListItemIcon>
                <ListItemText
                  primary={`${skill}`}
                  primaryTypographyProps={{
                    fontSize: '1.2rem',
                    fontWeight: '500',
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Grid2>

        {/* Second Column */}
        <Grid2 item xs={12} md={6}>
          <List>
            {skills.slice(midPoint).map((skill, index) => (
              <ListItem key={index} sx={{ marginBottom: '1rem' }}>
                <ListItemIcon>
                  <VerifiedIcon sx={{ color: '#1976d2' }} />
                </ListItemIcon>
                <ListItemText
                  primary={`${skill}`}
                  primaryTypographyProps={{
                    fontSize: '1.2rem',
                    fontWeight: '500',
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Grid2>
      </Grid2>
    </Box>
  );
}

export default Skills;
