import React from 'react'
import { development } from '../../img/img'
import './InDeveloping.scss'

export const InDeveloping = () => {
    return (
        <div className="development">
            <div className="development__section">
                <div className="development__title">СТРАНИЦА В РАЗРАБОТКЕ</div>
                <img className="development__img" src={development} alt="" />
            </div>
        </div>
    )
}
