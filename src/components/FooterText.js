import React from 'react';
import { Container, Grid, Box, Typography, Link } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const FooterText = () => {
  return (
    <Box sx={{ backgroundColor: '#660846', color: 'white', py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2">
              BERC is dedicated to providing innovative tools to empower civil engineers and construction professionals with precision, efficiency, and compliance in their projects.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contact Information
            </Typography>
            <Typography variant="body2">
              <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: 'white', fontSize: '15px', marginRight: '1rem', }} /> 
              CISNR New Academic Block, Basement, UET, Peshawar, Khyber Pakhtunkhwa, Pakistan
            </Typography>
            <Typography variant="body2">
              <FontAwesomeIcon icon={faPhone} style={{ color: 'white', fontSize: '15px', marginRight: '1rem' }} /> 
              +92-91-9222104
            </Typography>
            <Typography variant="body2">
              <FontAwesomeIcon icon={faEnvelope} style={{ color: 'white', fontSize: '15px', marginRight: '1rem' }} />  
              info@berc.com
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Link href="#" color="inherit" sx={{ display: 'flex', alignItems: 'center' }}>
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </Link>
              <Link href="#" color="inherit" sx={{ display: 'flex', alignItems: 'center' }}>
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </Link>
              <Link href="#" color="inherit" sx={{ display: 'flex', alignItems: 'center' }}>
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </Link>
              <Link href="#" color="inherit" sx={{ display: 'flex', alignItems: 'center' }}>
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <hr style={{ borderColor: 'white', marginBottom: '16px' }} />
          <Typography variant="body2">&copy; {new Date().getFullYear()} BERC. All rights reserved.</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default FooterText;
