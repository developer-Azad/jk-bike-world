import { Container, Grid} from '@material-ui/core';
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
    }, [user.email])

    return (
        <div>
            <h2>Hey <span className="name">{user.displayName}</span> You Choose this Product</h2>
            <Container>
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