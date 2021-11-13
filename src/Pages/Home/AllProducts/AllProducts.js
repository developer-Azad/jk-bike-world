import { Container, Grid} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Product from '../Product/Product';

const AllProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch('https://salty-beyond-99419.herokuapp.com/bikes')
      .then(res => res.json())
      .then(data => setProducts(data))
    }, [])
      return (
          <div>
               <Container maxWidth="lg">
               <h1>Bike Galary</h1>
        <Grid container spacing={3} columns={{ xs: 1, sm: 1, md: 2, lg: 3 }}>
          {
            products.map(product => <Product
            key={product._id}
            product={product}
            ></Product>)
          }
        </Grid>
              </Container>
              <Footer></Footer>
          </div>
      );
  };

export default AllProducts;