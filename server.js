const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'src')));

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/src/index.html');
});

app.listen(PORT, error => (
  error
    ? console.error(error)
    : console.info(`Success`)
));