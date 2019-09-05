const app = require('express')
const passport = require("passport")
const passportSetup = require('./googleStrategy')

//auth login page
app.get('/login',(req, res) =>{
  res.render('login')
});

//auth logout
app.get('/logout', (req, res) =>{
  res.send('logging out')
});

//auth with google
app.get('/google', passport.authenticate("google",{
  scope:['profile','location']
})
);

//callback route for google to redirect to
app.get('/google/redirect, (req, res) =>{
        res.send(
        }


module.exports = app
