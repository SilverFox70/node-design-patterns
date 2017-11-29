'use strict';

const CheckedInState = require('./CheckedInState');
const CheckedOutState = require('./CheckedOutState');

class Book{
  constructor(options){
    this.author = options.author;
    this.title = options.title;
    this.currentState = null;
    this.states= {
      checked_in: new CheckedInState(this),
      checked_out: new CheckedOutState(this)
    }
    this.changeState('checked_in');
  }

  changeState(state){
    console.log(`Changing state to : ${state}`);
    this.currentState = this.states[state];
  }

  scan(){
    this.currentState.scan();
  }
}

module.exports = options => {
  return new Book(options);
}