import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Hero.css';
//optional swiper modules
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper/modules';
import slide1 from '../assets/color-living-room.jpg';
import slide2 from '../assets/houses.jpg';
import slide3 from '../assets/modern-living-room.jpg';
import slide4 from '../assets/image/hero.jpg';
import slide5 from '../assets/image/livingroom.jpg';

// install modules

const Hero = () => {
    return (
        <div className="hero-container">
            <div class="hero">
                <h1>Where Creativity Meets Comfort</h1>
            </div>

            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                navigation={true}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slide1} alt="Slide 1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="Slide 2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="Slide 3" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="Slide 4" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="Slide 5" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Hero;
