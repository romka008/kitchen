import React from 'react'
import Fancybox from '../../../modules/gallery'
import './HomeGallery.scss'

export const HomeGallery = ({ img }) => {
    const galleryImg = img.map((el) => (
        <a key={el.id} data-fancybox="gallery" href={el.img.fullSize}>
            <img src={el.img.min} alt="" />
        </a>
    ))
    return (
        <Fancybox>
            <div className="gallery">{galleryImg}</div>
        </Fancybox>
    )
}
