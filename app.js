//DESCRIPTION:Restful Api with Nodejs, Express and Mongo Db

const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require('body-parser')
// Innitialising express; Provides the ability to create routes
const app = express();

require('dotenv/config');


app.use(bodyParser.json());

//Import routes
const postsRoute = require('./routes/posts')
app.use('/posts', postsRoute);



//Mongo DB Database connection
mongoose.connect(
    process.env.DB_CONNECTION,
{ useNewUrlParser: true },
 () => 
    console.log("Connected to database")
  );

//ROUTE(patch updates a post)
app.get('/', (req, res) => {
    res.send('We are on home')
});


//Listening to the server
app.listen(3000);













