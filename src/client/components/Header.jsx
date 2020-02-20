import React from 'react'

import '../styles/header.scss'

const Header = () => {
    
    return(
        <header className='header' role='banner'>
            <div className='header-wrapper'>
                <h1 className='header-heading'><a  id='hw' className='header-title' href='/'>D</a></h1>
                <div className='header-menu'>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>
    )
}

export default Header;
