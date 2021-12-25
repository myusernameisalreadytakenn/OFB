
const path = require('path');
const express = require('express');
const app = express();
var multer = require('multer');


app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`);
});

app.listen(3456, () => {
    console.log('Application listening on port 3456!');
});