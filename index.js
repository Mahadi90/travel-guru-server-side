const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const places = require('./data/dada.json')

app.get('/', (req, res) => {
    res.send('Travel guru is running')
})

app.get('/places', (req, res) => {
    res.send(places)
})
app.listen(port, () => {
    console.log(`Travel guru API is running on port ${port}`)
})