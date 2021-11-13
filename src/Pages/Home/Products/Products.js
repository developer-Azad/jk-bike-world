import { Container, Grid} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://salty-beyond-99419.herokuapp.com/bikes')
    .then(res => res.json())
    .then(data => setProducts(data))
  }, [])
    return (
             <Container maxWidth="lg">
             <h1>Feature Products</h1>
      <Grid container spacing={3} columns={{ xs: 12, sm: 12, md: 12}}>
        {
          products.slice(0, 6).map(product => <Product
          key={product._id}
          product={product}
          ></Product>)
        }
      </Grid>
            </Container>
            
    );
};

export default Products;