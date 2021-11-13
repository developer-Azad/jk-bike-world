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
    <img  src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201806/big_dog_0.jpeg?Hj9xcINeQkp9emv9UULlHzWGNSZeIWov&size=770:433" alt="" />
    <div className="side-name">
    <h1 >JK Bike World</h1>
    <Button onClick={handleProductExplore} variant="contained">Explore</Button>
    </div>
    </div>
    );
};

export default Banner;