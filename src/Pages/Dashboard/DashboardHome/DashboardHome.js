import { Grid } from '@material-ui/core';
import React from 'react';
import MyBikes from '../MyBikes/MyBikes';
import './DashboardHome.css'

const DashboardHome = () => {
    const [date, setDate] = React.useState(new Date());
    
    return (
        <Grid container spacing={2}>
            <h1>My Bikes</h1>
        <Grid item xs={12} sm={12} md={5}>
            
        </Grid>
        <br />
        <Grid item xs={12} sm={12} md={7}>
          <MyBikes date={date}></MyBikes>
        </Grid>
      </Grid> 
    );
};

export default DashboardHome;