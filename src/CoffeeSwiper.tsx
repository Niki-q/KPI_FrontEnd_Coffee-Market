import React from 'react';
import {coffee_products} from "./data/products";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import CoffeeProductLine from "./components/CoffeeProductLine";
import {Navigation} from "swiper";


const CoffeeSwiper = () => {
    return (
        <Swiper style={{overflow:"visible"}}
            spaceBetween={30}
            slidesPerView={2}
                modules={[Navigation]}
                navigation={{
                    prevEl: '.Coffee__swiper-button-prev-my',
                    nextEl: '.Coffee__swiper-button-next-my',
                }}
        >
            {coffee_products.map((product_line, index) =>
                <SwiperSlide  key = {'slide number '+index}>
                    <CoffeeProductLine line={product_line}
                                       key = {index}></CoffeeProductLine>
                </SwiperSlide>)}
            <div className="swiper-button-prev-my Coffee__swiper-button-prev-my">
                <img src="IMG/Coffee/BTN_Left_Arrow.png" alt="Button Prev"/>
            </div>
            <div className="swiper-button-next-my Coffee__swiper-button-next-my">
                <img src="IMG/Coffee/BTN_Right_Arrow.png" alt="Button Next"/>
            </div>
        </Swiper>
    );
};

export default CoffeeSwiper;