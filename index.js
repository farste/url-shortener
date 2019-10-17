require('dotenv').config();
const express = require("express");
const server = express();
const cors = require("cors");
server.use(cors());
server.use(express.json());
var base62 = require("base62/lib/ascii");

//Hash function
String.prototype.hashCode = function() {
    var hash = 0;
    if (this.length == 0) {
        return hash;
    }
    for (var i = 0; i < this.length; i++) {
        var char = this.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash; // Convert to 32bit integer
    }
    hash = Math.abs(hash);
    return hash;
}

server.get('/', (req, res) => {
    res.send('I live');
});

server.post('/hash', (req, res) => {
    const string = req.body.string;
    hash = string.hashCode();
    result = base62.encode(hash);
    res.send(`${hash} \n ${result}`);
});

server.post('/base62', (req, res) => {
    const number = req.body.number;
    result = base62.encode(number);
    res.send(`${result}`);
});

server.post('/decrypt', (req, res) => {
    const target = req.body.target;
    result = base62.decode(target);
    res.send(`${result}`);
});

const port = process.env.PORT || 3300;
server.listen(port, function() {
    console.log(`\n Web API Listening on localhost:${port}\n`)
});