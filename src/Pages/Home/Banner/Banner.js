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
 <div>
    <img className="banner-img" src="https://img.freepik.com/free-psd/landing-page-banner-motorcycle-rent-template_66542-172.jpg?size=626&ext=jpg" alt="" />
    <Button onClick={handleProductExplore} variant="contained">Explore</Button>
    </div>
    );
};

export default Banner;