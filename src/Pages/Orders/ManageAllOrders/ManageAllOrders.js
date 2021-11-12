import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import ManageOrder from '../ManageOrder/ManageOrder';
import './ManageAllOrders.css'

const ManageAllOrders = () => {
    const {user} = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect( () =>  {
        fetch('http://localhost:5000/orders')
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [])

    


    return (
        <div>
             <Container maxWidth="lg">
            <h2>Manage All Orders </h2>
            <h4>Total Order : {orders.length}</h4>
    
      <Grid container spacing={3} columns={{ xs: 1, sm: 1, md: 2, lg: 3 }}>
        {
          orders.map(order => <ManageOrder
          key={order._id}
          order={order}
          ></ManageOrder>)
        }
      </Grid>

            {/* <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 5 }}> */}
            <Grid container spacing={3} columns={{ xs: 1, sm: 1, md: 2, lg: 3 }}>
            {/* {
                orders.map(order => <div key={order._id}>
 

                    {/* <div className="card">
                        <img width="150" src={order.order.img} alt="" />
                        <h3>{order.order.name}</h3>
                        <h4>{order.order.price}</h4>
                        <Button onClick={() => handleUpdateStatus(order._id)} >{order.status}</Button>
                    </div> */}
                   
           
    
    {/* </div>)
            }  */}
            </Grid>
            </Container>
        </div>
    );
};

export default ManageAllOrders;