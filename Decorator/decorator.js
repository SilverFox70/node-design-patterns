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

  // Find all functions of subject and delegate to subject's functions
  Object.getOwnPropertyNames(Decorator.prototype.__proto__).map((prop) => {
    if (typeof Decorator.prototype[prop] === 'function') {
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

module.exports = decorate;