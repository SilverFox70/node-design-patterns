# DI Container

## Overview
Another approach to injecting dependencies is to use a **DI Container**. The container itself is structured very much the way a service locator would be, but our modules do not need to accept a service locator object, meaning they are more reusable.
In fact, the dependencies can remain the same Factories as they are in the plain *Direct Injection* model.


## Example
This example is taken directly from *Node.js Design Patterns - Second Edition*.