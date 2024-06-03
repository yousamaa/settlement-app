const express = require('express');
const router = express.Router();
const db = require('../db/database');

router.post('/', (req, res) => {
    const { amount, state } = req.body;
    const sql = `UPDATE settlements SET amount = ?, state = ? WHERE id = 1`;
    db.run(sql, [amount, state], (err) => {
        if (err) {
            return res.status(400).send({ error: err.message });
        }
        res.send({ message: 'Settlement updated', amount, state });
    });
});

router.get('/', (req, res) => {
    const sql = `SELECT amount, state FROM settlements WHERE id = 1`;
    db.get(sql, [], (err, row) => {
        if (err) {
            return res.status(400).send({ error: err.message });
        }
        res.send(row);
    });
});

module.exports = router;
