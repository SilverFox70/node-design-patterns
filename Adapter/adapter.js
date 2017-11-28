'use strict';

const cp = require('./composableUnits');
const controlAdapter = require('./controlAdapter');
const enemyInterceptor = cp.interceptor();
const enemeyCorvette = cp.corvette();
const ctrl = controlAdapter();

ctrl.attack(enemeyCorvette, .4);
ctrl.attack(enemyInterceptor, .2);

