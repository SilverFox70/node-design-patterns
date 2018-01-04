const http = require('http');
//const SubsetSum = require('./subsetSum');
//const SubsetSum = require('./subsetSumDefer');
const SubsetSum = require('./subsetSumFork');

http.createServer((req, res) => {
  const url = require('url').parse(req.url, true);
  if (url.pathname === '/subsetSum'){
    const data = JSON.parse(url.query.data);
    res.writeHead(200);
    const subsetSum = new SubsetSum(url.query.sum, data);
    subsetSum.on('match', match => {
      res.write('Match: ' + JSON.stringify(match, null, 2) + '\n');
    });
    subsetSum.on('end', () => {
      res.end('\nCompleted \n');
    });
    subsetSum.start();
  } else {
    res.writeHead(200);
    res.end('I\'m alive! \n');
  }
}).listen(8000, () => console.log('Server started: listening on port 8000.'));