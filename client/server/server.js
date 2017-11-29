const express = require('express');
const morgan = require('morgan');
const faker = require('faker');
const axios = require('axios');
const herokuAPI = 'https://grubtoeat.herokuapp.com/api';
<<<<<<< HEAD

const app = express();
=======
const app = express();

>>>>>>> development
app.use(morgan('dev'));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('index.html');
});

module.exports = app;
