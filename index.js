const { port } = require("./data/dbconfig");
const express = require("express");
const server = express();
const cors = require("cors");
const shorten = require("./shorten/shorten");
const access = require("./access/access");
server.use(cors());
server.use(express.json());
server.use("/shorten", shorten);
server.use("/access", access);
server.get('/', (req, res) => {
    res.send('I live');
});

/* server.post('/base62', (req, res) => {
    const number = req.body.number;
    result = base62.encode(number);
    res.send(`${result}`);
});

server.post('/decrypt', (req, res) => {
    const target = req.body.target;
    result = base62.decode(target);
    res.send(`${result}`);
}); */

server.listen(port, function() {
    console.log(`\n Web API Listening on localhost:${port}\n`)
});

module.exports = server;