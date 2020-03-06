import React, {useState, useEffect} from 'react'

import '../styles/header.scss'

const Header = ({isClicked, onClicked}) => {

    return(
        <header className={`${onClicked ? 'header-open' : 'header'}`} role='banner'>
            <div className='header-wrapper'>
                <h1 className='header-heading'><a className='header-title' href='/'>D</a></h1>
                <div onClick={isClicked} className='header-menu'>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>
    )
}

export default Header;
