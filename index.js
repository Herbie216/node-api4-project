const express = require('express')
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const port = process.env.PORT || 9000;

const server = express()

server.use(cors());
server.use(express.json())

let users = [];

server.get('/api/users', (req, res) => {
    res.json(users);
  });

  server.post('/api/register', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required.' });
    }
    const newUser = { id: users.length + 1, username, password };
    users.push(newUser);
    res.status(201).json(newUser);
  });
  
  server.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username && user.password === password);
    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password.' });
    }
    res.json({ message: `Welcome, ${username}!` });
  });

server.listen(port, (req, res) => {
    console.log(`Listening on port ${port}`)
})