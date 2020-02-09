import React from 'react'
import { Link } from 'react-router-dom'

import '../css/header.scss'

const Header = () => {

    return(
        <header>
            <div className='header-menu'>
                <a className='float-left link' href='/'>DBNET</a>
                <a className='float-right link' href='#about-container'>Work</a>
                <a className='float-right link' href='#about-container'>About</a>
                <a className='float-right link' href='#about-container'>Contacts</a>
            </div>
        </header>
    )
}

export default Header;
