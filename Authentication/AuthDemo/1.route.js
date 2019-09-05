const route = require('express')
const passport = require("passport")
const passportSetup = require('./googleStrategy')

//auth login page
route.get('/login',(req, res) =>{
  res.render('login')
});

//auth logout
route.get('/logout', (req, res) =>{
  res.send('logging out')
});

//auth with google
route.get('/google', passport.authenticate("google",{
  scope:['profile','location']
})
);

//callback route for google to redirect to
route.get('/google/redirect, passport.authenticate("google"), (req, res) =>{
        res.send(
        }


module.exports = route
