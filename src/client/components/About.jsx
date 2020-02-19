import React, { useState, useEffect, createRef } from 'react'

import '../css/about.scss'

import imgsArr from '../images'

const About2 = ({title, desc, year}) => {

    const [showSubContent, setShowSubContent] = useState(false)


    const isShowSubContent = () => {
        setShowSubContent(!showSubContent)
        console.log(showSubContent)
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
                        <div className={`works-sub-content ${showSubContent ? 'sub-cont-vis' : 'sub-cont-not'}`}>
                            <div className='works-sub-image-wrapper'>
                                <img className='works-sub-image image-left' src={imgsArr[0]} />
                                <img className='works-sub-image image-center' src={imgsArr[1]} />
                                <img className='works-sub-image image-right' src={imgsArr[2]} />
                            </div>
                            <div className='works-sub-content-description'>
                                <div className='sub-content-desc desc-left'>
                                    BlahBlah1<br/>
                                    BlahBlah2<br/>BlahBlah<br/>BlahBlah<br/>
                                    BlahBlah3<br/>BlahBlah<br/>BlahBlah<br/>

                                    BlahBlah4<br/>BlahBlah<br/>
                                </div>
                                <div className='sub-content-desc desc-right'>
                                    BlahBlah<br/>BlahBlah<br/>
                                    BlahBlah<br/>BlahBlah<br/>
                                    BlahBlah<br/>BlahBlah<br/>
                                    BlahBlah<br/>BlahBlah<br/>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
    )
}

export default About2;