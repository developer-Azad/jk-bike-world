import { Container, Grid, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import Review from '../Review/Review';


const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    fetch('http://localhost:5000/reviews')
    .then(res => res.json())
    .then(data => setReviews(data))

    return (
        <div>
            <Container maxWidth="lg">
            <h1>Reviews</h1>
          <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
          Happy client reviews
        </Typography>
      <Grid container spacing={{ xs: 3, md: 5 }} columns={{ xs: 1, sm: 2, md: 3 }}>
        {
          reviews.map(UserReview => <Review
          key={UserReview._id}
          UserReview={UserReview}
          ></Review>)
        }
      </Grid>
      </Container>
        </div>
    );
};

export default Reviews;