import { Container, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import ManageOrder from '../ManageOrder/ManageOrder';
import './ManageAllOrders.css'

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://salty-beyond-99419.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    return (
        <Container>
            <Grid container spacing={3} columns={{ xs: 1, sm: 1, md: 2, lg: 3 }}>
                <ManageOrder></ManageOrder>
            </Grid>
        </Container>
    );
};

export default ManageAllOrders;