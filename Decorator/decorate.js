'use strict';

const decorate = (component, method) => {
  const proto = Object.getPrototypeOf(component);
  if (method.constructor !== Array){
    let wrapper = [];
    wrapper.push(method);
    method = wrapper;
  }

  function Decorator(component){
    this.component = component;
  }

  Decorator.prototype = Object.create(proto);

  // Find all functions of original object and delegate to subject's functions
  Object.getOwnPropertyNames(Decorator.prototype.__proto__).map((prop) => {
    if (typeof Decorator.prototype[prop] === 'function') {
      console.log(`Object function: ${prop}`);
      Decorator.prototype[prop] = function(){
        return this.component[prop].apply(this.component, arguments);
      }
    }
  });

  // Add new behavior, decorating this object.
  method.forEach(m => {
    Decorator.prototype[m.name] = m;
  });

  return new Decorator(component);
}

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
Object.getOwnPropertyNames(enhancedSM.__proto__).map(prop => {
  console.log(`Found prop: ${prop}`);
});
