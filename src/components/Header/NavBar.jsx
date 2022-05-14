import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { SvgSelector } from '../SvgSelector/SvgSelector'
import './NavBar.scss'
// import { MobileNavigation } from './MobileNavigation'
// import { Navigation } from './Navigation'

export const NavBar = () => {
    const [isActive, setIsActive] = useState(false)
    const handleOnClick = () => {
        setIsActive((prevState) => !prevState)
    }
    return (
        <div className="header">
            <div className="header__container">
                <NavLink to="/" className="header__logo" onClick={() => setIsActive(false)}>
                    Kухни+
                </NavLink>
                <div className="header__menu menu">
                    <div
                        className={isActive ? 'menu__icon _active' : 'menu__icon'}
                        onClick={handleOnClick}>
                        <span></span>
                    </div>
                    <nav className={isActive ? 'menu__body _active' : 'menu__body'}>
                        <ul className="menu__list">
                            <NavLink
                                to="/"
                                className="nav_link"
                                style={({ isActive }) => {
                                    return { color: isActive ? 'rgb(91, 161, 241)' : '' }
                                }}
                                onClick={handleOnClick}>
                                ГЛАВНАЯ
                            </NavLink>
                            <NavLink
                                to="/portfolio"
                                className="nav_link"
                                style={({ isActive }) => {
                                    return { color: isActive ? 'rgb(91, 161, 241)' : '' }
                                }}
                                onClick={handleOnClick}>
                                ПОРТФОЛИО
                            </NavLink>
                            <NavLink
                                to="/stages"
                                className="nav_link"
                                style={({ isActive }) => {
                                    return { color: isActive ? 'rgb(91, 161, 241)' : '' }
                                }}
                                onClick={handleOnClick}>
                                ЭТАПЫ РАБОТ
                            </NavLink>
                            <NavLink
                                to="/blog"
                                className="nav_link"
                                style={({ isActive }) => {
                                    return { color: isActive ? 'rgb(91, 161, 241)' : '' }
                                }}
                                onClick={handleOnClick}>
                                БЛОГ
                            </NavLink>
                            <NavLink
                                to="/contacts"
                                className="nav_link"
                                style={({ isActive }) => {
                                    return { color: isActive ? 'rgb(91, 161, 241)' : '' }
                                }}
                                onClick={handleOnClick}>
                                КОНТАКТЫ
                            </NavLink>
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
