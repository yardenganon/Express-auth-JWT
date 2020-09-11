const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

//Connect to DB
mongoose.connect(process.env.DB_CONNECT,
{ useNewUrlParser: true,
useUnifiedTopology: true },
() => console.log('Connected to DB'));

//Import Routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');

//Middeware
app.use(express.json());

//Route Middlewares
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);



app.listen(3000, () => console.log ('Server up and running'));