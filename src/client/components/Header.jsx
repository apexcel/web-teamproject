import React from 'react'

import '../css/header.scss'

const Header = () => {
    
    return(
        <header className='header' role='banner'>
            <div className='header-wrapper'>
                <h1 className='header-heading'><a  id='hw' className='header-title' href='/'>D</a></h1>
                <div className='header-menu'>
                    <a className='link' href='#about-container'>Works</a>
                    <a className='link' href='#about-container'>About</a>
                    <a className='link' href='#about-container'>Contact</a>
                </div>
            </div>
        </header>
    )
}

export default Header;
