
import React from 'react';
import Banner from '../Banner/Banner';
import CommingSoon from '../CommingSoon/CommingSoon';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Reviews></Reviews>
            <CommingSoon></CommingSoon>
            <Footer></Footer>
        </div>
    );
};

export default Home;