'use strict';

const augment = (component, methods) => {

  if (methods.constructor !== Array){
    let wrapper = [];
    wrapper.push(method);
    methods = wrapper;
  }

  methods.forEach(method => {
    component[method.name] = method;
  });

  return component;
}

module.exports = augment;

