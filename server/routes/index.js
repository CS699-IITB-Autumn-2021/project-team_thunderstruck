var express = require('express');
var router = express.Router();
const createCsvWriter = require('csv-writer').createObjectCsvWriter;


const pool = require("../db");


const {spawn} = require('child_process');

const bcrypt = require('bcrypt');

const rounds = 10;

router.get('/', async function(req, res, next) {
  res.send('API is working');
});

router.post('/login', async function(req, res, next) {
  try {
    var aid = parseInt(req.body.aid.trim());
    var password = req.body.password;

    console.log("Received a login request...");


    const loginAdmin = await pool.query(
      "SELECT * FROM admin WHERE admin_id = $1",
      [aid]
    );

    if (loginAdmin.rows.length == 0) {
      res.json({
        status: 0,
        msg: "wrong admin id"
      });
    }

    const hash = loginAdmin.rows[0].password;

    bcrypt.compare(password, hash, (error, response) => {
      if (error) {
        throw error;
      }
      if (response === false) {
        res.json({
          status: 1,
          msg: "admin id found, wrong password"
        });
      } else {
        res.json({
          status: 2,
          msg: "admin id found, correct password"
        });
      }
    })


  } catch (err) {
    console.log(err.message);
    res.json({
      status: 3,
      msg: err.message
    });
  }

});

router.post('/new-admin', async function(req, res, next) {
  try {
    var email = req.body.email.toLowerCase().trim();
    var password = req.body.password;
    var name = req.body.name;
  
    console.log("Email and password: ", email, password);
  
    // insert data into database

    bcrypt.hash(password, rounds, async (error, hash) => {
      if (error) {
        throw error;
      }
      const newAdmin = await pool.query(
        "INSERT INTO admin (name, email, password) VALUES($1, $2, $3) RETURNING *",
        [name, email, hash]
      );
      res.json(newAdmin.rows[0]);
    });

  } catch(err) {
    console.log(err.message);
  }
});


router.post('/new-patient', async function(req, res, next) {


  // insert data into patient and hotspots tables
  try {
      console.log("Details of the coid case:", req.body);
      var name = req.body.name;
      var email = req.body.email;
      var zones = req.body.zones;

      // var today = new Date();

      // var myTS = "";

      // var year = today.getFullYear();
      // var month = today.getMonth();
      // var date = today.getDate();
      // var hours = today.getHours();
      // var minutes = today.getMinutes();
      // var seconds = today.getSeconds();
      // var tz = today.getTimezoneOffset();

      // var tzHours = Math.floor(tz / 60);
      // var tzMins = tz % 60;
      
      // myTS += year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds + " " +  tzHours + ":" + tzMins;




  
    // console.log("Email and password: ", email, password);
  
    // insert data into database
  
    const newCase = await pool.query(
      "INSERT INTO patient (name, email, positive_date, negative_date) VALUES($1, $2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP + INTERVAL '14 days') RETURNING *",
      [name, email]
    );

    var pid = newCase.rows[0].patient_id;

    var lid = 0;

    var newZones = [];

    await Promise.all(newZones = Object.keys(zones).map(async (zone) => {
      if (zones[zone] === true) {
        lid = parseInt(zone.slice(1));
        console.log(zone, pid, lid);
        const newZone = await pool.query(
          "INSERT INTO hotspots (patient_id, location_id) VALUES($1, $2) RETURNING *",
          [pid, lid]
        );
        // newZones.push(newZone.rows[0]);
        return newZone.rows[0];
      }

    }));

    // console.log({newCase: newCase.rows[0], newZone: newZones})
    res.json({newCase: newCase.rows[0], newZones: newZones});

  } catch(err) {
    console.log(err.message);
  }
});

router.post('/update-hotspot-graph', async function(req, res, next) {
  try {

    const csvWriter = createCsvWriter({
      path: 'campus_covid_data.csv',
      header: [
        {id: 'location_id', title: 'area_code'},
        {id: 'name', title: 'name'},
        {id: 'case_count', title: 'cases'},
      ]
    });
    const caseCounts = await pool.query(
      "SELECT location_id, name, case_count FROM (SELECT location_id, COUNT(patient_id) as case_count FROM hotspots GROUP BY location_id ORDER BY location_id) AS cc NATURAL JOIN location;"
    );

    console.log(caseCounts.rows);

    csvWriter
    .writeRecords(caseCounts.rows)
    .then(()=> console.log('The CSV file was written successfully'));
    // spawn new child process to call the python script
    const python = spawn('python', ['script.py']);
    // collect data from script

    var dataToSend = "";
    python.stdout.on('data', function (data) {
    console.log('Pipe data from python script ...');
    dataToSend = data.toString();
    });
    // in close event we are sure that stream from child process is closed
    python.on('close', (code) => {
    console.log(`child process close all stdio with code ${code}`);
    // send data to browser
    res.send(dataToSend)
  });
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = router;