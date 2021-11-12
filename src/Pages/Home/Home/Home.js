
import React from 'react';
import Banner from '../Banner/Banner';
import CommingSoon from '../CommingSoon/CommingSoon';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Reviews></Reviews>
            <CommingSoon></CommingSoon>
        </div>
    );
};

export default Home;