import React from 'react'
import {
    portfolioGalleryImg1,
    portfolioGalleryImg2,
    portfolioGalleryImg3,
    portfolioGalleryImg4,
} from '../../img/img'
import { HomeGallery } from '../Home/HomeGallery/HomeGallery'
import './Portfolio.scss'

export const Portfolio = () => {
    return (
        <div className="portfolio">
            <div className="portfolio__section">
                <div className="portfolio__title">ПОРТФОЛИО</div>
                <div className="portfolio__text">ФРАГМЕНТЫ НАШИХ ИЗБРАННЫХ ПРОЕКТОВ</div>
                <HomeGallery img={portfolioGalleryImg1} />
                <HomeGallery img={portfolioGalleryImg2} />
                <HomeGallery img={portfolioGalleryImg3} />
                <HomeGallery img={portfolioGalleryImg4} />
            </div>
        </div>
    )
}
