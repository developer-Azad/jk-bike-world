import * as React from 'react';
import Grid from '@mui/material/Grid';
import './Footer.css'

const Footer = () => {
    return (
        <Grid className="footer" sx={{ bgcolor: 'black' }}>
        <Grid container spacing={2}>
            
  <Grid
  container
  direction="column"
  justifyContent="flex-start"
  alignItems="center"
  item xs={12} sm={6} md={4} lg={4}>
  <h3>Services</h3>
                    <p>Home Delivery</p>
                    <p>Genuine parts</p>
                    <p>1 years warranty</p>
                    <p>24 Hours Service</p>
  </Grid>
  <Grid 
   container
   direction="column"
   justifyContent="flex-start"
   alignItems="center"
  item xs={12} sm={6} md={4} lg={4}>
  <h3>Why Choose Our bike</h3>
                    <p>Racing Speed</p>
                    <p>Better Milase</p>
                    <p>Unique and best MOdel</p>
  </Grid>
  <Grid 
   container
   direction="column"
   justifyContent="flex-start"
   alignItems="center"
  item xs={12} sm={6} md={4} lg={4}>
  <h3>Get In Touch</h3>
                    <p>Hotline:</p>
                    <p>01587458774</p>
                    <p>Email:</p>
                    <p>jkbikeworld@gmail.com</p>
  </Grid>
  {/* <Grid 
   container
   direction="column"
   justifyContent="flex-start"
   alignItems="center"
  item xs={12} sm={6} md={4} lg={3}>
  <h3>Get In Touch</h3>
                    <h5>Hotline:</h5>
                    <p>01587458774</p>
                    <h5>Email:</h5>
                    <p>worldtour@gmail.com</p>
  </Grid> */}
</Grid>
</Grid>
    );
};

export default Footer;