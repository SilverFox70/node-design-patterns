# Factory Pattern

## Overview
This is a trivial example of the Factory pattern. Here we create a module that exposes a function to create a new instance of a logger without allowing direct access to the class constructor. In this way we can encapsulate the logger and create different versions of this object without exposing its inner workings to the user. We can now create custom versions of this object based upon our specific needs, increasing the reusability of our code.

*debuggerTest.js* demonstrates this by creating two instances: one which logs the timestamp for each output and one which does not. The function which gives access to the constructor also checks which NODE_ENV we are in and will automatically suppress logging when in **production**.

## Expanding
The debugger itself could be expanded to pipe logging to files and or the console depending on environment and options set by the user. Other functionality could include color coding different types of output messages.

## Details

### Debugger Class
``` javascript
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
```

The constructor accepts an `options` argument as an object. Here we handle cases where *options* does not contain fields our constructor cares about. We also immediately let the end user know whether output has been suppressed. The `log` function will log output to the console so long as output has not been suppressed. It will also prefix a time stamp if that option was set to `true`.

### Debugger Export
``` javascript
module.exports = function(options){
  if (process.env.NODE_ENV === 'development' || typeof process.env.NODE_ENV === 'undefined'){
    if (typeof options === 'undefined'){
      options = {};
    }
    return new Debugger(options);
  } else if (process.env.NODE_ENV === 'production'){
    let options = {};
    options.suppressOutput = true;
    return new Debugger(options);
  }
}
```

Rather than allowing end users to call the constructor directly, we only expose a function which accepts an `options` argument. The logic here determines what kind of Debugger object to create and returns that to the user. In the case of being in **development** or an undefined NODE_ENV, we check to see if any options were passed in. If not, we simply pass an empty *options* object to the constructor, otherwise we pass along the user's choices. 

However, when we are in **production** environment, we override the `options` argument to suppress output. Of course, in the real world, overriding options passed in like this would be rude and rather unexpected, so we would likely want to throw an error so that it is understood that `suppressedOutput: false` is not possible in production environments. 

To try this for yourself: `node debuggerTest`

