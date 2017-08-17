
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
	let continuar = true;
	
	while(continuar){
		
		try{
			if(Math.random(0, 1) < 0.1){
				throw new Error('Hey! the api request failed');
			}else{
				continuar = false;
				client
					.hgetallAsync(nombre)
					.then(d => {
						api.getData(d.lat, d.lon)
							.then(f => {
								let hora = moment(f.currently.time * 1000).tz(f.timezone).format("HH:mm");
								let temperatura = f.currently.temperature;
								return res.status(200).json({
									hora,
									temperatura
								});
							})
							.catch(e => {
								return res.status(500).json({msg: "Imposible escribir datos"});
							});
					})
					.catch(e => {
						return res.status(500).json({msg: "Datos no existen en la bd"});
					});
			}			
		}catch(Error){
			console.log(Error.message);
			api.setError(client, Error.message);
		}
	}
});

// Correr

app.listen(port, () => console.log('localhost:' + port));
client.on('connect', () => console.log('redis up'));