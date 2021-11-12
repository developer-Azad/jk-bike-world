import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Order from '../Order/Order';
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


    // const handleRemove = id => {
    //     const url = `http://localhost:5000/orders/${id}`;
    //     fetch(url, {
    //         method: 'DELETE'
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         if(data.deletedCount) {
    //             alert('deleted order')
    //             const restOrder = orders.filter(order => order._id !== id);
    //             setOrders(restOrder);
    //             return
    //         }
            
    //     })
    // }

    return (
        <div>
            <h2>Hey <span className="name">{user.displayName}</span> You Choose this Product</h2>
            <Container maxWidth="lg">
             <h2>My orders</h2>
             <Typography sx={{ fontWeight: 500, m: 2, color: 'success.main' }} variant="h6" component="div">
          OUR Products
        </Typography>
      <Grid container spacing={3} columns={{ xs: 1, sm: 1, md: 2, lg: 3 }}>
        {
          orders.slice(0, 6).map(order => <Order
          key={order._id}
          order={order}
          ></Order>)
        }
      </Grid>
            </Container>
           
            {/* {
                orders.map(order => <div key={order._id}>
           <Grid container spacing={3} columns={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12} sm={6} md={4} lg={4} >
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
    </Grid>
    </div>)
            } */}
        </div>
    );
};

export default MyOrders;