import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@material-ui/core';
import { useHistory } from 'react-router';

const SingleProduct = ({product}) => {
    const {_id, name, img, description} = product;
    const history = useHistory();

    const handlePurchase = () =>{
      history.push(`/purchaseOrder/${_id}`);
    }


    return (
      <Grid item xs={12} sm={6} md={4} lg={4}>
      <Card sx={{ maxWidth: 345 }}>
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
        <Typography variant="body2">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handlePurchase} size="small">Share</Button>
      </CardActions>
    </Card>
    </Grid>
    );
};

export default SingleProduct;