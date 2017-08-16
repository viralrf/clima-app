
const express = require('express');
const bodyParser = require('body-parser');
const redis = require('redis');
const bluebird = require('bluebird');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use("/", express.static(__dirname + '/public/'));


app.get("/getData", (req, res) => {
	res.status(200).json({hora: "13:30", clima: "nublado"});
});

app.listen(port, () => console.log('localhost:' + port));