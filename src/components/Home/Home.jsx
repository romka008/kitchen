import React from 'react'
// import { SvgSelector } from '../SvgSelector/SvgSelector'
import './Home.scss'
import { HomeGallery } from './HomeGallery/HomeGallery'
import { Reviews } from './Reviews/Reviews'
import { SwiperSlider } from './Swiper/SwiperSlider'
import { fittings, appliances } from '../../svg/svg'
import { about } from './text'

export const Home = () => {
    const aboutBlock = about.map((el) => <p key={el.id}>{el.text}</p>)

    const svgBlock = (kind, currentClass) => {
        return kind.map((el) => (
            <img key={el.id} src={el.title} className={currentClass} alt={el.name} />
        ))
    }
    const fittingsSvg = svgBlock(fittings, 'partnersSvg')
    const appliancesSvg = svgBlock(appliances, 'partnersSvgBottom')

    return (
        <div>
            <SwiperSlider />
            <div className="page">
                <div className="page__section_1">
                    <section className="page__section">
                        <h1 className="page__title">О ГЛАВНОМ</h1>
                        <div className="page__text">{aboutBlock}</div>
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
                    <HomeGallery />
                </div>
                <div className="page__section_4">
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
                            <div className="partnersWrapperSvg">{fittingsSvg}</div>
                        </div>
                    </section>
                </div>
                <div className="page__section_6">
                    <section className="page__section">
                        <h1 className="page__title"></h1>
                        <div className="page__raw partners__column">
                            <div style={{ paddingBottom: '20px' }}>ТЕХНИКА И САНТЕХНИКА</div>
                            <div className="partnersWrapperSvg">{appliancesSvg}</div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
