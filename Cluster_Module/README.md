# Cluster Module
Taken from _Node.js Design Patterns - Second Edition_

## Overview
The examples here show how to spawn several instances of the same app or worker for load balancing and distribution. Methods such as this allow you scale your Node applications to handle high load while making use of a better portion of a systems underlying processing power. It is also possible to make an application more resilient to failure in the case of errors or crashes, since a crashed process can be replaced with a new instance. The **zeroDownCluster** example also show how an application that is distributed and running in a cluster can be updated while live, in real time, without the loss of service.

## Note
Because state is not shared between instances, this example is unusable in any situation where state matters unless your application _always_ pass state information back and forth between the user and the worker.