const express = require('express')
const authRoutes = require('./route')
const passportSetup
const mongoose = require('mongoose')
const keys = require('./keys)

const app = express()

//set up view engine
app.set('view engine', 'ejs')

//connect to mongodb online mLab
mongoose.connect(keys.mongodb.dbURL,()=>{}

//set up routes
app.use('/auth', authRoutes);

//home route
app.get('/',(req,res)=>{
res.render('home')
});
