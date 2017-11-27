'use strict';

class contactInfo {
  constructor(){
    this.first_name = '';
    this.last_name = '';
    this.phone = '';
  }

  setName(name){
    this.first_name = name.first;
    this.last_name = name.last;
  }

  setPhoneNumber(number){
    this.phone = number;
  }

  showInfo(){
    console.log(`${this.last_name}, ${this.first_name}  phone: ${this.phone}`);
  }
}

module.exports = contactInfo;