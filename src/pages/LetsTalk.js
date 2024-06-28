import React from 'react';
import { TextField, Button, Box, Container, Grid, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import bg from '../assets/call.jpg'; 

const LetsTalk = () => {
  return (
    <div>
      <section id="lets-talk" className="h-screen flex" style={{ backgroundColor: '#dbe1ef' }}>
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
            <TextField label="Name" variant="outlined" fullWidth margin="normal" />
            <TextField label="Email" variant="outlined" fullWidth margin="normal" />
            <TextField label="Subject" variant="outlined" fullWidth margin="normal" />
            <TextField label="Message" variant="outlined" fullWidth margin="normal" multiline rows={4} />
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
              Submit
            </Button>
              </form>
        </div>
      </section>
      <section id="lets-talk-2" className="relative h-screen flex items-center justify-center" style={{ backgroundColor: '#dbe1ef' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={6} md={6}>
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
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  padding: 4,
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              >
                <Typography variant="h6" component="h2" style={{ fontSize: '20px', textAlign: 'center', marginBottom: '16px' }}>
                  Connect for Updates
                </Typography>
                <Box display="flex" justifyContent="center" gap={4}>
                  <FontAwesomeIcon icon={faInstagram} style={{ color: '#1055d8', fontSize: '2rem' }} />
                  <FontAwesomeIcon icon={faLinkedin} style={{ color: 'blue', fontSize: '2rem' }} />
                  <FontAwesomeIcon icon={faFacebook} style={{ color: 'blue', fontSize: '2rem' }} />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>
    </div>
  );
};

export default LetsTalk;
