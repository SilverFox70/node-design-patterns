'use strict';

const infoProxy = (subject) => {

  return {
    // intercept the number and format it before passing to subject
    setPhoneNumber: (number) => {
      let areaCode = number.substr(0, 3);
      let first_three = number.substr(3, 3);
      let last_four = number.substr(6, 4);
      subject.setPhoneNumber(`(${areaCode}) ${first_three}-${last_four}`);
    },

    showInfo: () => {
      subject.showInfo.apply(subject, arguments);
    },
    
    // simply pass along the name to the subject
    setName: (name) => {
      console.log(name);
      subject.setName.call(subject, name);
    }
  }
}

module.exports = infoProxy;
