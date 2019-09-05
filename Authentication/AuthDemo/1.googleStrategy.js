//npm install two libraries
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');

passport.use(
  new GoogleStrategy({
  //options for the google start-->https://console.developers.google.com/-->create credentials
    clientID:keys.google.clientID
    clientSecret:keys.google.clientSecret
    callbackURL:'/Authentication/AuthDemo/redirect'
    
  }),() =>{
  //passport callback function
  }
