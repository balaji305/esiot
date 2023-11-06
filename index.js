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

app.get('/andriod1', (req, res) => {
  const fs = require('fs');
  const data = fs.readFileSync('./andriod1.txt',
    { encoding: 'utf8', flag: 'r' });
  res.send(data);
})

app.get('/andriod2', (req, res) => {
  const fs = require('fs');
  const data = fs.readFileSync('./andriod2.txt',
    { encoding: 'utf8', flag: 'r' });
  res.send(data);
})

app.get('/andriod3', (req, res) => {
  const fs = require('fs');
  const data = fs.readFileSync('./andriod3.txt',
    { encoding: 'utf8', flag: 'r' });
  res.send(data);
})

app.get('/andriod4', (req, res) => {
  const fs = require('fs');
  const data = fs.readFileSync('./andriod4.txt',
    { encoding: 'utf8', flag: 'r' });
  res.send(data);
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
