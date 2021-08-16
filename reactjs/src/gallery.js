import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './gallery.css';

export class Gallery extends React.Component {
  render() {
    return (
      <div>
        <Carousel className='gallery'>
            <div>
                <img src="https://greenlemon.me/wp-content/uploads/2020/09/4-34-743x1024.jpg" alt="glacier shrinking"/>
            </div>
            <div>
                <img src="https://greenlemon.me/wp-content/uploads/2020/09/5-33-711x1024.jpg" alt="glacier shrinking"/>
            </div>
            <div>
                <img src="https://greenlemon.me/wp-content/uploads/2020/09/7-32-815x1024.jpg" alt="glacier shrinking"/>
                {/* <p className="legend"></p> */}
            </div>
        </Carousel>
      </div>
    );
  }
}