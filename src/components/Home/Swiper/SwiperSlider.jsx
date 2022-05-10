import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import './SwiperSlider.scss'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper'

import firstImg from '../../../img/swiper/1.jpg'
import secondImg from '../../../img/swiper/2.jpg'
import thirdImg from '../../../img/swiper/3.jpg'

export const SwiperSlider = () => {
    return (
        <div className="swiper__wrapper">
            <Swiper
                slidesPerView={1}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                speed={2000}
                loop={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper">
                <SwiperSlide>
                    <img src={firstImg} alt="fireSpot" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={secondImg} alt="fireSpot" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={thirdImg} alt="fireSpot" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
