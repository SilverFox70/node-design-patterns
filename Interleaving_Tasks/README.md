# CPU Bound Tasks
Taken from _Node.js Design Patterns - Second Edition_.

## Overview
In order to keep IO channels open on a server when running cpu-bound tasks there are two basic strategies: interleave operations or spawn child processes. Interleaving has a high overhead cost, but can be useful still for relatively small tasks, and requires less complex code to implement. Forking cpu-bound tasks off into child-processes that run on workers has less overhead as long as you don't have to constantly spawn new workers. However, keeping a large number of child processes can consume a good deal of memory, so at scale this would have to be manage carefully.

## Trying it out
In **app.js** you will see:
``` javascript
//const SubsetSum = require('./subsetSum');
//const SubsetSum = require('./subsetSumDefer');
//const SubsetSum = require('./subsetSumFork');
```
To see how a cpu-bound process can block IO, uncomment the _subsetSum_ , then:
`node app.js`
While the server is listening try:
`curl -G http://localhost:8000/subsetSum --data-urlencode "data=[116, 119,101,101,-116,109,101,-105,-102,117,-115,-97,119,-116,-104,-105,115]" --data-urlencode "sum=0"`
Then, while that is processing, also do:
`curl -G http://localhost:8000`

You should find that you need to wait until the server is done processing the first request before you get a response from the second.

Now, try the other two options individually. The first uses interleaving to keep the server available for incoming requests while the second spawns child processes. It is worth noting that in no case do we need to change anything but our require statements to switch between different implementations of the process.