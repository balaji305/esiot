const express = require('express')
const app = express()
const port = 3000

app.get('/iot', (req, res) => {
  const fs = require('fs');
 
// Calling the readFileSync() method
// to read 'input.txt' file
const data = fs.readFileSync('./ans.txt',
    { encoding: 'utf8', flag: 'r' });
    res.send(data);
})

app.get('/keil', (req, res) => {

  const fs = require('fs');

 

// Calling the readFileSync() method

// to read 'input.txt' file

const data = fs.readFileSync('./timer.txt',

    { encoding: 'utf8', flag: 'r' });

    res.send(data);

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
