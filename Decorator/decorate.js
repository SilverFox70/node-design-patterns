'use strict';

const decorate = require('./decorator');

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

const enhancedSM = decorate(sm, meths);

console.log(`enhanced object with multiply: ${enhancedSM.mult(4, 7)}`);
console.log(`enhanced object doing addition: ${enhancedSM.add(19, 3)}`);
console.log(`enhanced object performing division: ${enhancedSM.div(13,17)}`);
Object.getOwnPropertyNames(enhancedSM.__proto__).map(prop => {
  console.log(`Found prop: ${prop}`);
});
