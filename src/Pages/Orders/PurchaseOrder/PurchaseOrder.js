import { Container } from '@material-ui/core';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import './PurchaseOrder.css';

const PurchaseOrder = () => {
    const {orderId} = useParams();
    const [orders, setOrders] = useState({});
    const { user } = useAuth();
    const history = useHistory();
    console.log(orders);

    const { register, handleSubmit } = useForm();

    useEffect(() => {

        fetch(`http://localhost:5000/bikes/${orderId}`)
        .then(res => res.json())
        .then(data => setOrders(data))
    }, []) 

    const onSubmit = data => {
        data.order = orders;
        data.status = 'Pending';

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('Go to "My Order" page to confirm your order');
                history.push('/home');
            }
        })
      }
    return (
      <>
      <Container maxWidth="lg">
            <h1>Product Details</h1>
            <Grid item  container
  direction="column"
  justifyContent="center"
  margin="30px"
  alignItems="center">
      <Card sx={{ maxWidth: 700 }}>
      <CardMedia
        component="img"
        height="400"
        margin="10"
        image={orders.img}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {orders.name}
        </Typography>
        <Typography gutterBottom variant="h4" component="div">
          ${orders.price}
        </Typography>
        <Typography variant="body2">
          {orders.description}
        </Typography>
      </CardContent>
    </Card>
    </Grid>

    <h2>Place Your Order</h2>
            <div>
            <form className="service-form" onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 50 })} placeholder="Your name" value={user.displayName}/>
      <br /><br />
      <input {...register("email" )} placeholder="Email" value={user.email} readOnly/>
      <br /><br />
      <input {...register("address" )} placeholder="Address"/>
      <br /><br />
      <input type="number" {...register("mobile")} placeholder="Mobile"/>
      <br /><br />
     <button  className="submit-btn"> <input type="submit" /></button>
    </form>
            </div>
            </Container>
            <Footer></Footer>
            </>

    );
};

export default PurchaseOrder;