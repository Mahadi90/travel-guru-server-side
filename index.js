const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())

const places = require('./data/dada.json')
const details = require('./data/deatils.json')

app.get('/', (req, res) => {
    res.send('Travel guru is running')
})

app.get('/places', (req, res) => {
    res.send(places)
})

app.get('/places/:id', (req , res) => {
    const id  = req.params.id;
    const selectedPlace = places.find(p => p.id === id);
    res.send(selectedPlace)
})

app.get('/details', (req, res) => {
    res.send(details)
})
app.listen(port, () => {
    console.log(`Travel guru API is running on port ${port}`)
})