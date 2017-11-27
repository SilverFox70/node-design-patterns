'use strict';

const contactInfo = require('./contact-info');
const proxy = require('./infoProxy');
const person = new contactInfo();
const personProxy = proxy(person);



personProxy.setName({'first': 'William', 'last': 'Brinkert'});
personProxy.setPhoneNumber('5082129980');

personProxy.showInfo();

