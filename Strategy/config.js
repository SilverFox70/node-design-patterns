'use strict';

const fs = require('fs');
const objectPath = require('object-path');
const strategies = require('./strategies');

class Config {
  constructor() {
    this.data = {};
  }

  _getExtension(fn){
    return fn.split('.').pop().toLowerCase();
  }

  _assignStrategy(fn){
    if (this._getExtension(fn) === 'json'){
      this.strategy = strategies.json;
    } else if (this._getExtension(fn) === 'ini'){
      this.strategy = strategies.ini;
    }
  }

  get(path){
    return objectPath.get(this.data, path);
  }

  set(path, value){
    return objectPath.set(this.data, path, value);
  }

  read(file){
    console.log(`Deserializing from ${file}`);
    this._assignStrategy(file);
    this.data = this.strategy.deserialize(fs.readFileSync(file, 'utf-8'));
  }

  save(file){
    console.log(`Serializing to ${file}`);
    this._assignStrategy(file);
    fs.writeFileSync(file, this.strategy.serialize(this.data));
  }

}

module.exports = Config;