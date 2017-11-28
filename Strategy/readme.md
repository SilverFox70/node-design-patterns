# Strategy

## Overview
This example is taken directly from *Node.js Design Patterns - Second Edition*. The **Strategy Pattern** is composed of a *Context* object and *Strategies*. The strategies allow the context object to adapt its behavior based on inputs, configurations, or preferences. The context handles the common logic of a set of behaviors, while the strategies handle the specifics as they may relate to the type of input.

## Example
* **config.js** is our *Context* object, handling the basic logistics of reading and writing to config files.
* **strategies.js** has the two specific implementations for the Context object, allowing us to work with either json or ini file formats.
* **configTest.js** demonstrates our strategy pattern at work

The Context object has logic for determining which kind of strategy to implement based upon the file extension. This is intended simply as a demonstration of the Strategy pattern. There is absolutely no error handling used, and other functionality, such as being able to read from one format and save to another, has not been implemented.