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
  
    const todayDate = new Date();

    const { register, handleSubmit } = useForm();

    useEffect(() => {

        fetch(`https://salty-beyond-99419.herokuapp.com/bikes/${orderId}`)
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [orderId]) 

    const onSubmit = data => {
        data.order = orders;
        data.status = 'Pending';

        fetch('https://salty-beyond-99419.herokuapp.com/orders', {
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
      <Container>
            <h1>Product Details</h1>
            <Grid container 
            spacing={3} 
            columns={{ xs: 12, sm: 12, md: 12}}
            height='700px'
            >
            <Grid item xs={12} sm={12} md={6} lg={6} >
      <Card sx={{padding: '20px'}}>
      <CardMedia
        component="img"
        height="70%"
        margin="10"
        image={orders.img}
        alt="green iguana"
      />
      <CardContent >
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
        
            <Grid item xs={12} sm={12} md={6} lg={6} sx={{height: '100%'}}>
            <div className="service-form" >
            <h2>Place Your Order</h2>
            <form  onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 50 })} placeholder="Your name" value={user.displayName}/>
      <br /><br />
      <input {...register("email" )} placeholder="Email" value={user.email} readOnly/>
      <br /><br />
      <input {...register("date", { required: true, maxLength: 50 })} placeholder="Product name" value={todayDate}/>
      <br /><br />
      <input {...register("address", { required: true} )} placeholder="Address"/>
      <br /><br />
      <input type="number" {...register("mobile")} placeholder="Mobile"/>
      <br /><br />
     <button  className="submit-btn"> <input type="submit" /></button>
    </form>
            </div>
            </Grid>
            </Grid>
            </Container>
            <Footer></Footer>
            </>

    );
};

export default PurchaseOrder;