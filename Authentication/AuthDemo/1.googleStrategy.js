//npm install two libraries
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const User = require('../models/user-model')

passport.use(
  new GoogleStrategy({
  //options for the google start-->https://console.developers.google.com/-->create credentials
    clientID:keys.google.clientID
    clientSecret:keys.google.clientSecret
    callbackURL:'/Authentication/AuthDemo/redirect'    
  }),(accessToken, refreshToken, profile, done) =>{
  //passport callback function:to see if profile exists already
    new User = ({
      googleId: profile.id
      username: profile.displayName   
    }).save().then((newUser)=>{
      console.log('new user created' + newUser
   //after saving
    })
    
  }
