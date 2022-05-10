import React from 'react'
import { SvgSelector } from '../SvgSelector/SvgSelector'
import './Footer.scss'

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__section">
                <div>
                    <p className="footer__address_title">АДРЕС СТУДИИ</p>
                    <p className="footer__text">г. Белгород ул. Щорса д.45К</p>
                </div>
                <div>
                    <p>СОЦИАЛЬНЫЕ СЕТИ</p>
                    <p className="footer__svg-wrapper">
                        <a
                            href="https://www.instagram.com/pluskuhni/"
                            target="_blank"
                            rel="noopener noreferrer">
                            <SvgSelector id="instBlack" />
                        </a>
                        <a
                            href="https://vk.com/pluskuhni"
                            target="_blank"
                            rel="noopener noreferrer">
                            <SvgSelector id="vkBlack" />
                        </a>
                    </p>
                </div>
                <div>
                    <button>РАССЧИТАТЬ ПРОЕКТ</button>
                </div>
                <div>
                    <p className="footer__links">
                        {' '}
                        <a href="tel:+79036420075">8-903-642-00-75</a>
                    </p>
                    <p>С 10:00 до 18:00 по Мск</p>
                    <p className="footer__links">
                        {' '}
                        <a href="mailto:pluskuhni@yandex.ru">pluskuhni@yandex.ru</a>
                    </p>
                </div>
            </div>
            <div className="footer__end">© 2021 Мебель по индивидуальным проектам в Белгороде</div>
        </div>
    )
}
