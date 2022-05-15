import React from 'react'
import Fancybox from '../../../modules/gallery'
import './HomeGallery.scss'
import { homeGalleryImg } from '../../../img/img'

export const HomeGallery = () => {
    const galleryImg = homeGalleryImg.map((el) => (
        <a key={el.id} data-fancybox="gallery" href={el.img.fullSize}>
            <img src={el.img.min} />
        </a>
    ))
    return (
        <Fancybox>
            <div className="gallery">{galleryImg}</div>
        </Fancybox>
    )
}
