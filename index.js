const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT | 3000;

const app = express();

const judge = require('./judge');
app.use(bodyParser.json());


app.use('/', judge);

app.listen(PORT, () => {
    console.log('listening port ' + PORT);
});
