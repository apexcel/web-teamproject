import React, { useState, useEffect, createRef } from 'react'
import { Route, Switch } from 'react-router-dom'
import $ from 'jquery'

import Header from './Header.jsx'
import MHeader from './MHeader.jsx'
import Footer from './Footer.jsx'
import About from './About.jsx'
import { Home } from '../pages'

import '../css/layout.scss'
import '../css/app.scss'


const App = () => {
    const [data, setData] = useState('')
    const [user, setUser] = useState([])
    const [lastUser, setLastUser] = useState('')
    const [windowSize, setWindowSize] = useState({width: window.innerWidth, height: window.innerHeight})
    const [itemShow, setItemShow] = useState(true)

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

    useEffect(() => {
        window.addEventListener('load',() => {
            console.log('ready')
            }, false);

        // if ($(document).ready()) {
        //     console.log('ready')
        // }
        // else {
        //     console.log('not ready')
        // }
    })

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

    console.log(itemShow)
    console.log(windowSize)
/*
    useEffect( () => {
        
        fetch('http://localhost:4000')
        .then(res => res.json())
        .then(resData => {
            setData(resData)
        })
        

        const getUser = () => {
            fetch('http://localhost:4000/user')
                .then(res => res.json())
                .then(userJson => {
                    setUser(userJson)
                    })
                }
                console.log(user)
        getUser()
    }, [lastUser]);

const getRoot = () => {
    fetch('http://localhost:4000')
        .then(res => res.json())
        .then(jsonRoot => setData(jsonRoot))
        console.log(data)
}
const md = user.map(v => <span key={v.id}>{v.name}</span>)
*/

return(
        <div>
            {itemShow ? <Header /> : <MHeader />}
                <div className='container'>
                    <Home />
                    <div className='abouts'>
                        <About title={'Web Development'} desc={'React Project'} year={'2020'} />
                        <About title={'Test1'} desc={'test desc'} year={'2000'} />
                    </div>
                    <Footer/>
                </div>
        </div>
    )
}

export default App;