import React from 'react';
import {
  Grid2,
  Box,
  Card,
  CardContent,
  CardMedia,
  Button,
  CardActions,
} from '@mui/material';
import CustomTypography from './StyledTypography';

function Projects() {
  const projects = [
    {
      title: 'Project 1',
      description: 'This is a description of Project 1.',
      image: 'https://via.placeholder.com/300', // Replace with your project image URL
      githubLink: 'https://github.com/project1',
      demoLink: 'https://project1-demo.com',
    },
    {
      title: 'Project 2',
      description: 'This is a description of Project 2.',
      image: 'https://via.placeholder.com/300', // Replace with your project image URL
      githubLink: 'https://github.com/project2',
      demoLink: 'https://project2-demo.com',
    },
    {
      title: 'Project 3',
      description: 'This is a description of Project 3.',
      image: 'https://via.placeholder.com/300', // Replace with your project image URL
      githubLink: 'https://github.com/project3',
      demoLink: 'https://project3-demo.com',
    },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: { xs: '1rem', md: '3rem' },
        marginTop: '4rem',
        minHeight: '50vw',
      }}
    >
      <CustomTypography
        variant="h4"
        sx={{ marginBottom: '2rem', textAlign: 'center' }}
      >
        My Projects
      </CustomTypography>

      <Grid2 container spacing={10}>
        {projects.map((project, index) => (
          <Grid2 item xs={12} sm={6} md={4} key={index}>
            {' '}
            {/* 3 projects side by side on medium screens */}
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="300"
                image={project.image} // Project image
                alt={project.title}
              />
              <CardContent>
                <CustomTypography gutterBottom variant="h5" component="div">
                  {project.title}
                </CustomTypography>
                <CustomTypography variant="body2" color="text.secondary">
                  {project.description}
                </CustomTypography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener"
                >
                  GitHub
                </Button>
                <Button
                  size="small"
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener"
                >
                  Demo
                </Button>
              </CardActions>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
}

export default Projects;
