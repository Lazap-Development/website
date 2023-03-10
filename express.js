const http = require('http');
const https = require('https');
const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();

http.globalAgent.maxSockets = Infinity;
https.globalAgent.maxSockets = Infinity;
app.use(compression())
app.use(express.json());
app.use(express.static('dist'));

app.use('/dist', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

const server = http.createServer(app);
const port = 8082;

server.listen(port);
console.debug('Website listening on port ' + port);
