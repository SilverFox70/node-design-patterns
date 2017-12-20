# Batching and Caching

## Overview
Batching is a strategy whereby we check to see if we already have a certain operation running each time we receive a request to perform a task. If that task is already running, we attach the new request to the already existing, in process one. When that task completes, all requests for that given task receive their results. 

Caching holds on to the results of any given operation for a period of time so that if an incoming request occurs before the expiration of the cache, we can simply respond with the value of that operation that was previously calculated. While this give a performance boost in repsonse times under heavy load, a drawback is that the cached value my not reflect the true, current state of the system. Care should be taken to note whether or not this is an acceptable trade-off for the performance increase.

The working example here (taken from *Node.js Design Patterns - Second Edition*) uses promises in its batching an caching scheme. To try this out follow these steps:
* run `node populate_db`
* start the server `node app`
* perform the load test `node loadTest`

The **totalSalesPromise.js** script is a wrapper (proxy) for the **totalSales.js** script which implements the batching and caching via promises.

## How it Works
``` javascript
module.exports = function totalSalesPromises(item) {
  if (cache[item]) {
    return cache[item];
  }

  cache[item] = totalSales(item)
    .then(res => {
      setTimeout( () => {delete cache[item]}, 30 * 1000); // 30 seconds expiry
      return res;
    })
    .catch(err => {
      delete cache[item];
      throw err;
    });
  return cache[item];
};
```
If an item is already cached, we simply return it. New items get added to the cache, and when the promise resolves (when totalSales return with a value) we return the result and simultaneously set the cache item to expire in 30 seconds. If we encounter an error, we delete the cache item and throw the error so that any other listeners attached to that same promise can receive the error as well. At the end, we return the cached promise that was just created.