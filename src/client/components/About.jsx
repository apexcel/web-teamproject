import React from 'react'

import Footer from './Footer.jsx'

//styles
import '../styles/about.scss'

const About = () => {
    return(
        <div>
            <div className='about-container'>
                <div>
                    <div className='title-heading'>DBNET</div>
                    <div className='title'>About</div>
                    <hr/>
                </div>
                <article className='about-article'>
                    DBNET은 한신대학교 컴퓨터 공학과의 연구실로서 데이터베이스와 네트워크의 합성어로 이루어진 단어입니다.
                    
                </article>
            </div>
            <Footer />
        </div>
    )
}

export default About;