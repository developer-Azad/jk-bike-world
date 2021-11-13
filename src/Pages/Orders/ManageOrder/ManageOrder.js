import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import React from 'react';

const ManageOrder = ({order}) => {
    const {name, img} = order.order;

    const updatedStatus = {status: 'Shipped'};
    const handleUpdateStatus = id => {
      fetch(`https://salty-beyond-99419.herokuapp.com/orders/${id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updatedStatus)
    })
    .then(res => res.json())
    .then(data => {
      if(data.modifiedCount > 0) {
        alert('order Shipped Successfully');
        window.location.reload();
      }
    })
  }
    return (
<Grid  item xs={12} sm={6} md={4} lg={3}>
      <Card sx={{ maxWidth: 300 }}>
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
      </CardContent>
    <Grid  className="buy-btn">
    <Button onClick={() => handleUpdateStatus(order._id)} size="small">{order.status}</Button>
        </Grid>
    </Card>
    </Grid>
    );
};

export default ManageOrder;