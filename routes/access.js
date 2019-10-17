const router = require('express').Router();
const db = require('../data/dbconfig.js');

router.get('/:target', (req, res) => {
    const { target } = req.params;
    db('urls')
    .where('id', '=', target)
    .select()
    .then(urls => {
        if (urls === undefined || urls.length === 0) {
            res.status(404).json({error: 'file not found'})
        }
        else {res.status(200).json(urls)}
    })
    .catch(err => res.status(404).json({ error: 'no url found' }));
})

module.exports = router;