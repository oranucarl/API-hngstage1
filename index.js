const express = require('express')
const data = require('./template')

const api = express()

const HOST = 'localhost'
const PORT = 8888


//api.get('/', (req,res) => {
//res.send('Welcome to this my API!')
//})

api.get('/api', (req,res) => {
    res.status(200).json(data)
})


api.listen(PORT, () => console.log(`API running at ${HOST}:${PORT}!`))