import React, { useState, useEffect } from 'react'

import '../css/about.scss'

const About = () => {

    const [visible, setVisible] = useState(true);
    const [introVisible, setIntroVisible] = useState(false);

    useEffect( () => {
        
    })

    const clickListener = (e) => {
        e.preventDefault()
        setVisible(!visible)
        console.log(visible)
        console.log(e.target.style)
    }
    console.log(visible)
    

    return(
            <section className='section-container'>
                <h1 className='about-index'>About</h1>
                <div className='item-container'>
                    <div className='img-box'>
                        <span className='img-text'>Test Text</span>
                    </div>
                    <div className={`items ${visible ? 'visible' : 'invisible'}`}>
                        <span onClick={clickListener} className='item-selector'>Intro</span>
                        <span className='item-selector'>Works</span>
                        <span className='item-selector'>Activities</span>
                        <span className='item-selector'>Members</span>
                    </div>
                    <div className={`items ${visible ? 'invisible' : 'visible'}`}>
                        <h2>Intro</h2>
                            <p>
                                한신대학교 교내 데이터베이스와 네트워크를 연구하는 연구실입니다.<br/>
                                주로 같은 분야를 다루는 학우들 끼리 스터디를 하며 후배들의 학습을 돕습니다.<br/>
                            </p>
                            <button onClick={clickListener}>back</button>
                    </div>
                </div>
            </section>
    )
}

export default About;