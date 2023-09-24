require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectToDb = require('./config/db.js')
const userRoutes = require('./Routers/userRoutes.js');

const app = express();

// Express middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(cors())

// Init connection to db
connectToDb();


app.use('/',userRoutes);


module.exports = app;