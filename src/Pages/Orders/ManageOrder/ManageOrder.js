import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageOrder = () => {
    // const {name, img} = order.order;

    const [orders, setOrders] = useState([]);

    useEffect( () =>  {
        fetch('https://salty-beyond-99419.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [])

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
      <div>
        <h2>All Orders : {orders.length}</h2>
        <TableContainer component={Paper}>
      <Table sx={{}} aria-label="appointments table">
        <TableHead>
          <TableRow>
            <TableCell>Name (100g serving)</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Service</TableCell>
            <TableCell align="right">Action</TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right"><button onClick={() => handleUpdateStatus(row._id)}>{row.status}</button></TableCell>
              <TableCell align="right">{row?.order?.name}</TableCell>
              <TableCell align="right">{row.payment ? 
              'Paid' : 
              <Link to={`/dashboard/payment/${row._id}`}><button>Pay</button></Link>
              }</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default ManageOrder;