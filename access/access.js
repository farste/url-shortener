const router = require('express').Router();
const db = require('../data/dbconfig.js');
const access = require('./access-model')

router.get('/:id', (req, res) => {
    let id = req.params;
    try {
        const short = access.access(id);
        res.status(200).json(short);
    }   catch (err) {
        res.status(500).json(err)
    }
    /* const { target } = req.params;
    db('urls')
    .where('b62', '=', target)
    .select()
    .then(urls => {
        if (urls === undefined || urls.length === 0) {
            res.status(500).json({error: 'file not found'})
        }
        else {res.status(200).json(urls)}
    })
    .catch(err => res.status(404).json({ error: 'no url found' })); */
})


module.exports = router; 