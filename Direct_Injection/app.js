'use strict';

const Express = require('express');
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');
const http = require('http');

const app = module.exports = new Express();
app.use(bodyParser.json());

const dbFactory = require('./lib/db');
const authServiceFactory = require('./lib/authService');
const authControllerFactory = require('./lib/authController');

console.log(`dbFactory: ${JSON.stringify(dbFactory, null, 2)}`);
console.log(`authServiceFactory: ${JSON.stringify(authServiceFactory, null, 2)}`);
console.log(`authControllerFactory: ${JSON.stringify(authControllerFactory, null, 2)}`);

const db = dbFactory('example-db');
const authService = authServiceFactory(db, 'SHHH!');
const authController = authControllerFactory(authService);

app.post('/login', authController.login);
app.get('/checkToken', authController.checkToken);

app.use(errorHandler());

http.createServer(app).listen(3000, () => {
  console.log('Express server started');
});