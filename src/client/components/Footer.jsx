import React from 'react'

import '../css/footer.scss'

const Footer = () => {
    return(
        <footer>
            <div className='footer-title'>
                DBNET
            </div>
            <div className='footer-container'>

                <div className='footer-item left'>
                    <div className='left-item'>
                        <a href='#' className='f-link'>WORKS</a>
                        <a href='#' className='f-link'>ABOUT</a>
                        <a href='#' className='f-link'>CONTACT</a>
                    </div>
                </div>
                <div className='footer-item mid'>
                    <div className='mid-item'>
                        <span>LOCATION</span>
                        <span>18206-1, 137, Hanshindae-gil, Osan-si</span>
                        <span>Gyeonggi-do, Republic of Korea</span>
                    </div>
                </div>
                <a href='#' className='footer-item right'>
                    <div className='right-item'>
                    </div>
                </a>
            </div>
        </footer>
    )
}

export default Footer;