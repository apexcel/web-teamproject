import React, { useState, useEffect, createRef } from 'react'
import AwesomeSlider from 'react-awesome-slider'
import AwesomeStyle from 'react-awesome-slider/src/styles'

import '../styles/works.scss'

const Works = ({title, desc, year, imgs, descText}) => {

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
                                <AwesomeSlider bullets={false} cssModule={AwesomeStyle}>
                                    <div data-src={imgs[0]} />
                                    <div data-src={imgs[1]} />
                                    <div data-src={imgs[2]} />
                                </AwesomeSlider>
                            </div>
                            <div className='works-sub-content-description'>
                                <div className='sub-content-desc'>
                                    {descText}
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
    )
}

export default Works;