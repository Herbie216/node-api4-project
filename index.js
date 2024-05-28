const express = require('express')

const port = 9000

const server = express()

server.use(express.json())

server.listen(port, (req, res) => {
    console.log(`Listening on port ${port}`)
})