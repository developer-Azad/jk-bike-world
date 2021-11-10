import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.heromotocorp.com/en-bd/uploads/bike/bike_banner/20200930064105-bike-banner-Ignitor-482.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
};

export default Banner;