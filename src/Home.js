import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>

                <div className="home__row">
                    <Product id={12121212} rating={5} title="Nintendo Switch 32GB Console Video Games w/ 32GB Memory Card | Neon Red/Neon Blue Joy-Con | 1080p Resolution | 802.11ac WiFi | HDMI | Surround Sound | IR Motion Camera" price={419.95} image="https://images-na.ssl-images-amazon.com/images/I/61445UADu9L._AC_SL1000_.jpg"/>
                    <Product id={155} rating={4} title="Funko Pop! Star Wars: The Mandalorian - The Child with Cup" price={8.78} image="https://images-na.ssl-images-amazon.com/images/I/516oRhx3HoL._AC_SL1153_.jpg"/>
                </div>

                <div className="home__row">
                    <Product id="57" rating={5} title="The Ballad of Songbirds and Snakes (A Hunger Games Novel)" price={14.38} image="https://images-na.ssl-images-amazon.com/images/I/61rGUKxLaBL.jpg"/>
                    <Product id="656" rating={5}
                    title="Apple iPhone 11, 128GB, Black - Fully Unlocked (Renewed)" price={707.95} image="https://images-na.ssl-images-amazon.com/images/I/51GUjMAFDbL._AC_SL1382_.jpg"/>
                    <Product id="424" rating={3} title="Beats Solo3 Wireless On-Ear Headphones - Apple W1 Headphone Chip, Class 1 Bluetooth, 40 Hours Of Listening Time - Red (Latest Model)" price={169.00} image="https://images-na.ssl-images-amazon.com/images/I/51-CdmhSPLL._AC_SL1000_.jpg"/>                
                </div>

                <div className="home__row">
                    <Product id="27" rating={4} title="Razer Blade 15 Advanced Gaming Laptop 2020: Intel Core i7-10875H 8-Core, NVIDIA GeForce RTX 2080 SUPER Max-Q, 15.6” 4K OLED Touch, 16GB RAM, 1TB SSD, CNC Aluminum, Chroma, Thunderbolt 3, Creator Ready" price={3199.99} image="https://images-na.ssl-images-amazon.com/images/I/81vQAE9SGQL._AC_SL1500_.jpg"/>                   
                </div>

            </div>
        </div>
    )
}

export default Home
