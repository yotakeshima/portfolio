import React, { useState, useEffect } from 'react';
import { Box, TextField, Typography, Button, Fade } from '@mui/material';
import CustomTypography from './StyledTypography';
import emailjs from 'emailjs-com';

function Contact() {
  // Form state (optional, if you want to handle form submission)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');
    setErrorMessage('');

    const env = await import.meta.env;

    const serviceId = env.VITE_EMAILJS_SERVICE_ID;
    const templateId = env.VITE_EMAILJS_TEMPLATE_ID;
    const userId = env.VITE_EMAILJS_USER_ID;

    try {
      const response = await emailjs.send(
        serviceId,
        templateId,
        formData,
        userId
      );
      console.log('SUCESSS!', response.status, response.text);
      setSuccessMessage('Message Successfully Sent');
      setShowMessage(true);
      setFormData({ name: '', email: '', message: '' }); //Clear formData
    } catch (err) {
      console.error('FAILED', err);
      setErrorMessage('Failed to send message. Please try again later. ');
      setShowMessage(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (successMessage || errorMessage) {
      const timer = setTimeout(() => {
        setShowMessage(false); // Start fade-out effect
        setTimeout(() => {
          setSuccessMessage('');
          setErrorMessage('');
        }, 300); // Delay to allow fade-out transition
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage, errorMessage]);

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
          minWidth: { xs: '300px', sm: '500px', md: '600px' },
        }}
      >
        <CustomTypography
          variant='h4'
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
            label='Your Name'
            variant='outlined'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
          />

          <TextField
            sx={{ width: '300px', borderRadius: '40px' }}
            label='Your Email'
            variant='outlined'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
            type='email'
          />

          <TextField
            label='Your Message'
            variant='outlined'
            name='message'
            value={formData.message}
            onChange={handleChange}
            required
            multiline
            rows={4}
            sx={{ width: '370px' }}
          />

          <Button
            type='submit'
            variant='contained'
            color='primary'
            sx={{ padding: '0.75rem', display: 'inline-flex' }}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>

          <Fade in={showMessage} timeout={300}>
            <Typography
              variant='body2'
              color={successMessage ? 'success.main' : 'error.main'}
              sx={{ marginTop: '1rem' }}
            >
              {successMessage || errorMessage}
            </Typography>
          </Fade>
        </form>
      </Box>
    </Box>
  );
}

export default Contact;
