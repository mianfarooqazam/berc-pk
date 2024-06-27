import React from 'react';
import { TextField, Button, Box, Container, Grid, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';

const LetsTalk = () => {
  return (
    <section
      id="lets-talk"
      className="relative h-screen flex items-center justify-center"
      style={{
        backgroundColor: '#7dc7d4',
      }}
    >
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
                <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: 'blue', fontSize: '20px', marginRight: '1rem' }} />
                <Typography variant="h6" component="h2" style={{ fontSize: '20px' }}>
                  Location:
                </Typography>
              </Box>
              <Typography variant="body1" style={{ fontSize: '16px', fontWeight: 300 }}>
                CISNR New Academic Block, Basement, UET, Peshawar, Khyber Pakhtunkhwa 25125
              </Typography>

              <Box display="flex" alignItems="center" mb={2} mt={4}>
                <FontAwesomeIcon icon={faEnvelope} style={{ color: 'blue', fontSize: '20px', marginRight: '1rem' }} />
                <Typography variant="h6" component="h2" style={{ fontSize: '20px', }}>
                  Email:
                </Typography>
              </Box>
              <Typography variant="body1" style={{ fontSize: '16px', fontWeight: 300 }}>
                info@berc.pk
              </Typography>

              <Box display="flex" alignItems="center" mb={2} mt={4}>
                <FontAwesomeIcon icon={faPhone} style={{ color: 'blue', fontSize: '20px', marginRight: '1rem' }} />
                <Typography variant="h6" component="h2" style={{ fontSize: '20px',  }}>
                  Call:
                </Typography>
              </Box>
              <Typography variant="body1" style={{ fontSize: '16px', fontWeight: 300 }}>
                +92-91-9222104
              </Typography>
            </Box>
            
            <Box
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                padding: 4,
                borderRadius: 2,
                boxShadow: 3,
              }}
            >
              <Typography variant="h6" component="h2" style={{ fontSize: '20px', textAlign: 'center', mb: 2 }}>
              Connect for Updates
              </Typography>
              <Box display="flex" justifyContent="center" gap={4}>
                <FontAwesomeIcon icon={faInstagram} style={{ color: 'blue', fontSize: '2rem' }} />
                <FontAwesomeIcon icon={faLinkedin} style={{ color: 'blue', fontSize: '2rem' }} />
                <FontAwesomeIcon icon={faFacebook} style={{ color: 'blue', fontSize: '2rem' }} />
              </Box>
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
              <form>
                <TextField label="Name" variant="outlined" fullWidth margin="normal" />
                <TextField label="Email" variant="outlined" fullWidth margin="normal" />
                <TextField label="Subject" variant="outlined" fullWidth margin="normal" />
                <TextField label="Message" variant="outlined" fullWidth margin="normal" multiline rows={4} />
                <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                  Submit
                </Button>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default LetsTalk;
