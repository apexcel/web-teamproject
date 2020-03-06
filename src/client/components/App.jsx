import React, { useState, useEffect } from 'react'

import Header from './Header.jsx'
import Footer from './Footer.jsx'
import About from './About.jsx'
import Home from './Home.jsx'

import '../styles/layout.scss'
import '../styles/app.scss'


const App = () => {

    const [windowSize, setWindowSize] = useState({width: window.innerWidth, height: window.innerHeight})
    const [itemShow, setItemShow] = useState(true)
    const [onClicked, setOnClicked] = useState(false)

    useEffect ( () => {
        window.addEventListener('resize', resize)

        const isShow = () => {
            if (!isEmpty(windowSize)) {
                if (windowSize > 769) {
                    setItemShow(true)
                }
                else {
                    setItemShow(false)
                }
            }
        }
        
        isShow()

        return () => {
            console.log('clean')
            window.removeEventListener('resize', resize)
        }
    }, [windowSize])

    console.log(windowSize)

    const isClicked = () => {
        setOnClicked(!onClicked)
        console.log(onClicked)
    }

    const resize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight})
        console.log(windowSize)
        console.log(windowSize.width)
    }

    const isEmpty = (value) => { // 배열이나 객체가 비어 있으면 true, 값이 있으면 false
        if (value === '' || value === null || value === undefined ||(value !== null && typeof value === 'object' && !Object.keys(value).length)) {
            return true
        }
        else {
            return false
        }
    }

return(
        <div>
            <Header isClicked={isClicked} onClicked={onClicked}/>
                <div className='container'>
                    <Home />
                    <div className={`abouts ${onClicked ? 'unclickable' : ''}`}>
                        <About 
                            title={'Web Development'} 
                            desc={'React Project'} 
                            year={'2020'} 
                            descText={
                                `React, Webpack, Babel 및 기타 라이브러리를 사용하여 제작.`
                                    }/>
                        <About 
                            title={'Test1'} 
                            desc={'test desc'} 
                            year={'2000'} 
                            descText={`테스트요ㅕㅇ`}/>
                    </div>
                    <Footer/>
                </div>
        </div>
    )
}

export default App;