import React from 'react'
import { Link } from 'react-router-dom'

import '../css/header.css'

const Header = () => {
    return(
        <header className='header-menu'>
            <ul>
                <li>
                    <Link className='link' to='/'>Home</Link>
                </li>
                <li>
                    <Link className='link' to='/about'>About</Link>
                </li>
                <li>
                    <Link className='link' to='/contact'>Contact</Link>
                </li>
            </ul>
        </header>
    )
}

export default Header;
