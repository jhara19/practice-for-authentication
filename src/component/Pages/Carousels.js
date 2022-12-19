import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Rectangle1 from '../../assets/images/Rectangle1.png';
import Rectangle2 from '../../assets/images/Rectangle2.png';
import '../Pages/Carousels.css';

const Carousels = () => {
    return (
      <Carousel fade className='bgs'>
      <Carousel.Item  className='bg2'>
        <img
          className="d-block w-100 img-fluid"
          src={Rectangle1}
          alt="First slide"
          style={{height:'550px'}}
        />
      </Carousel.Item>

      <Carousel.Item >
        <img
          className="d-block w-100 img-fluid"
          src={Rectangle2}
          alt="Second slide"
          style={{height:'550px'}}
        />
      </Carousel.Item>
     
    </Carousel>
    );
};

export default Carousels;