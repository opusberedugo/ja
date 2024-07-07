// Express Imports
const express = require("express");
const session = require('express-session');
const crypto = require('crypto');

//Database imports 
const {API} = require('./model/api');

// Database Objects Imports
const {Soldier} = require('./model/soldier')


const app = express();

app.listen(process.env.PORT||3455);

// Middlewares
app.use(express.static('views'));
app.use(express.urlencoded({extended:true}));
app.use(session({
  secret:crypto.randomBytes(32).toString('hex'),
  resave: false,
  saveUninitialized: true,
  cookie: {secure:false}
}));

app.post("*/dbtest", (req,res) =>{
  API.recuitSolder(req.params).then((result) => {
    res.send("Complete");
  })
});

app.post("*/enroll", (req, res)=>{
  // console.log(req.body);
  API.recuitSolder(new Soldier(req.body.fname, req.body.lname, new Date(req.body.dob), req.body.email,req.body.phn,req.body.surd))
  .then(()=>{
    //  res.send('request recieved')
    res.redirect("/profile");
    }).catch((e)=>{
      res.redirect("/form-error");
  })
})

app.get('/profile', (req, res) => {
  res.render('profile', {firstname: 'Opuaye', lastname: 'Beredugo'})
});