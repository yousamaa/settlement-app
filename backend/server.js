const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3001;

app.use(bodyParser.json());

const db = new sqlite3.Database(':memory:', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
});

db.run('CREATE TABLE settlements (id INTEGER PRIMARY KEY AUTOINCREMENT, amount TEXT, state TEXT)', (err) => {
    if (err) {
        return console.log(err.message);
    }
    console.log('Table created');
    db.run(`INSERT INTO settlements (amount, state) VALUES (?, ?)`, ["0", "pending"], function(err) {
        if (err) {
            return console.log(err.message);
        }
        console.log(`A row has been inserted with rowid ${this.lastID}`);
    });
});

app.post('/settlement', (req, res) => {
    const { amount, state } = req.body;
    const sql = `UPDATE settlements SET amount = ?, state = ? WHERE id = 1`;
    db.run(sql, [amount, state], (err) => {
        if (err) {
            return res.status(400).send({ error: err.message });
        }
        res.send({ message: 'Settlement updated', amount, state });
    });
});

app.get('/settlement', (req, res) => {
    const sql = `SELECT amount, state FROM settlements WHERE id = 1`;
    db.get(sql, [], (err, row) => {
        if (err) {
            return res.status(400).send({ error: err.message });
        }
        res.send(row);
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
