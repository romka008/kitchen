import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ModalContext } from '../Home/Modal'
import { SvgSelector } from '../SvgSelector/SvgSelector'
import { data } from './data'
import './NavBar.scss'

export const NavBar = () => {
    const { closeModal } = React.useContext(ModalContext)
    const [isActive, setIsActive] = useState(false)

    const link = data.map((el) => (
        <NavLink
            key={el.id}
            to={el.path}
            className={el.class}
            style={handleOnActiveLink}
            onClick={handleOnClick}>
            {el.name}
        </NavLink>
    ))

    function handleOnClick() {
        setIsActive((prevState) => !prevState)
        closeModal()
    }

    function handleOnActiveLink({ isActive }) {
        return { color: isActive ? 'rgb(91, 161, 241)' : '' }
    }

    return (
        <div className="header">
            <div className="header__container">
                <NavLink
                    to="/"
                    className="header__logo"
                    onClick={() => {
                        setIsActive(false)
                        closeModal()
                    }}>
                    Kухни+
                </NavLink>
                <div className="header__menu">
                    <div
                        className={isActive ? 'menu__icon _active' : 'menu__icon'}
                        onClick={handleOnClick}>
                        <span></span>
                    </div>
                    <nav className={isActive ? 'menu__body _active' : 'menu__body'}>
                        <ul className="menu__list">
                            {link}
                            <div className="svg">
                                <a
                                    href="https://www.instagram.com/pluskuhni/"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <SvgSelector id="inst" />
                                </a>
                                <a
                                    href="https://vk.com/pluskuhni"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <SvgSelector id="vk" />
                                </a>
                            </div>
                        </ul>
                    </nav>
                </div>
            </div>

            {/* <Navigation />
            <MobileNavigation /> */}
        </div>
    )
}
