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
            <Container>
          <h1 style={{textAlign: "center", margin: "30px"}}>
          Happy client reviews
        </h1>
      <Grid container spacing={3} columns={{ xs: 1, sm: 1, md: 2, lg: 3 }}>
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