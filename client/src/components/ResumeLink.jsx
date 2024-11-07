import React from 'react';
import { Button } from '@mui/material';
import CustomTypography from './StyledTypography';

const ResumeLink = () => {
  return (
    <Button
      variant="contained"
      color="primary"
      href="/resume-1.pdf"
      target="_blank"
      rel="noopener noreferrer"
      sx={{ height: '50px', margin: 'auto' }}
    >
      <CustomTypography
        sx={{ fontSize: { xs: '0.6rem', md: '0.9rem' }, fontWeight: 'bold' }}
      >
        View My Resume
      </CustomTypography>
    </Button>
  );
};

export default ResumeLink;
