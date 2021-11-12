import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import React, { useState } from 'react';

const Order = ({order}) => {
    const {name, img, description, price} = order.order;
    const [orders, setOrders] = useState([]);

    const handleRemove = id => {
        const url = `http://localhost:5000/orders/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount) {
                alert('deleted order')
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
          {price}
        </Typography>
        <Typography variant="body2">
          {description}
        </Typography>
        <Typography variant="body2">
          {order.status}
        </Typography>
      </CardContent>
    <Grid  className="buy-btn">
    <Button onClick={() => handleRemove(order._id)} size="small">Remove Order</Button>
        </Grid>
    </Card>
    </Grid>
    );
};

export default Order;