require('dotenv').config();
const express = require("express");
const server = express();
const cors = require("cors");
server.use(cors());
server.use(express.json());
var base62 = require("base62/lib/ascii");

server.get('/', (req, res) => {
    res.send('I live');
})

server.post('/base62', (req, res) => {
    const number = req.body.number;
    result = base62.encode(number);
    res.send(`${result}`);
});

server.post('/decrypt', (req, res) => {
    const target = req.body.target;
    result = base62.decode(target);
    res.send(`${result}`);
})

const port = process.env.PORT || 3300;
server.listen(port, function() {
    console.log(`\n Web API Listening on localhost:${port}\n`)
});