const express = require('express');
const bodyParser = require('body-parser');
const settlementsRouter = require('./routes/settlements');

const app = express();
const port = 3001;

app.use(bodyParser.json());

app.use('/settlement', settlementsRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
