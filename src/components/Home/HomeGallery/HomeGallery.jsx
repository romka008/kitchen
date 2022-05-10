import React from 'react'
import Fancybox from '../../../modules/gallery'
import './HomeGallery.scss'
import one from '../../../img/homeGallery/1.jpg'
import oneMin from '../../../img/homeGallery/1min.jpg'
import two from '../../../img/homeGallery/2.jpg'
import twoMin from '../../../img/homeGallery/2min.jpg'
import three from '../../../img/homeGallery/3.jpg'
import threeMin from '../../../img/homeGallery/3min.jpg'

export const HomeGallery = () => {
    return (
        <div>
            <Fancybox>
                <div className="gallery">
                    <a data-fancybox="gallery" href={one}>
                        <img alt="" src={oneMin} />
                    </a>
                    <a data-fancybox="gallery" href={two}>
                        <img alt="" src={twoMin} />
                    </a>

                    <a data-fancybox="gallery" href={three}>
                        <img alt="" src={threeMin} />
                    </a>
                </div>
            </Fancybox>
        </div>
    )
}
