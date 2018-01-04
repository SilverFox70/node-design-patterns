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

  // The code below allows us to restart workers with zero downtime
  process.on('SIGUSR2', () => {
    console.log('Restarting workers');
    const workers = Object.keys(cluster.workers);

    function restartWorker(i) {
      if (i >= workers.length) return;
      const worker = cluster.workers[workers[i]];
      console.log(`Stopping worker: ${worker.process.pid}`);
      worker.disconnect();

      worker.on('exit', () => {
        if (!worker.exitedAfterDisconnect) return;
        const newWorker = cluster.fork();
        newWorker.on('listening', () => {
          restartWorker(i + 1);
        });
      });
    }
    restartWorker(0);
  });
  
} else {
  require('./app');
}