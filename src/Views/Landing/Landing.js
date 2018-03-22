import React from 'react';
import Login from '../../Components/Login/Login';
import Brands from '../../Components/Banners/Brands';
import Carousel from '../../Components/Carousel/Carousel';
import Adverstising from '../../Components/Banners/Advertising';
import BestSellersPreview from '../../Components/LandingPage/BestSellers';
import ProductPreview from '../../Components/LandingPage/RecommendedProductPreview';
import './Landing.css';




export default class Landing extends React.Component {
    render() {
        return (
            <div className='wrapper'>
                <nav>
                    <Login />
                </nav>
                <div className='body'>
                    <Carousel />
                    <Brands />
                    <Adverstising />
                    <ProductPreview />
                    <BestSellersPreview />
                </div>
            </div>
        )
    }
}