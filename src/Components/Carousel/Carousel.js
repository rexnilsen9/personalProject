import React from 'react';
import Carousel from 'nuka-carousel';
import './Carousel.css'




export default function () {
    return (
        <Carousel wrapAround={true} autoplay={true} autoplayInterval={4000}>
            <div className='mainLanding'>

                <img src="https://images.unsplash.com/photo-1516633630673-67bbad747022?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cdb98ea7fc64fe94e97465179077e443&auto=format&fit=crop&w=1350&q=80" alt="" />

            </div>
            <div className='mainLanding'>

                <img src="https://images.unsplash.com/photo-1486082570281-d942af5c39b7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2d06322d7df8c19c1e648c8c3a101d2d&auto=format&fit=crop&w=1351&q=80" alt="" />
            </div>
            <div className='mainLanding'>

                <img src="https://images.unsplash.com/photo-1478829797160-c6f45d1447f6?ixlib=rb-0.3.5&s=5f071504f233c5d00e5ccef64af814f4&auto=format&fit=crop&w=1350&q=80" alt="" />
            </div>
        </Carousel>
    )
}