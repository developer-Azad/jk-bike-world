import { Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageOrder = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('https://salty-beyond-99419.herokuapp.com/orders')
      .then(res => res.json())
      .then(data => setOrders(data))
  }, [])

  const updatedStatus = { status: 'Shipped' };
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
        if (data.modifiedCount > 0) {
          alert('order Shipped Successfully');
          window.location.reload();
        }
      })
  }
 
  const myorder = orders.map(order => order.status);
  const order = orders.map(order => order);
  const pendingOrders = order.filter(order => order.status === 'Pending');
  // pending orders price calculation
  const totalPendingOrder = pendingOrders.map(order => order?.order?.price);
  let totalPendingPrice = 0;
  for (const element of totalPendingOrder) {
    totalPendingPrice += parseInt(element);
  }

  let col ="";

    for(let i = 1; i <= myorder.length; i++){
      const kal = myorder[i];
      if (kal === "Shipped") {
        col = "green";
      }
      if(kal === "Pending"){
        col = "blue"
      }
    }
  //total price calculation
  const totalOrderedPrice = orders.map(order => order?.order?.price);
  let totalPrice = 0;
  for (const element of totalOrderedPrice) {
    totalPrice += parseInt(element);
  }

  return (
    <div style={{marginBottom: '30px'}}>
      <Grid container>
        <Grid item xs={12} sm={12} md={6}>
          <h2 style={{ paddingLeft: '30px' }}>All Orders : {orders.length}</h2>
          <h2 style={{ paddingLeft: '30px' }}>Total Price : $<span style={{ color: 'blue' }}>{totalPrice}</span></h2>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <h2 style={{ paddingLeft: '30px' }}>Pending Orders : {pendingOrders.length}</h2>
          <h2 style={{ paddingLeft: '30px' }}>Pending Price : $<span style={{ color: 'red' }}>{totalPendingPrice}</span></h2>
        </Grid>
      </Grid>
      <Table sx={{}} aria-label="appointments table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Address</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Product Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.date}</TableCell>
              <TableCell component="th" scope="row">{row.name}</TableCell>
              <TableCell component="th" scope="row">{row.address}</TableCell>
              <TableCell align="right"><button style={{ color: `${col}` }} onClick={() => handleUpdateStatus(row._id)}>{row.status}</button></TableCell>
              <TableCell align="right">{row?.order?.name}</TableCell>
              <TableCell align="right">${row?.order?.price}</TableCell>
              <TableCell align="right">{row.payment ?
                'Paid' :
                <Link to={`/dashboard/payment/${row._id}`}><button>Pay</button></Link>
              }</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div >
  );
};

export default ManageOrder;