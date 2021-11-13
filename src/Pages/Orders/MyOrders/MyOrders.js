import { Container, Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Order from '../Order/Order';
import './MyOrders.css';

const MyOrders = () => {
    const {user} = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect( () =>  {
        const url = `https://salty-beyond-99419.herokuapp.com/orders/user?email=${user.email}`
        fetch(url)
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [])

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
           
        </div>
    );
};

export default MyOrders;