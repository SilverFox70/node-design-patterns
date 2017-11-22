'use strict';

const mkdirp = require('mkdirp');
const path = require('path');
const fs = require('fs');
const clc = require('cli-color');

const cyan = clc.cyan;
const mag = clc.magenta;
const yel = clc.yellow;
const red = clc.red;
const blue = clc.blueBright;
const grn = clc.green;
const brblk = clc.blackBright;

class Debugger {
  constructor(options){
    this.suppressOutput = typeof options.suppressOutput === 'undefined' ? false : options.suppressOutput;
    this.logTime = typeof options.logTime === 'undefined' ? false : options.logTime;
    this.showOptions();
  }

  showOptions(){
    let msg = blue('[Debug logger] ');
    if (this.suppressOutput) {
      msg += yel('WARNING: logger output is suppressed.');
    } else {
      msg += 'logger output is ' + grn('ON');
    }
    console.log(msg);
  }

  log(msg){
    if (!this.suppressOutput) {
      let txt = '';
      txt += this.logTime ? brblk(new Date().toString()) : '' ;
      txt += ` ${msg}`;
      console.log(txt);
    }
  }
}

module.exports = function(options){
  if (typeof options === 'undefined'){
    options = {};
  }
  if (process.env.NODE_ENV === 'development' || typeof process.env.NODE_ENV === 'undefined'){
    return new Debugger(options);
  } else if (process.env.NODE_ENV === 'production'){
    options.suppressOutput = true;
    return new Debugger(options);
  }
}