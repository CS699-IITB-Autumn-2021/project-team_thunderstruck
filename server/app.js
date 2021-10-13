const express = require('express');
const cors = require('cors');


const app = express();


var index = require('./routes/index');
var session = require('./session');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(session);
app.use('/', index);


var server = app.listen('8080',() => {console.log("App Listening for Connections..")});
