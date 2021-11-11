import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import './MyOrders.css';

const MyOrders = () => {
    const {user} = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect( () =>  {
        const url = `http://localhost:5000/orders/user?email=${user.email}`
        fetch(url)
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [])

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
                return
            }
            
        })
    }

    return (
        <div>
            <h2>Hey <span className="name">{user.displayName}</span> You Choose this Product</h2>
            {
                orders.map(order => <div key={order._id}>
            <Grid className="myorder" item >
      <Card sx={{ maxWidth: 345,textAlign: 'center' }}>
      <CardMedia
        component="img"
        height="200"
        margin="10"
        image={order.order.img}
        alt="green iguana"
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
          {order.order.name}
        </Typography>
        <Typography variant="body2">
          {order.order.description}
        </Typography>
      </CardContent>
      <CardActions className="remove">
        <Button onClick={() => handleRemove(order._id)} size="small">Remove Order</Button>
      </CardActions>
    </Card>
    </Grid>
    </div>)
            }
        </div>
    );
};

export default MyOrders;