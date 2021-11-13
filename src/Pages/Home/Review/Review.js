import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import { Rating } from '@mui/material';
import React from 'react';
import './Review.css';

const Review = ({UserReview}) => {
  const {rating, review, name} = UserReview;
  const ratings = parseInt(rating);
    return (
      <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ border: 0, boxShadow: 0 }}>
        <CardContent className="review-card">
          <Typography className="user-name" variant="h6" component="div">
          {name}
          </Typography>
          <Typography variant="body2">
          {review}
          </Typography>
         
          <div className="rating">
          <Rating name="read-only" value={ratings} readOnly />
          </div>
         
        </CardContent>
      </Card>
   </Grid>
    );
};

export default Review;