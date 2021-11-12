import { Container, Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';


const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
      fetch('http://localhost:5000/reviews')
      .then(res => res.json())
      .then(data => setReviews(data))
    }, [])

    return (
            <Container maxWidth="lg">
            <h1>Reviews</h1>
          <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
          Happy client reviews
        </Typography>
      <Grid container spacing={3} columns={{ xs: 1, sm: 2, md: 3 }}>
        {
          reviews.map(UserReview => <Review
          key={UserReview._id}
          UserReview={UserReview}
          ></Review>)
        }
      </Grid>
      </Container>
    );
};

export default Reviews;