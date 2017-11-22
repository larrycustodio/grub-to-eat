const express = require('express');
const app = express();
const axios = require('axios');
const bodyParser = require('body-parser');
const faker = require('faker');
const PORT = 8080;
const apiURL = 'http://localhost:3000/api/';

app.use(bodyParser.json());

app.get('/',(req,res)=>{
    axios.get(apiURL)
    .then(result=>{
        res.json(result.data);
    })
    .catch(console.error);
})

 app.get('/customer', (req,res)=>{
     axios.get(`${apiURL}Customers`)
     .then(result=>{
         res.json(result.data);
    })
    .catch(console.error);
})

app.post('/customer', (req,res) => {
    const newCustomer = {
        "email":faker.internet.email(),
        "firstName": faker.name.firstName(),
        "lastName": faker.name.lastName(),
        "address1": faker.address.streetAddress(),
        "address2": "#12345",
        "state": faker.address.state(),
        "zipcode": faker.address.zipCode(),
        "city": faker.address.city(),
        "phone": "+1-912-171-9272",
        "username": faker.internet.userName(),
        "password": "12345"
      };
    axios.post(`${apiURL}Customers`, newCustomer)
    .then(result=>{
        res.json(result.data)
    })
    .catch(console.error);
})

app.listen(PORT, ()=>console.log(`listening to localhost:${PORT}`))