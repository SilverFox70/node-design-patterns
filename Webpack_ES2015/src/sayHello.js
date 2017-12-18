'use strict';

const mustache = require('mustache');
const template = '<h1>Hello <i>{{name}}</i></h1>';
mustache.parse(template);
module.exports.sayHello = toWhom => {
  console.log('[sayHello] function called. name: ' + toWhom);
  console.log(mustache.render(template, {name: toWhom}));
  return mustache.render(template, {name: toWhom});
};
