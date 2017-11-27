'use strict';

const augment = require('./augmenter');

class simpleMath {
  constructor(){
    this.answer = 'No calculations performed yet.';
  }

  add(a, b){
    return a + b;
  }
}

const sm = new simpleMath();
console.log(`original object addition operation: ${sm.add(2, 5)}`);

const mult = (x, y) => {
  return x * y;
}

const div = (c, d) => {
  if ( d !== 0){
    return c/d;
  } else {
    return '!!!Warning Division By Zero error!!!';
  }
}

 const meths = [mult, div];

augment(sm, meths);
Object.getOwnPropertyNames(sm.__proto__).map(prop => {
  console.log(`Found prop: ${prop}`);
});

console.log(`enhanced object with multiply: ${sm.mult(4, 7)}`);
console.log(`enhanced object doing addition: ${sm.add(19, 3)}`);
console.log(`enhanced object performing division: ${sm.div(13,17)}`);