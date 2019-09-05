//npm install two libraries
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')

passport.use(
  new GoogleStrategy({
  //options for the google start-->https://console.developers.google.com/-->create credentials
    clientID:
    clientSecret:
    
  }),() =>{
  //passport callback function
  }
