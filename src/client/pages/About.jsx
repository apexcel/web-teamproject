import React, { useState, useEffect, createRef } from 'react'

import '../css/about.scss'

const About = () => {

    const [active, setActive] = useState(true);

    useEffect( () => {
        
    })

    const isActive = (e) => {
        e.preventDefault()
        setActive(!active)
        console.log(active)
        console.log(e.target.style)
        console.log(e.target)
        console.log(e.target.innerHTML)
        if (e.target.innerHTML === 'Intro') {
            console.log('this title is intro')
        }
    }

    return(
            <section className='section-container'>
                <h1 className='about-index'>About</h1>
                <div className='item-container'>
                    <div className='left'>
                        <span className='img-text'>Test Text</span>
                    </div>
                    <div className='right'>
                        <div className={`items ${active ? 'hide' : 'active'}`}>
                            <span>Index</span>
                            <span onClick={isActive} className='item-selector'>Intro</span>
                            <span className='item-selector'>Works</span>
                            <span className='item-selector'>Activities</span>
                            <span className='item-selector'>Members</span>
                        </div>
                        <div className={`sub-items ${active ? 'active' : 'hide'}`}>
                            <div className='cancel-btn' onClick={isActive}>
                                <span></span>
                                <span></span>
                            </div>
                            <div className='sub-content'>
                                <h2>Intro</h2>
                                <p>
                                    한신대학교 교내 데이터베이스와 네트워크를 연구하는 연구실입니다.
                                    주로 같은 분야를 다루는 학우들 끼리 스터디를 하며 후배들의 학습을 돕습니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default About;