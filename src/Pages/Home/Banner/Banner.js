import { Button } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';
import './Banner.css';

const Banner = () => {
    const history = useHistory();

    const handleProductExplore = () => {
        history.push('/allProducts');
    }
    return (
 <div className="banner-img">
    <img  src="https://st.depositphotos.com/1068095/5153/i/950/depositphotos_51533337-stock-photo-motorbike-racing.jpg" alt="" />
    <Button onClick={handleProductExplore} variant="contained">Explore</Button>
    </div>
    );
};

export default Banner;