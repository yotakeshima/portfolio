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
    <Box sx={{ display: 'flex', minHeight: '50vw' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: { xs: '2rem', md: '3rem' },
          marginTop: '4rem',
          backgroundColor: '#f5f5f5',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          maxWidth: '600px',
          margin: 'auto',
          minWidth: { xs: '300px', sm: '600', md: '600px' },
        }}
      >
        <CustomTypography
          variant="h4"
          sx={{ fontWeight: 'bold', marginBottom: '2rem', textAlign: 'center' }}
        >
          Contact Me
        </CustomTypography>

        <form
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2rem',
          }}
        >
          <TextField
            sx={{ width: '300px' }}
            label="Your Name"
            variant="outlined"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <TextField
            sx={{ width: '300px', borderRadius: '40px' }}
            label="Your Email"
            variant="outlined"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            type="email"
          />

          <TextField
            label="Your Message"
            variant="outlined"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            multiline
            rows={4}
            sx={{ width: '400px' }}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ padding: '0.75rem', display: 'inline-flex' }}
          >
            Send Message
          </Button>
        </form>
      </Box>
    </Box>
  );
}

export default ContactForm;
