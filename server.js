const express = requre('express');
const bodyParser = require('body-parser');

const app = express();
const port = 300;

app.use(bodyParser.json);
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(())
})