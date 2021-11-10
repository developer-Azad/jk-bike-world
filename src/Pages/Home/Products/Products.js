import { Grid } from '@material-ui/core';
import React, { useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';

const Products = () => {
    const [products, setProducts] = useState([]);

    fetch('http://localhost:5000/bikes')
    .then(res => res.json())
    .then(data => setProducts(data))
    return (
        <div>
            <h1>Products</h1>
            <Grid container spacing={{ xs: 2, md: 3 }} >
           <Grid item xs={2} sm={4} md={4} lg={4} style={{m: 3}}>
           {
               products.slice(0,5).map(product => <SingleProduct
               key={product._id}
               product={product}
               ></SingleProduct>)
           }
          </Grid>
      </Grid>
        </div>
    );
};

export default Products;