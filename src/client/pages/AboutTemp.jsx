import React, { useState, useEffect, createRef } from 'react'

import '../css/about-tem.scss'

const AboutTemp = ({isEmpty}) => {

    const [active, setActive] = useState(true)
    const [hover, setHover] = useState()
    const [hovering, setHovering] = useState(false)
    const [titles, setTitles] = useState()

    useEffect( () => {
        if (!isEmpty(hover)) {
            switch (hover) {
                case 'Intro':
                    console.log('Intro')
                    setTitles('intro')
                    break;
                case 'Works':
                    console.log('Works')
                    setTitles('works')
                    break;
                case 'Activities':
                    console.log('Activities')
                    setTitles('activities')
                    break;
                case 'Members':
                    console.log('Members')
                    setTitles('members')
                    break;
            }
        }
        else {
            console.log('empty')
        }
    })

    const isActive = (e) => {
        e.preventDefault()
        setActive(!active)
        setHover()
    }

    const isHover = (e) => {
        setHover(e.target.innerHTML)
        setHovering(true)
    }

    const notHover = (e) => {
        setHover()
        setHovering(false)
        setTitles()
    }

    return(
            <section className='section-container'>
                <h1 className={`about-index ${hovering ? 'invert' : ''}`}>About</h1>
                <div className='about-wrapper'>
                    <div className={`about-items ${titles}`}>
                        <div className={`items-wrapper ${active ? 'active' : 'hide'}`}>
                            <span className='selector-index'>contents</span>
                            <span onClick={isActive} onMouseOver={isHover} onMouseOut={notHover} className='item-selector'>Intro</span>
                            <span onClick={isActive} onMouseOver={isHover} onMouseOut={notHover} className='item-selector'>Works</span>
                            <span onClick={isActive} onMouseOver={isHover} onMouseOut={notHover} className='item-selector'>Activities</span>
                            <span onClick={isActive} onMouseOver={isHover} onMouseOut={notHover} className='item-selector'>Members</span>
                        </div>
                        <div className={`sub-contents ${active ? 'hide' : 'active'}`}>
                            <div className='sub-item'>
                            <div className='cancel' onClick={isActive}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default AboutTemp;