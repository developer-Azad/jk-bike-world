import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, Grid } from '@material-ui/core';
import { useHistory } from 'react-router';
import './Product.css'

const Product = ({product}) => {
    const {_id, name, img, description, price} = product;
    const history = useHistory();

    const handlePurchase = () =>{
      history.push(`/purchaseOrder/${_id}`);
    }
    return (
      <Grid  item xs={12} sm={6} md={4}>
      <Card sx={{ height: '100%'}}>
      <CardMedia
        component="img"
        height="45%"
        margin="10"
        image={img}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography gutterBottom variant="h4" component="div">
          ${price}
        </Typography>
        <Typography variant="body2">
          {description}
        </Typography>
      </CardContent>
    <Grid  className="buy-btn">
    <Button sx={{ my: '10px'}} onClick={handlePurchase}>Buy Now</Button>
        </Grid>
    </Card>
    </Grid>
    );
};


export default Product;