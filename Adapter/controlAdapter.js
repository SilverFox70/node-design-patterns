'use strict';

const controlAdapter = () => {
  return {
    attack: (unit, direction) => {
      if ('shoot' in unit){
        unit.shoot(direction);
      } else if ('launch' in unit){
        unit.launch(direction);
      }
    }
  }
}

module.exports = controlAdapter;