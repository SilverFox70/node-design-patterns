# Revealing Constructor

## Overview
When an object's constructor _reveals_ some internal capabilities to the code that implements the constructor, but hides those same behaviors to anyone else using that object, we have a **revealing constructor**. A Promise is good example of this pattern:
``` javascript
const p = new Promise((resolve, reject) =>{
    // Code for resolving p
    // Code for rejecting p
});
```
What is important to notice is that the internal workings of the Promise call the resolve or eject functions. The promise constructor accepts a single *executor function* as the only parameter.

## The Example
The code for this example is taken directly from _Node.js Design Patterns - Second Edition_
