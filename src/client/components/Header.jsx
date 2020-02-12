import React from 'react'
import { Link } from 'react-router-dom'

import '../css/header.scss'

const Header = () => {

    return(
        <header className='header' role='banner'>
            <div className='header-wrapper'>
                <h1 className='header-heading'><a className='header-title' href='/'>D</a></h1>
                <div className='header-menu'>
                    <a className='link' href='#about-container'>Works</a>
                    <a className='link' href='#about-container'>About</a>
                    <a className='link' href='#about-container'>Contacts</a>
                </div>
            </div>
        </header>
    )
}

export default Header;
