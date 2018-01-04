'use strict';

const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
  const cpus = os.cpus().length;
  console.log(`Clustering to ${cpus} CPUs`);
  for (let i = 0; i < cpus; i++) {
    cluster.fork();
  }

  // The code below will spawn a new worker should one
  // exit because of a crash
  cluster.on('exit', (worker, code) => {
    if (code !== 0 && !worker.exitedAfterDisconnect) {
      console.log('Worker crashed - starting new worker');
      cluster.fork();
    }
  });

} else {
  require('./app');
}