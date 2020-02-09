import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from './Header.jsx'
import { Home, About, Contact } from '../pages'

import '../css/layout.scss'
import '../css/app.css'
import MHeader from './MHeader.jsx'

const App = () => {
    const [data, setData] = useState('')
    const [user, setUser] = useState([])
    const [lastUser, setLastUser] = useState('')
    const [windowSize, setWindowSize] = useState(769);
    const [itemShow, setItemShow] = useState(true);

    useEffect ( () => {
        window.addEventListener('resize', resize)

        const isShow = () => {
            if (windowSize > 768) {
                setItemShow(true)
            }
            else {
                setItemShow(false)
            }
        }
        isShow()

        return () => {
            console.log('clean')
            window.removeEventListener('resize', resize)
        }
    }, [windowSize])

    const resize = () => {
        setWindowSize(window.innerWidth)
        console.log(windowSize)
        console.log(typeof(Number(windowSize)))
    }

    const getWindowSize = () => ({
        width: `${windowSize}`
    })


    console.log(itemShow)
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
                <div className='container' style={getWindowSize()}>
                    {/* <h3>This is App Component</h3>
                    <button onClick={() => {setLastUser(user.data)}}>getUser</button>
                    {md}
                    {data}
                    <button onClick={getRoot}>getroot</button> }
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/about' component={About} />
                        <Route path='/contact' />
                    </Switch>
                    */}
                    <Home />
                    <About />
                    <Contact />
                </div>
        </div>
    )
}

export default App;