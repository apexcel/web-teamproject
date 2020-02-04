import React from 'react'
import { Link } from 'react-router-dom'

import '../css/header.css'

const Header = () => {
    return(
        <header className='font-baskerville'>
            <div className='header-menu'>
                <ul>
                    <li className='float-left'>
                    <a className='link' href='/'>DBNET</a>
                    </li>
                </ul>
                <ul className='float-right'>
                    <li>
                        <a className='link' href='#about-container'>Work</a>
                    </li>
                    <li>
                        <a className='link' href='#about-container'>About</a>
                    </li>
                    <li>
                        <a className='link' href='#about-container'>Contacts</a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;
