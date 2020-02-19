import React, { useState, useEffect, createRef } from 'react'

import '../css/about.scss'

import image from '../imgs/bg1.jpg'

const About2 = ({title, desc, year, windowHeight}) => {

    const [showSubContent, setShowSubContent] = useState(false)
    const [wHeight, setWHeight] = useState({height: windowHeight, transition: 'all 1s ease'})

    useEffect(() => {
        const _windowHeight = windowHeight * 125%
        setWHeight({
            height: _windowHeight,
            transition: 'all 1s ease'
        })
        //TODO: 윈도우 세로길이 구해서 transition 적용시키기
        console.log('windowH')
        console.log(windowHeight)
        console.log(typeof(windowHeight))
        console.log(_windowHeight)
    }, [windowHeight])

    console.log(showSubContent)

    const isShowSubContent = () => {
        setShowSubContent(!showSubContent)
    }

    return(
            <section className='section-works'>
                <div className='works-container'>
                    <header onClick={isShowSubContent} className='works-header-container'>
                        <div className='works-header-icon'></div>
                        <div className='works-heading'>
                            <h1 className='works-header-title'>
                                {title}
                            </h1>
                        </div>
                        <div className='works-header-description'>
                            <span>
                                {desc}
                            </span>
                        </div>
                        <div className='works-header-year'>
                            <span>
                                {year}
                            </span>
                        </div>
                    </header>
                    <article className={`works-sub-content-container ${showSubContent ? 'show-subs' : 'not-subs'}`}>
                        <div className={`works-sub-content ${showSubContent ? 'sub-cont-vis' : 'sub-cont-not'}`} style={wHeight}>
                            <div className='works-sub-image-wrapper'>
                                <img className='works-sub-image' src={image} />
                            </div>
                            <div className='works-sub-content-description'>
                            BlahBlah<br/>
                            BlahBlah<br/>BlahBlah<br/>BlahBlah<br/>
                            BlahBlah<br/>BlahBlah<br/>BlahBlah<br/>
                                
                            BlahBlah<br/>BlahBlah<br/>
                            BlahBlah<br/>BlahBlah<br/>
                            BlahBlah<br/>BlahBlah<br/>
                            BlahBlah<br/>BlahBlah<br/>
                            BlahBlah<br/>BlahBlah<br/>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
    )
}

export default About2;