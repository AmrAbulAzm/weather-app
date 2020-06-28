const express = require('express');
const request = require('request');
const fetch = require('node-fetch');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/weather-info', (req, res) => {
  fetch('https://samples.openweathermap.org/data/2.5/forecast?q=M%C3%BCnchen,DE&appid=b6907d289e10d714a6e88b30761fae22')
  .then(response => response.json())
  .then(data => {
    res.json(data);
  })
  .catch(error => {
    res.status(500).json({ type: 'error', message: error.message });
  });
});

app.listen(3001, () => console.log(`listening on 3001`));