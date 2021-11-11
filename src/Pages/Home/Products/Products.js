import { Container, Grid, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';

const Products = () => {
    const [products, setProducts] = useState([]);

    fetch('http://localhost:5000/bikes')
    .then(res => res.json())
    .then(data => setProducts(data))
    return (
        <div>
             <Container maxWidth="lg">
             <h1>Products</h1>
             <Typography sx={{ fontWeight: 500, m: 2, color: 'success.main' }} variant="h6" component="div">
          OUR Products
        </Typography>
      <Grid container spacing={{ xs: 3, md: 5 }} columns={{ xs: 1, sm: 1, md: 2, lg: 3 }}>
        {
          products.map(product => <SingleProduct
          key={product._id}
          product={product}
          ></SingleProduct>)
        }
      </Grid>
            </Container>
            
        </div>
    );
};

export default Products;