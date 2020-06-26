import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/footer.scss'

const Footer = () => {

    const pageTop = () => {
        window.scrollTo({top: 0, left:0, behavior: 'smooth'})
    }

    return(
        <footer>
            <div className='footer-title'>
                DBNET
            </div>
            <div className='footer-container'>

                <div className='footer-item left'>
                    <div className='left-item'>
                        <Link className='f-link' to='/web-teamproject/'>Works</Link>
                        <Link className='f-link' to='/web-teamproject/about'>About</Link>
                        <Link className='f-link' to='/web-teamproject/contact'>Contact</Link>
                    </div>
                </div>
                <div className='footer-item mid'>
                    <div className='mid-item'>
                        <span>LOCATION</span>
                        <span>18206-1, 137, Hanshindae-gil, Osan-si</span>
                        <span>Gyeonggi-do, Republic of Korea</span>
                    </div>
                </div>
                <div onClick={pageTop} id='to-top' className='footer-item right'>
                    <div className='right-item'>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;