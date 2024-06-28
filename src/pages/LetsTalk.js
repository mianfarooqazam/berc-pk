import React from 'react';
import { TextField, Button, Box, Container, Grid, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import bg from '../assets/call-2.jpg'; 

const LetsTalk = () => {
  return (
    <div>
      <section id="lets-talk" className="h-screen flex mb-0" style={{ backgroundColor: '#ffff' }}>
        <div className="w-1/2 h-full">
          <img src={bg} alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="w-1/2 h-full flex flex-col items-center justify-center p-10">
          <h1 
            className="font-bold text-center font-thin mb-8" 
            style={{ fontSize: '50px' }}
          >
            Contact Us!
          </h1>
          <form className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
            <TextField label="Subject" variant="outlined" fullWidth margin="normal" />
            <TextField label="Message" variant="outlined" fullWidth margin="normal" multiline rows={4} />
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
              Submit
            </Button>
          </form>
        </div>
      </section>
    
      <section id="lets-talk-2" className="relative h-screen flex items-center justify-center" style={{ backgroundColor: '#fff', marginTop: '-20px' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  padding: 4,
                  borderRadius: 2,
                  boxShadow: 3,
                  mb: 4,
                }}
              >
                <Box display="flex" alignItems="center" mb={2}>
                  <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: '#1055d8', fontSize: '20px', marginRight: '1rem' }} />
                  <Typography variant="h6" component="h2" style={{ fontSize: '20px' }}>
                    Location:
                  </Typography>
                </Box>
                <Typography variant="body1" style={{ fontSize: '16px', fontWeight: 300 }}>
                  CISNR New Academic Block, Basement, UET, Peshawar, Khyber Pakhtunkhwa 25125
                </Typography>

                <Box display="flex" alignItems="center" mb={2} mt={4}>
                  <FontAwesomeIcon icon={faEnvelope} style={{ color: '#1055d8', fontSize: '20px', marginRight: '1rem' }} />
                  <Typography variant="h6" component="h2" style={{ fontSize: '20px', }}>
                    Email:
                  </Typography>
                </Box>
                <Typography variant="body1" style={{ fontSize: '16px', fontWeight: 300 }}>
                  info@berc.pk
                </Typography>

                <Box display="flex" alignItems="center" mb={2} mt={4}>
                  <FontAwesomeIcon icon={faPhone} style={{ color: '#1055d8', fontSize: '20px', marginRight: '1rem' }} />
                  <Typography variant="h6" component="h2" style={{ fontSize: '20px',  }}>
                    Call:
                  </Typography>
                </Box>
                <Typography variant="body1" style={{ fontSize: '16px', fontWeight: 300 }}>
                  +92-91-9222104
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  height: '400px',
                  borderRadius: 2,
                  boxShadow: 3,
                  overflow: 'hidden',
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.226579340728!2d71.47341777643568!3d34.014966125501665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d935d7ff000001%3A0x55a90b8781d9dbf!2sCISNR%20New%20Academic%20Block%2C%20Basement%2C%20UET%2C%20Peshawar%2C%20Khyber%20Pakhtunkhwa%2025125!5e0!3m2!1sen!2s!4v1688888888888!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                ></iframe>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>
    </div>
  );
};

export default LetsTalk;
