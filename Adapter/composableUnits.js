'use strict';

const stampit = require('stampit');

// Base unit factory function
const spaceUnit = stampit.
  props({
    label: 'none',
    hitPoints: 50,
    transform: {
      x: 0,
      y: 0,
      z: 0
    }
  });

// Define move behavior
const mover = stampit()
  .methods({
    move(x_delta, y_delta, z_delta){
      this.transform.x += x_delta;
      this.transform.y += y_delta;
      this.transform.z += z_delta;
      console.log(`${this.label} moved to ${JSON.stringify(this.transform, null, 2)}`);
    }
  });

// Define shoot behavior
const beamer = stampit()
  .methods({
    shoot(direction){
      console.log(`${this.label} fired lasers at ${direction}`);
    }
  });

// Define missile launching behavior and props for missiles
const launcher = stampit()
  .props({
    missiles: 4
  })
  .methods({
    launch(direction){
      if (this.missiles > 0){
        console.log (`${this.label} launched missles at ${direction}`);
        --this.missiles;
      } else {
        console.log(`${this.label} is out of missiles!`);
      }
    }
  });

// These are the factory functions which compose our unit types.
const scout = stampit.compose(spaceUnit, mover);
const interceptor = stampit.compose(spaceUnit, mover, beamer);
const corvette = stampit.compose(spaceUnit, mover, launcher);
const defender = stampit.compose(spaceUnit, beamer, launcher);

// Example unit
const enemyInterceptor = interceptor();
// enemyInterceptor.label = 'Deslonian Fighter';
// enemyInterceptor.move(3, 1, 0);
// enemyInterceptor.shoot(.30, .25, .17);

module.exports = {
  scout,
  interceptor,
  corvette,
  defender
}

