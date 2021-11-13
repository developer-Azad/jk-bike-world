import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import React, { useState } from 'react';

const ManageProduct = ({product}) => {
    const {name, img, description, price} = product;
    const [orders, setOrders] = useState([]);

    const handleRemove = id => {
        const url = `https://salty-beyond-99419.herokuapp.com/bikes/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount) {
                alert('deleted product')
                const restOrder = orders.filter(order => order._id !== id);
                setOrders(restOrder);
                window.location.reload();
            }
            
        })
    }
    return (
        <Grid  item xs={12} sm={6} md={4} lg={4}>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        margin="10"
        image={img}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography gutterBottom variant="h4" component="div">
          ${price}
        </Typography>
        <Typography variant="body2">
          {description}
        </Typography>
      </CardContent>
    <Grid  className="buy-btn">
    <Button onClick={() => handleRemove(product._id)} size="small">Remove Product</Button>
        </Grid>
    </Card>
    </Grid>
    );
};

export default ManageProduct;