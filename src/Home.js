import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img 
                    className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt=''
                />

                <div className='home__row'>
                    <Product 
                        id='12345'
                        title='DualSense Wireless Controller' 
                        price={69.96}
                        image='https://images-na.ssl-images-amazon.com/images/I/71y%2BUGuJl5L._AC_UL160_SR160,160_.jpg'
                        rating={5}
                    />
                    <Product
                        id='24243'
                        title='All-new Echo Dot (4th Gen 2020 release) | Smart speaker with Alexa | Charcoal' 
                        price={29.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/714Rq4k05UL._AC_UL320_SR320,320_.jpg'
                        rating={5}
                    />
                </div>

                <div className='home__row'>
                    <Product
                        id='35267'
                        title='Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones' 
                        price={11.98}
                        image='https://images-na.ssl-images-amazon.com/images/I/91pR9wKJ3zL._AC_UL480_SR318,480_.jpg'
                        rating={5}
                    />
                    <Product
                        id='95729'
                        title='Fire TV Stick 4K streaming device with Alexa Voice Remote | Dolby Vision | 2018 release'
                        price={49.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/51CgKGfMelL._AC_UL200_SR200,200_.jpg'
                        rating={5}
                    />
                    <Product
                        id='85241'
                        title='Fire 7 tablet (7" display, 16 GB) - Black'
                        price={49.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/514mBrHxPnL._AC_UL200_SR200,200_.jpg'
                        rating={5}
                    />
                </div>

                <div className='home__row'>
                    <Product
                        id='58200'
                        title='Ninja Professional 72 Oz Countertop Blender with 1000-Watt Base and Total Crushing Technology for Smoothies, Ice and Frozen Fruit (BL610), Black'
                        price={99.99}
                        image='https://m.media-amazon.com/images/I/71iD5RyhuaL._AC_UY218_.jpg'
                        rating={5}
                    />
                </div>

            </div>
        </div>
    )
}

export default Home
