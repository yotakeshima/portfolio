import React from 'react';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

const CustomTypography = styled(Typography)(() => ({
  fontFamily: "'Poppins', sans-serif",
}));

export default function StyledTypography({ text = 'default text', ...props }) {
  return <CustomTypography {...props}>{text}</CustomTypography>;
}
