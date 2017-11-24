const express = require('express');
const morgan = require('morgan');
const faker = require('faker');
const axios = require('axios');
const herokuAPI = 'https://grubtoeat.herokuapp.com/api';

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/', (req, res) => res.send('index.html'));

// Generates Yelp restaurant data
app.post('/fake/yelp/:zipCode', (req, res) => {
    //TODO for yelp wrapper
    res.send('TBD');
});
// Manual fake restaurant creation
app.post('/fake/:foo/new', (req, res) => {
    const fakeRestaurant = {
        'email': faker.internet.email(),
        'firstName': 'Jane',
        'lastName': 'Doe',
        'restaurantName': faker.company.companyName(),
        'address1': faker.address.streetAddress(),
        'address2': faker.address.secondaryAddress(),
        'state': 'CA',
        'zipcode': `9210${Math.floor(Math.random() * req.params.foo)}`,
        'city': 'San Diego',
        'phone': faker.phone.phoneNumber(),
        'featuredImage': faker.image.food(),
        'description': faker.company.catchPhrase(),
        'category': 'American',
        'hours': '0800-1700',
        'username': 'restaurantUser' + req.params.foo || Math.floor(Math.random() * 100),
        'password': 'password'
    };
    axios.post(`${herokuAPI}/Restaurants`, fakeRestaurant)
        .then(success => {
            res.send(success.data);
        })
        .catch(console.error);
});
module.exports = app;
