import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';

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
        <div>
            
            <Grid item xs={12} sm={12} md={4}>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        margin="10"
        image={orders.img}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {orders.name}
        </Typography>
        <Typography variant="body2">
          {orders.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>

            <h2>Place Your Order</h2>
            <div>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 50 })} placeholder="Your name" value={user.displayName}/>
      <br /><br />
      <input {...register("email" )} placeholder="Email" value={user.email} readOnly/>
      <br /><br />
      <input {...register("address" )} placeholder="Address"/>
      <br /><br />
      <input type="number" {...register("mobile")} placeholder="Mobile"/>
      <br /><br />
      <input className="submit-btn" type="submit" />
    </form>
            </div>
            </div>
    );
};

export default PurchaseOrder;