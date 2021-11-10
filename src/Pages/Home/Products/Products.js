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
            <div className="row row-cols-1 row-cols-md-3 g-4">
           {
               products.map(product => <SingleProduct
               key={product._id}
               product={product}
               ></SingleProduct>)
           }
            </div>
        </div>
    );
};

export default Products;