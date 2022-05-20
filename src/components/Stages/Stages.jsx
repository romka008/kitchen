import React from 'react'
import './Stages.scss'
import { stagesData } from '../../img/img'

export const Stages = () => {
    const stages = stagesData.map((el) => (
        <div key={el.id} className="stages__container">
            <div className="stages__content">
                <div className="stages__left-side">
                    <div className="stages__topic-text">{el.title}</div>
                    <p>{el.text}</p>
                </div>
                <div className="stages__right-side">
                    <div
                        className="stages__img"
                        style={{
                            background: `url(${el.img}) center no-repeat`,
                            backgroundSize: 'cover',
                        }}></div>
                </div>
            </div>
        </div>
    ))

    return (
        <div className="stages__section">
            <div className="stages__title">ЭТАПЫ РАБОТ</div>
            {stages}
        </div>
    )
}
