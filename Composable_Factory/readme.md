# Composable Factory

## Overview
Composition is a powerful tool which allows us to build objects that can be **composed** of several different behaviors. It is similar to inheritance in a way, because behaviors and properties from different sources may be incorporated into a single object, but it avoids the need for complex classes and hierarchies. The *Entity/Component* pattern found in Unity is an example of this compositional pattern.

Composable Factory Functions allow us to add whatever specific behaviors or functions we need to an underlying **class** or object without the need for that class to be complicated or cumbersome, or to inherit from a classical structure.

Suppose that we are creating a space war game and we want to define several types of units.

* Unit: base object that has a label, hit points, and a position
* Mover: an unit that can move
* Beamer: a unit that can fire lasers
* Launcher: a unit that can fire missiles.

From these base properties we then want to create more and different kinds of units by defining what properties they have. 

* Scout: a unit that can move, perhaps over long distances and with great speed
* Interceptor: a unit that can move and fire lasers
* Corvette: a unit that can move, fire lasers, and launch missiles
* Defender: a stationary type unit that can fire lasers

Of course we could define more behaviors and create an even greater number of different kinds of units for our game, and we want to make sure that we have complete freedom to combine behaviors in any way we want. In order to do this we are going to use the [stampit](https://github.com/stampit-org/stampit) module.