import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import WorkIcon from '@mui/icons-material/Work';

function Experience() {
  const experiences = [
    {
      company: 'TechCorp Solutions',
      position: 'Software Engineer',
      duration: 'Jan 2020 - Present',
    },
    {
      company: 'WebDev Innovations',
      position: 'Front-End Developer',
      duration: 'May 2018 - Dec 2019',
    },
    {
      company: 'Startup XYZ',
      position: 'Junior Developer',
      duration: 'July 2016 - Apr 2018',
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
        padding: '2rem',
        maxWidth: '800px',
        marginX: 'auto',
        marginTop: '26rem',
        minHeight: '30vw',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
      }}
    >
      <Typography
        variant="h4"
        component="div"
        sx={{ fontWeight: 'bold', marginBottom: '1rem', textAlign: 'center' }}
      >
        My Experience
      </Typography>

      <List>
        {experiences.map((experience, index) => (
          <ListItem key={index} sx={{ marginBottom: '1rem' }}>
            <ListItemIcon>
              <WorkIcon sx={{ color: '#1976d2' }} /> {/* Styled work icon */}
            </ListItemIcon>
            <ListItemText
              primary={`${experience.position} at ${experience.company}`}
              secondary={experience.duration}
              primaryTypographyProps={{ fontSize: '1.2rem', fontWeight: '500' }}
              secondaryTypographyProps={{ color: '#555' }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default Experience;
