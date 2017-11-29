class CheckedOutState{
  constructor(book){
    this.book = book;
  }

  scan(){
    this.book.changeState('checked_in');
  }

}

module.exports = CheckedOutState;