import React from 'react'
// import { SvgSelector } from '../SvgSelector/SvgSelector'
import './Home.scss'
import { HomeGallery } from './HomeGallery/HomeGallery'
import { Reviews } from './Reviews/Reviews'
import { SwiperSlider } from './Swiper/SwiperSlider'
import { fittings, appliances } from '../../svg/svg'
import { about } from './text'
import { FormSendMessage } from './Forms/FormSendMessage/FormSendMessage'
import { NavLink } from 'react-router-dom'
import { ModalContext } from './Modal'
import { ModalReview } from './Modal/Modal/ModalReview/ModalReview'

export const Home = () => {
    const { openModal } = React.useContext(ModalContext)

    const handleClickOnReview = () => {
        openModal({
            title: 'Оставить отзыв',
            children: <ModalReview />,
        })
    }

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
                            <button>
                                <NavLink to="/portfolio">СМОТРЕТЬ ВСЕ ПРОЕКТЫ</NavLink>
                            </button>
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
                            <button onClick={handleClickOnReview}>ОСТАВИТЬ ОТЗЫВ</button>
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
                <div className="page__section_7">
                    <FormSendMessage />
                </div>
            </div>
        </div>
    )
}
