import React from 'react';
import { Carousel } from 'react-bootstrap';

export default function Carouse() {
    return (
        <div>
            <Carousel variant="dark">
  <Carousel.Item>
    <img style={{height:'30rem'}}
      className="d-block w-100"
      src="https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      alt="First slide"
    />
    <Carousel.Caption>
      <h5>Work Hard</h5>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img  style={{height:'30rem'}}
      className="d-block w-100"
      src="https://images.pexels.com/photos/1181435/pexels-photo-1181435.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="Second slide"
    />
    <Carousel.Caption>
      <h5>Play Smart</h5>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img  style={{height:'30rem'}}
      className="d-block w-100"
      src="https://images.pexels.com/photos/7375/startup-photos.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5 style={{color:'blue'}} >Enjoy Your Work</h5>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
}
