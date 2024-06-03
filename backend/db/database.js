const sqlite3 = require('sqlite3').verbose();

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

module.exports = db;
