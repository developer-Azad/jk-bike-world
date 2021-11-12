import { Container, Grid} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/bikes')
    .then(res => res.json())
    .then(data => setProducts(data))
  }, [])
    return (
             <Container maxWidth="lg">
             <h1>Feature Products</h1>
      <Grid container spacing={3} columns={{ xs: 1, sm: 1, md: 1, lg: 1 }}>
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