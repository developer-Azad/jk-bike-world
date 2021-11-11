import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import './ManageAllOrders.css'

const ManageAllOrders = () => {
    const {user} = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect( () =>  {
        fetch('http://localhost:5000/orders')
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
             <Container maxWidth="lg">
            <h2>Manage All Orders </h2>
            <h4>Total Order : {orders.length}</h4>

            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 5 }}>
            {
                orders.map(order => <div key={order._id}>
                    <div className="card">
                        <img width="150" src={order.order.img} alt="" />
                        <h3>{order.order.name}</h3>
                        <h4>{order.order.price}</h4>
                        <Button onClick={() => handleRemove(order._id)} >Remove</Button>
                    </div>
                   
            {/* <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ maxWidth: 350,textAlign: 'center' }}>
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
    </Grid> */}
    
    </div>)
            }
            </Grid>
            </Container>
        </div>
    );
};

export default ManageAllOrders;