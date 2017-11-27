const express = require('express');
const morgan = require('morgan');
const faker = require('faker');
const axios = require('axios');
const herokuAPI = 'https://grubtoeat.herokuapp.com/api';
const yelp = require('yelp-fusion');
//ADD YELP API Client ID + Secret on the constants at ln 8 & 9
const apiKeys = require('./apiKeys.json');

const app = express(); 
app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('index.html');
});

//Create Yelp Fusion Endpoint
app.get('/api/yelp/:searchParams', (req,res)=>{
    yelp.accessToken(apiKeys.clientId,apiKeys.clientSecret)
    .then(successToken=>{
        const yelpClient = yelp.client(successToken.jsonBody.access_token);
        yelpClient.search({
            term: 'food',
            open_now: true,
            location: req.params.searchParams || '92101',
            limit: 20,
            sort_by: 'distance'
        }).then(successSearch=>{
            res.send(successSearch.jsonBody.businesses);
        }).catch(err=>{
            res.send(err.message);
        })
    })
});

module.exports = app;
