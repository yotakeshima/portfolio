import React, { useState } from 'react';
import { Box, Grid2, TextField, Button } from '@mui/material';
import CustomTypography from './StyledTypography';

function ContactForm() {
  // Form state (optional, if you want to handle form submission)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: { xs: '1rem', md: '3rem' },
        marginTop: '4rem',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '600px',
        margin: 'auto',
      }}
    >
      <CustomTypography
        variant="h4"
        sx={{ marginBottom: '2rem', textAlign: 'center' }}
      >
        Contact Me
      </CustomTypography>

      <form onSubmit={handleSubmit}>
        <Grid2 container spacing={3}>
          {/* Name Field */}
          <Grid2 item xs={12}>
            <TextField
              fullWidth
              label="Your Name"
              variant="outlined"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Grid2>

          {/* Email Field */}
          <Grid2 item xs={12}>
            <TextField
              fullWidth
              label="Your Email"
              variant="outlined"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              type="email"
            />
          </Grid2>

          {/* Message Field */}
          <Grid2 item xs={12}>
            <TextField
              fullWidth
              label="Your Message"
              variant="outlined"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              multiline
              rows={4}
            />
          </Grid2>

          {/* Submit Button */}
          <Grid2 item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ padding: '0.75rem' }}
            >
              Send Message
            </Button>
          </Grid2>
        </Grid2>
      </form>
    </Box>
  );
}

export default ContactForm;
