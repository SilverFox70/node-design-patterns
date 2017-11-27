# Decorator

## Overview
The **Decorator Pattern** is used to augment the behavior of existing objects, and in some respects is very similar to the Proxy pattern. The main difference is that the Decorator adds new functions instead of merely enhancing the subject's functions. Decorators can be employed either using composition or object augmentation.

The **decorator.js** module provides a generic way to decorate any existing object using *composition*.

## Decorator Module (Composition)

``` javascript
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

module.exports = decorate;
```

The **decorate** function accepts two arguments: the original object we wish to decorate, and a method(s) we wish to add. We maintain the prototype chain by referencing the prototype of the subject component. Then we delegate all original method calls back to the subject's methods. Finally, we add all of our new functions to the decorated version.

### Compositional Decorator Example
To see a trivial example of this pattern, check out the **decorate.js** script. We start with a simple object and add several functions using the decorator, although the original object remains unchanged.

## Decorating directly - Object Augmentation
Because of the nature of javascript, it is of course possible to simply add new functions directly to the subject object. This brings up a point: when we talk about decorating objects, we are discussing adding behaviors to instances of an object, not to its abstract class. This is different from how the Decorating Pattern is implemented in classical languages.

### Object Augmentation Decorator
The **augmenter.js** module and augmenter-example.js show the same simpleMath object being decorated as in the compositional model. Notice that object augmentation changes the subject component.




