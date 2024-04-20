const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/weather', (req, res) => {
  res.send('++_sunny_++');
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Example app from docker listening on port ${port}!`);
})
