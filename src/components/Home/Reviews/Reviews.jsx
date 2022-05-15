import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css/pagination'

import './Reviews.scss'

// import required modules
import { Pagination } from 'swiper'
import { textSwiper } from './text'

export const Reviews = () => {
    const textBlock = textSwiper.map((el) => (
        <SwiperSlide key={el.id}>
            <div className="review__text">{el.text}</div>
        </SwiperSlide>
    ))
    return (
        <div>
            <div className="page__section">
                <h1 className="page__title">ОТЗЫВЫ</h1>
            </div>
            <Swiper
                slidesPerView={2}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="reviewsSwiper">
                {textBlock}
            </Swiper>
        </div>
    )
}
