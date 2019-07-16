import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Carousel = props => {
    return (
        <Carousel>
            <div>
                <img src="assets/img/1.jpeg" />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src="assets/img/2.jpeg" />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src="assets/img/3.jpeg" />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    );
}

export default Carousel;