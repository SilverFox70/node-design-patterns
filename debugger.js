'use strict';

const mkdirp = require('mkdirp');
const path = require('path');
const fs = require('fs');
const clc = require('cli-color');

const cyan = clc.cyan;
const mag = clc.magenta;
const yel = clc.yellow;
const red = clc.red;
const blue = clc.blue;
const grn = clc.green;
const bgblk = clc.bgBlackBright;

class Debugger {
  constructor(options){
    console.log('Constructor called...');
    this.suppressOutput = options.suppressOutput ? options.suppressOutput : false;
    this.logTime = options.logTime ? options.logTime : false;
  }

  showOptions(){
    let options = {};
    options.suppressOutput = this.suppressOutput;
    options.logtime = this.logTime;
    let msgclr = options.suppressOutput ? grn : red;
    console.log('Debug logger suppressed: ' + msgclr('options.suppressOutput'));
  }

  log(msg){
    if (!this.suppressOutput) {
      let txt = '';
      txt += this.logTime ? new bgblk(Date().toString()) : '' ;
      txt += msg;
    }
  }
}

module.exports = function(options){
  if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'undefined'){
    console.log(`Creating Debugger with options ${JSON.stringify(options, null, 2)}`);
    return new Debugger(options);
  } else if (process.env.NODE_ENV === 'production'){
    let options = {};
    options.suppressOutput = true;
    console.log(`Creating Debugger with options ${JSON.stringify(options, null, 2)}`);
    return new Debugger(options);
  }
}