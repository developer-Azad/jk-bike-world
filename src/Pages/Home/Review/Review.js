import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import { Rating } from '@mui/material';
import React from 'react';

const Review = ({UserReview}) => {
  const {rating, review} = UserReview;
 
    return (
      <Grid item xs={12} sm={6} md={4} lg={4}>
      <Card sx={{ minWidth: 375, border: 0, boxShadow: 0 }}>
        <CardContent>
          <Typography variant="h5" component="div">
          {rating}
          </Typography>
          <Typography variant="body2">
          {review}
          </Typography>
          <Typography variant="body2">
          <Rating name="read-only" value={rating} readOnly />
          </Typography>
        </CardContent>
      </Card>
   </Grid>
    );
};

export default Review;