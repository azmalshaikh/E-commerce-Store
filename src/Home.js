import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home"> 
            <div className="home__container">
                <img className="home__image"
                // src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2020/ACQ/Gateway/HolidayNonPromo/DV5/US-EN_100120_HOLNonPromo_ACQ_GW_Hero_D_3000x1200_CV4_2._CB415751492_.jpg"
                 src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                 alt="Amazon Prime"/>

                <div className="home__row">
                    <Product
                        id="12321341"
                        title="New Apple MacBook Pro (13-inch, 8GB RAM, 512GB SSD, 1.4GHz Quad-core 8th-Generation Intel Core i5 Processor, Magic Keyboard) - Space Grey"
                        price={1300}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/71pC69I3lzL._AC_SL1500_.jpg"
                    />
                    <Product
                        id="49538094"
                        title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                        price={239.0}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="4903850"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                        price={199.99}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                    />
                    <Product
                        id="23445930"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        rating={5}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    />
                    <Product
                        id="3254354345"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={599.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="90829332"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={1294.98}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/810s87wc61L._AC_SX466_.jpg"
                    />

                    <Product
                        id="90829375"
                        title="Dell Alienware 34 inch (86.36cm) Curved WQHD Gaming Monitor with HDMI and DP Ports, IPS Panel, 120Hz, 2ms, NVIDIA G-Sync, Tilt, Swivel, Height-Adjustable - AW3420DW (Black)"
                        price={1094.98}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/61%2BAVPOoyML._AC_SX466_.jpg"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
