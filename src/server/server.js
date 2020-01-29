const express = require('express')
const app = express()
const http = require('http')
const path = require('path')
const cors = require('cors')

const server = http.createServer(app)
const port = process.env.port || 4000

const router = require('./router.js')
const axios = require('axios')

app.use(express.static(path.join(__dirname, '..', 'dist/')))
app.use(cors())

app.use('/', router)
app.use('/user', router)
app.get('*', (req, res) => {
    res.sendfile(path.resolve(__dirname, '..', 'dist/', 'index.html'))
})
app.use(express.json())

server.listen(port, () => {
    console.log(`Listen server running on ${port} port.`)
})