import { Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@material-ui/core';
import React from 'react';

const CommingSoon = () => {
    return (
        <Container maxWidth="lg">
            <h1>Comming Soon </h1>
            <Grid container spacing={3}>
        <Grid  item xs={12} sm={6} md={4} lg={4}>
        <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          component="img"
          height="250"
          margin="10"
          image="https://news.maxabout.com/wp-content/uploads/2019/01/FZS-Gray-Cyan-Blue.jpg"
          alt="green iguana"
        />
        <CardContent>
          <h2>Yamaha 160</h2>
        </CardContent>
      </Card>
      </Grid>
        <Grid  item xs={12} sm={6} md={4} lg={4}>
        <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          component="img"
          height="250"
          margin="10"
          image="https://news.maxabout.com/wp-content/uploads/2019/01/FZS-Gray-Cyan-Blue.jpg"
          alt="green iguana"
        />
        <CardContent>
          <h2>Yamaha 160</h2>
        </CardContent>
      </Card>
      </Grid>
        <Grid  item xs={12} sm={6} md={4} lg={4}>
        <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          component="img"
          height="250"
          margin="10"
          image="https://news.maxabout.com/wp-content/uploads/2019/01/FZS-Gray-Cyan-Blue.jpg"
          alt="green iguana"
        />
        <CardContent>
          <h2>Yamaha 160</h2>
        </CardContent>
      </Card>
      </Grid>
      </Grid>
      </Container>
    );
};

export default CommingSoon;