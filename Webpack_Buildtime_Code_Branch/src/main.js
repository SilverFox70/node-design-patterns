'use strict';

if (typeof __BROWSER__ !== "undefined") {
  console.log('Hey Browser!');
} else {
  console.log('Hey Node.js!');
}