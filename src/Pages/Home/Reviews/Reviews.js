import { Container, Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';


const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
      fetch('https://salty-beyond-99419.herokuapp.com/reviews')
      .then(res => res.json())
      .then(data => setReviews(data))
    }, [])

    return (
            <Container maxWidth="lg">
            <h1>Reviews</h1>
          <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
          Happy client reviews
        </Typography>
      <Grid container spacing={3} columns={{ xs: 12, sm: 12, md: 12 }}>
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