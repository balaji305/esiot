const express = require('express')
const app = express()
const port = 3000

app.get('/hill', (req, res) => {
  const fs = require('fs');
  const data = fs.readFileSync('./hill.txt',
    { encoding: 'utf8', flag: 'r' });
  res.send(data);
})

app.get('/des', (req, res) => {
  const fs = require('fs');
  const data = fs.readFileSync('./des.txt',
    { encoding: 'utf8', flag: 'r' });
   res.send(data);
})

app.get('/aes', (req, res) => {
  const fs = require('fs');
  const data = fs.readFileSync('./aes.txt',
    { encoding: 'utf8', flag: 'r' });
   res.send(data);
})

app.get('/rsa', (req, res) => {
  const fs = require('fs');
  const data = fs.readFileSync('./rsa.txt',
    { encoding: 'utf8', flag: 'r' });
  res.send(data);
})

app.get('/hellman', (req, res) => {
  const fs = require('fs');
  const data = fs.readFileSync('./hellman.txt',
    { encoding: 'utf8', flag: 'r' });
  res.send(data);
})

app.get('/elg', (req, res) => {
  const fs = require('fs');
  const data = fs.readFileSync('./elg.txt',
    { encoding: 'utf8', flag: 'r' });
  res.send(data);
})

app.get('/sha', (req, res) => {
  const fs = require('fs');
  const data = fs.readFileSync('./sha.txt',
    { encoding: 'utf8', flag: 'r' });
  res.send(data);
})

app.get('/md5', (req, res) => {
  const fs = require('fs');
  const data = fs.readFileSync('./md5.txt',
    { encoding: 'utf8', flag: 'r' });
  res.send(data);
})

app.get('/hillattack', (req, res) => {
  const fs = require('fs');
  const data = fs.readFileSync('./hillattack.txt',
    { encoding: 'utf8', flag: 'r' });
  res.send(data);
})

app.get('/affineattack', (req, res) => {
  const fs = require('fs');
  const data = fs.readFileSync('./affineattack.txt',
    { encoding: 'utf8', flag: 'r' });
  res.send(data);
})

app.get('/dss', (req, res) => {
  const fs = require('fs');
  const data = fs.readFileSync('./dss.txt',
    { encoding: 'utf8', flag: 'r' });
  res.send(data);
})

app.get('/android1', (req, res) => {
  const fs = require('fs');
  const data = fs.readFileSync('./android1.txt',
    { encoding: 'utf8', flag: 'r' });
  res.send(data);
})

app.get('/android2', (req, res) => {
  const fs = require('fs');
  const data = fs.readFileSync('./android2.txt',
    { encoding: 'utf8', flag: 'r' });
  res.send(data);
})

app.get('/android3', (req, res) => {
  const fs = require('fs');
  const data = fs.readFileSync('./android3.txt',
    { encoding: 'utf8', flag: 'r' });
  res.send(data);
})

app.get('/android4', (req, res) => {
  const fs = require('fs');
  const data = fs.readFileSync('./android4.txt',
    { encoding: 'utf8', flag: 'r' });
  res.send(data);
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
