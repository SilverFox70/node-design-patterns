'use strict';

const Config = require('./config');

const config = new Config();

config.read('samples/conf.json');
config.set('book.nodejs', 'design patterns');
config.save('samples/conf.json');

config.read('samples/conf.ini');
config.set('book.nodejs', 'design patterns');
config.save('samples/conf.ini');