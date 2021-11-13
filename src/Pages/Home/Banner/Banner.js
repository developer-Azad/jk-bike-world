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
 <div >
    <div className="banner-img">
    <img  src="https://imgd.aeplcdn.com/0x0/bikewaleimg/ec/464/img/m/Hero-Racing-EBR-1190RS-1128_l.jpg" alt="" />
    </div>
    <div className="side-name">
    <h1 >JK Bike World</h1>
    <Button onClick={handleProductExplore} variant="contained">Explore</Button>
    </div>
    </div>
    );
};

export default Banner;