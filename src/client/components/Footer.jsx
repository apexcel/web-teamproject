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
                        <span className='f-link'>WORKS</span>
                        <span className='f-link'>ABOUT</span>
                        <span className='f-link'>CONTACT</span>
                    </div>
                </div>
                <div className='footer-item right'>
                    <div className='right-item'>
                        <span>LOCATION</span>
                        <span>137, Hanshindae-gil, Osan-si</span>
                        <span>Gyeonggi-do, Republic of Korea</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;