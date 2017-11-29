# Adapter

## Overview
Whereas a **Proxy** provides us access to an object by using the same interface, an Adapter provides access to an object's functionality by creating a new interface. Adapter methods may be a composition of one or more methods of the subject. Adapters make it possible for an object to be used by components that need or expect an interface different from the one provided by the object.

Often over time an API will change format, breaking your code, or perhaps you need to be able to store items in two different databases. Adapters make it possible to make the necessary changes without having to re-write all of your code. A well written adapter would make it possible for end users to select between using Neo4j, Redis, MongoDB, or Firebase without needing to rewrite all of your put and get operations.

## Example
The very simple adapter here allows us to use a single command 'attack' for all of our enemy ship instances. The adapter is responsible for then calling the correct method based on the attack method available to the object. Of course, if you were actually creating a game, using an adapter such as this is not likely the best way to handle control, but nevertheless it demonstrates how adapters can make it possible to interface with objects that have different underlying behaviors from each other.

To run: `node controlAdapter`
