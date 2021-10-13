var express = require('express');
var router = express.Router();


const pool = require("../db");

router.get('/', function(req, res, next) {
  res.send('API is working');
});

router.post('/login', function(req, res, next) {
    var username = req.body.username.toLowerCase().trim();
    var password = req.body.password;

    console.log("Username and password: ", username, password);

});


router.post('/new-case', function(req, res, next) {
  var covidCase = {
    name: req.body.name,
    roll: req.body.roll,
    course: req.body.course,
    zones: req.body.zones
  };

  console.log("Details of the coid case:", covidCase);
});

module.exports = router;