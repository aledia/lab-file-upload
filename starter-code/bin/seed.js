require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/user');

const dbName = `${process.env.DATABASE}`; 

mongoose
    .connect(`mongodb://localhost/${dbName}`, {
        useNewUrlParser: true
    })
    .then(x => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    })
    .catch(err => {
        console.error('Error connecting to mongo', err)
    });

const user = [{
  
        username: "Angel",
        email:"angel@hotmail.com" ,
        password: "123",
        picture: ("../public/images/foto1.jpg")
    },
    {
  
        username: "Pedro",
        email:"pedro@hotmail.com" ,
        password: "1234",
        picture: ("../public/images/foto2.jpg")
    },
    {
  
        username: "Rosa",
        email:"rosa@hotmail.com" ,
        password: "12345",
        picture: ("../public/images/foto3.jpg")
    },
    {
  
        username: "Antonio",
        email:"antonio@hotmail.com" ,
        password: "123456",
        picture: ("../public/images/foto4.jpg")
    }

];

User.create(users)
    .then(movieInserted => {
        console.log(`Created ${movieInserted.length} users`)
        mongoose.connection.close();
    })
    .catch(err => {
        console.log(err)
    })