import { Container, Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import ManageProduct from '../ManageProduct/ManageProduct';

const ManageProducts = () => {
   
    const [products, setProducts] = useState([]);

   

  useEffect(() => {
    fetch('https://salty-beyond-99419.herokuapp.com/bikes')
    .then(res => res.json())
    .then(data => setProducts(data))
  }, [])
    return (
        <div>
             <Container maxWidth="lg">
             <h1>Manage Products</h1>
             <Typography sx={{ fontWeight: 500, m: 2, color: 'success.main' }} variant="h6" component="div">
          OUR Products
        </Typography>
      <Grid container spacing={3} columns={{ xs: 1, sm: 1, md: 2, lg: 3 }}>
        {
          products.map(product => <ManageProduct
          key={product._id}
          product={product}
          ></ManageProduct>)
        }
      </Grid>
            </Container>
            
        </div>
    );
};

export default ManageProducts;