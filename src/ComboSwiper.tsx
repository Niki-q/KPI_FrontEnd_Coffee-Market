import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import {Navigation} from "swiper";
import {combo_products} from "./data/products";
import ComboProduct from "./components/ComboProduct";


const ComboSwiper = () => {
    return (
        <Swiper style={{overflow:"visible"}}
                spaceBetween={30}
                slidesPerView={3}
                modules={[Navigation]}
                navigation={{
                    prevEl: '.Combo__swiper-button-prev-my',
                    nextEl: '.Combo__swiper-button-next-my',
                }}
        >
            {combo_products.map(product =>
                <SwiperSlide key = {'slide with '+product.id}>
                    <ComboProduct product={product}
                                       key = {product.id}></ComboProduct>
                </SwiperSlide>)}
            <div className="swiper-button-prev-my Combo__swiper-button-prev-my">
                <img src="IMG/Coffee/BTN_Left_Arrow.png" alt="Button Prev"/>
            </div>
            <div className="swiper-button-next-my Combo__swiper-button-next-my">
                <img src="IMG/Coffee/BTN_Right_Arrow.png" alt="Button Next"/>
            </div>
        </Swiper>
    );
};

export default ComboSwiper;