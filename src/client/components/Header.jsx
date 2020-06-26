import React, { useState, useEffect } from 'react'
import { Route, Switch, Link} from 'react-router-dom'

import '../styles/header.scss'

const Header = ({isClicked, onClicked}) => {

    return(
        <header className={`${onClicked ? 'header-open' : 'header'}`} role='banner'>
            <div className={`${onClicked ? 'header-wrapper-open' : 'header-wrapper'}`}>
                <h1 className={`${onClicked ? 'header-heading-open' : 'header-heading'}`}><a className='header-title' href='/'>{onClicked ? 'DBNET' : 'D'}</a></h1>
                <div onClick={isClicked} className={`${onClicked ? 'header-menu-open' : 'header-menu'}`}>
                    <span className='header-icon'></span>
                    <span className='header-icon'></span>
                    <span className='header-icon'></span>
                </div>
            </div>
            {onClicked ? <div className='open-contents'>
                <div>
                    <Link onClick={isClicked} to='/web-teamproject/'>Works</Link>
                    <Link onClick={isClicked} to='/web-teamproject/about'>About</Link>
                    <Link onClick={isClicked} to='/web-teamproject/contact'>Contact</Link>
                </div>
            </div> : <div></div>}
        </header>
    )
}

export default Header;
