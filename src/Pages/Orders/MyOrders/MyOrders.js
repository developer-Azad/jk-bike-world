import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import './MyOrders.css';
import { Grid, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { Link } from 'react-router-dom';

const MyOrders = () => {
    const {user} = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect( () =>  {
        const url = `https://salty-beyond-99419.herokuapp.com/orders/user?email=${user.email}`
        fetch(url)
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [user.email])

    //total price calculation
    const totalOrderedPrice = orders.map(order => order?.order?.price);
    let totalPrice = 0;
    for(const element of totalOrderedPrice){
         totalPrice += parseInt(element);
    }

    return (
      <div style={{marginBottom: '30px'}}>
        <Grid container>
        <Grid item xs={12} sm={12} md={6}>
            <h2 style={{ paddingLeft: '30px' }}>My Orders : {orders.length}</h2>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
            <h2 style={{ paddingLeft: '30px' }}>Total Price : $<span style={{color: 'blue'}}>{totalPrice}</span></h2>
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
              <TableCell align="right">Details</TableCell>
              <TableCell align="right">Remove</TableCell>
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
                <TableCell align="right"><button>{row.status}</button></TableCell>
                <TableCell align="right">{row?.order?.name}</TableCell>
                <TableCell align="right">${row?.order?.price}</TableCell>
                <TableCell align="right">{row.payment ?
                  'Paid' :
                  <Link to={`/dashboard/payment/${row._id}`}><button>Pay</button></Link>
                }</TableCell>
                <TableCell align="right"><button>details</button></TableCell>
                <TableCell align="right"><button style={{ color: 'red' }}>X</button></TableCell>
              </TableRow>
            ))}
          </TableBody>

        </Table>
      </div >
    );
};

export default MyOrders;