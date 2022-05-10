import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css/pagination'

import './Reviews.scss'

// import required modules
import { Pagination } from 'swiper'

export const Reviews = () => {
    return (
        <div>
            <Swiper
                slidesPerView={2}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="reviewsSwiper">
                <SwiperSlide>
                    <div className="review__text">
                        Спасибо вам за кухню и ваше отношение, очень приятно было работать с вами,
                        спасибо за ваше дело и сотрудников) кухня бомба, всё как хотели, так и
                        получилось))) всу друзья и родственники в восторге!
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="review__text">
                        Спасибо Вам огромное, дорогие помощники наши! Я до сих пор захожу на кухню и
                        не могу нарадоваться! 2 месяца мы выбирали кухню, и случайно в инстаграмме
                        нашли Вас. Анастасия профессионал своего дела, сразу поняла, что мы хотим,
                        предложила интересные варианты.
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="review__text">
                        Спасибо большое за реализацию наших идей, за ваш профессионализм, терпение,
                        ответственность и отзывчивость!
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="review__text">
                        Месяц как пользуемся кухней. Очень довольны покупкой. Спасибо Вам за помощь
                        при составлении проекта кухни. Отличное качество фасадов, удобна в
                        использовании, грамотное расположение рабочей зоны.
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="review__text">
                        Спасибо за прекрасную работу, за потрясающую кухню и терпение. Очень жаль,
                        что фото не может передать всю красоту цвета, а площадь помещения не
                        позволяет вместить в одну фотографию всю кухню.
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="review__text">
                        Я очень благодарна Вам за вашу работу. Не перестаю наслаждаться своей
                        кухней. Спасибо!!! Удачи Вам, радости, счастья и любви!
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
