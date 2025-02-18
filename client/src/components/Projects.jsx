// import React from 'react';
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
import devConnectorPNG from '../assets/devconnector.png';
import customerLoyaltyGIF from '../assets/customer_loyalty.gif';
import sentimentGIF from '../assets/sentiment_project.gif';

function Projects() {
  const projects = [
    {
      title: 'DevConnector',
      description: 'A social network platform for fellow developers',
      image: devConnectorPNG, // Replace with your project image URL
      githubLink: 'https://github.com/yotakeshima/devconnector',
      demoLink: 'https://devconnector-4ltm.onrender.com/',
    },
    {
      title: 'Sentiment Analysis Model',
      description:
        'This project leverages a fine-tuned BERT model to perform sentiment analysis, classifying user-provided sentences as positive or negative with a customizable training pipeline and real-time prediction capability.',
      image: sentimentGIF, // Replace with your project image URL
      githubLink: 'https://github.com/yotakeshima/sentiment_analysis',
      demoLink: '',
    },
    {
      title: 'Customer Loyalty App',
      description:
        'This project is a customer loyalty app that enables users to track points, redeem rewards, view transaction details, and manage family-based point sharing, powered by an Android front-end, an Express.js server, and a SQL database.',
      image: customerLoyaltyGIF, // Replace with your project image URL
      githubLink: 'https://github.com/yotakeshima/customer_loyalty_app',
      demoLink: '',
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

      <Grid2 container spacing={15}>
        {projects.map((project, index) => (
          <Grid2 xs={12} sm={6} md={4} key={index}>
            {' '}
            {/* 3 projects side by side on medium screens */}
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="300"
                image={project.image} // Project image
                alt={project.title}
                sx={{
                  objectFit: 'contain',
                }}
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
                  variant="contained"
                  size="small"
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener"
                >
                  GitHub
                </Button>
                {index === 0 && (
                  <Button
                    variant="contained"
                    size="small"
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener"
                  >
                    Link
                  </Button>
                )}
              </CardActions>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
}

export default Projects;
