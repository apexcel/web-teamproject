import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from './Header.jsx'
import { Home, About } from '../pages'

import '../css/app.css'

const App = () => {
    const [data, setData] = useState('')
    const [user, setUser] = useState([])
    const [lastUser, setLastUser] = useState('')

    useEffect( () => {
        /*
        fetch('http://localhost:4000')
        .then(res => res.json())
        .then(resData => {
            setData(resData)
        })
        */

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
console.log(user)
console.log(user[0])
console.log(user[1])
return(
        <div>
            <Header />
                <div className='main-container'>
                    {/* <h3>This is App Component</h3>
                    <button onClick={() => {setLastUser(user.data)}}>getUser</button>
                    {md}
                    {data}
                    <button onClick={getRoot}>getroot</button> */}
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/about' component={About} />
                        <Route path='/contact' />
                    </Switch>
                </div>
        </div>
    )
}

export default App;