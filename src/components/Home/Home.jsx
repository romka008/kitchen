import React from 'react'
// import { SvgSelector } from '../SvgSelector/SvgSelector'
import './Home.scss'
import { HomeGallery } from './HomeGallery/HomeGallery'
import { Reviews } from './Reviews/Reviews'
import { SwiperSlider } from './Swiper/SwiperSlider'
import blum from '../../svg/blum.svg'
import hettich from '../../svg/hettich.svg'
import techniStone from '../../svg/techniStone.svg'
import staron from '../../svg/staron.svg'
import bosch from '../../svg/bosch.svg'
import aeg from '../../svg/aeg.svg'
import electrolux from '../../svg/electrolux.svg'
import elica from '../../svg/elica.svg'
import franke from '../../svg/franke.svg'
import omoikiri from '../../svg/omoikiri.svg'

export const Home = () => {
    return (
        <div>
            <SwiperSlider />
            <div className="page">
                <div className="page__section_1">
                    <section className="page__section">
                        <h1 className="page__title">О ГЛАВНОМ</h1>
                        <div className="page__text">
                            <p>Мебель по индивидуальным проектам в Белгороде</p>
                            <p>
                                Наша компания имеет большой опыт в производстве уникальной мебели
                                для вашей кухни.
                            </p>
                            <p>
                                Специалисты нашей компании используют современные подходы и новейшие
                                решения в проектировании и реализации пространства внутри Вашего
                                дома.
                            </p>
                            <p>
                                Каждая наша кухня разрабатывается по индивидуальным предпочтениям
                                заказчика, учитывая их образ и привычки, воплощая в мебели
                                максимальный комфорт и удобство для жизни.
                            </p>
                            <p>
                                Если вы разделяете наши ценности, то мы готовы реализовать все
                                предпочтения в дизайне Вашей кухни.
                            </p>
                        </div>
                    </section>
                </div>
                <div className="page__section_2">
                    <section className="page__section">
                        <h1 className="page__title">ПОРТФОЛИО</h1>
                        <div className="page__raw page__text">
                            <div>Фрагменты наших избранных проектов</div>
                            <a href="../portfolio.html">
                                <button>СМОТРЕТЬ ВСЕ ПРОЕКТЫ</button>
                            </a>
                        </div>
                    </section>
                </div>
                <div className="page__section_3">
                    <div className="page__homeGallery">
                        <HomeGallery />
                    </div>
                </div>
                <div className="page__section_4">
                    <div className="page__section">
                        <h1 className="page__title">ОТЗЫВЫ</h1>
                    </div>
                    <Reviews />
                    <div className="page__section">
                        <div className="page__raw page__text">
                            <button>ОСТАВИТЬ ОТЗЫВ</button>
                        </div>
                    </div>
                </div>
                <div className="page__section_5">
                    <section className="page__section">
                        <h1 className="page__title">ПАРТНЁРЫ</h1>
                        <div className="page__raw partners__column">
                            <div style={{ paddingBottom: '20px' }}>ФУРНИТУРА И МАТЕРИАЛЫ</div>
                            <div className="partnersWrapperSvg">
                                <img src={blum} className="partnersSvg" alt="blum" />
                                <img src={hettich} className="partnersSvg" alt="hettich" />
                                <img src={techniStone} className="partnersSvg" alt="techniStone" />
                                <img src={staron} className="partnersSvg" alt="staron" />
                            </div>
                        </div>
                    </section>
                </div>
                <div className="page__section_6">
                    <section className="page__section">
                        <h1 className="page__title"></h1>
                        <div className="page__raw partners__column">
                            <div style={{ paddingBottom: '20px' }}>ТЕХНИКА И САНТЕХНИКА</div>
                            <div className="partnersWrapperSvg">
                                <img src={bosch} className="partnersSvgBottom" alt="bosch" />
                                <img src={aeg} className="partnersSvgBottom" alt="aeg" />
                                <img
                                    src={electrolux}
                                    className="partnersSvgBottom"
                                    alt="electrolux"
                                />
                                <img src={elica} className="partnersSvgBottom" alt="elica" />
                                <img src={franke} className="partnersSvgBottom" alt="franke" />
                                <img src={omoikiri} className="partnersSvgBottom" alt="omoikiri" />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
