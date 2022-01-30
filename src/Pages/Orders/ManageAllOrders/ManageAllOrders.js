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
            <Grid container>
                <ManageOrder></ManageOrder>
            </Grid>
        </Container>
    );
};

export default ManageAllOrders;