const express = require('express')
require('dotenv').config();
const cors = require('cors');

//console.log(process.env.PORT, process.env.NODE)
const PORT = process.env.PORT || 9000;

const server = express()

server.use(cors());
server.use(express.json())

// let users = [];

server.get('/api/hello', (req, res) => {
    res.json({ message: 'api is working'});
});

// server.get('/api/users', (req, res) => {
//     res.json(users);
// });

// server.post('/api/register', (req, res) => {
//     const { username, password } = req.body;
//     if (!username || !password) {
//         return res.status(400).json({ message: 'Username and password are required.' });
//     }
//     const newUser = { id: users.length + 1, username, password };
//     users.push(newUser);
//     res.status(201).json(newUser);
// });

// server.post('/api/login', (req, res) => {
//     const { username, password } = req.body;
//     const user = users.find(user => user.username === username && user.password === password);
//     if (!user) {
//         return res.status(401).json({ message: 'Invalid username or password.' });
//     }
//     res.json({ message: `Welcome, ${username}!` });
// });

server.use('*', (req, res, next) => {
    res.send(`<h1>Hello, there.</h1>`)
})

server.use((err, req, res, next) => { //eslint-disable-line
    res.status(500).json({
        message: err.message,
        stack: err.stack,
    })
})

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})