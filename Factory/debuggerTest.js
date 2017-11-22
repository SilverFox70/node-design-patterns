'use strict';

const Debugger = require('./debugger');

// Create Debugger without any input options
const debug = Debugger();
debug.log('This is a test of my debug logger');

// Create Debugger with options
let options = {logTime: true};
const logger = Debugger(options);

logger.log('This is a log with time output');
