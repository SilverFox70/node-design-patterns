'use strict';

const jot = require('json-over-tcp');
const server = jot.createServer({port: 5000});
server.on('connection', socket => {
  socket.on('data', data => {
    console.log(`Client data: ${JSON.stringify(data, null, 2)}`);
  });
});

server.listen(5000, () => console.log('Starte server on port 5000'));

