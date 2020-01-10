import React, { useState, useEffect } from 'react'
import axios from 'axios'

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
        <>
            <div>
                <h3>This is App Component</h3>
                <button onClick={() => {setLastUser(user.data)}}>getUser</button>
                {md}
                {data}
                <button onClick={getRoot}>getroot</button>
            </div>
        </>
    )
}

export default App;