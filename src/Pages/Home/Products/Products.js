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
             <h1 style={{textAlign: "center", margin: "30px"}}>Feature Products</h1>
      <Grid container spacing={3} columns={{ xs: 1, sm: 1, md: 2, lg: 3 }}>
        {
          products.slice(products.length-6, products.length).map(product => <Product
          key={product._id}
          product={product}
          ></Product>)
        }
      </Grid>
            </Container>
            
    );
};

export default Products;