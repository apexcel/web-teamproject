import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import App from './App.jsx'
import About from './About.jsx'
import Header from './Header.jsx'
import Contact from './Contact.jsx'

const Root = () => {

    const [windowSize, setWindowSize] = useState({width: window.innerWidth, height: window.innerHeight})
    const [itemShow, setItemShow] = useState(true)
    const [onClicked, setOnClicked] = useState(false)
    const [hide, setHide] = useState({display: 'block'})

    const [posY, setPosY] = useState(window.scrollY)
    const [showFooter, setShowFooter] = useState(false)

    useEffect (() => {
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


    useEffect(() => {
        if (onClicked) {
            setHide({display: 'none'})
        }
        else {
            setHide({display: 'block'})
        }
    }, [onClicked])

    //  스크롤이 바닥일 시 푸터 보여줌
    useEffect(() => {
        window.addEventListener('checkScrollPos', checkScrollPos)
        
        const calcBottom = () => {
            if ( Math.round(window.scrollY) === Math.round((document.body.scrollHeight - window.innerHeight)) ) {
                setShowFooter(true)
                console.log('바닥')
            }
            else {
                setShowFooter(false)
                console.log(window.scrollY)
            }
        }
        calcBottom()

        return () => {
            window.removeEventListener('checkScrollPos', checkScrollPos)
        }
    }, [posY])

    const checkScrollPos = () => {
        setPosY(window.scrollY)
        console.log(posY)
    }

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
        <BrowserRouter>
            <Header isClicked={isClicked} onClicked={onClicked} />
                <Switch>
                    <Route 
                        exact path='/wvProject' 
                        component={App} 
                        hide={hide} 
                        onClicked={onClicked}
                        />
                    <Route path='/wvProject/about' component={About} />
                    <Route path='/wvProject/contact' component={Contact} />
                </Switch>
        </BrowserRouter>
    )
}

export default Root;