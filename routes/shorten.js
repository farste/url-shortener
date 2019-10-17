const router = require('express').Router();
const hashCode = require('../hashCode');
var base62 = require("base62/lib/ascii");

const db = require('../data/dbconfig.js');

router.post('/', (req, res) => {
    const string = req.body.string;
    hash = hashCode(string);
    result = base62.encode(hash);
     db.insert({ id : result, url : string })
    .into("urls")
    .then(urls => {
      res.status(201).json(urls);
    })
    .catch(err => res.status(500).json(err));
    }) 

module.exports = router;