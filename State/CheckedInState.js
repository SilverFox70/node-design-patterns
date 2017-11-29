'use strict';

class CheckedInState{
  constructor(book){
    this.book = book;
  }

  scan(){
    this.book.changeState('checked_out');
  }

}

module.exports = CheckedInState;