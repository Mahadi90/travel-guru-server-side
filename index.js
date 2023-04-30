const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Travel guru is running')
})

app.listen(port, () => {
    console.log(`Travel guru API is running on port ${port}`)
})