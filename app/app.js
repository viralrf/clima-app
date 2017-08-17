
const express = require('express');
const bodyParser = require('body-parser');
const redis = require('redis');
const bluebird = require('bluebird');
const path = require('path');
const moment = require('moment-timezone');
const api = require('./server/api/api.js');

// Configuracion

const app = express();
const client = redis.createClient();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use("/", express.static(__dirname + '/public/'));

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

// Insertar datos

require('./server/config/seed.js')(client);

// Ruta

app.post("/getData", (req, res) => {
	
	const nombre = req.body.nombre;
		
	client
		.hgetallAsync(nombre)
		.then(d => {
			api.getData(d.lat, d.lon)
				.then(f => {
					console.log(f);
				});
		})
		.catch(e => console.log(e));
	
	
	res.status(200).json({hora: "13:30", temperatura: "5°"});
});

// Correr

app.listen(port, () => console.log('localhost:' + port));
client.on('connect', () => console.log('redis up'));