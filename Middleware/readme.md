# Middleware Pattern

## Overview
When folks think about *middleware* they often think of any components that sit between a backend and a frontend system, much like the *C* in *MVC*. But, in this case we are looking at a particular and specific **Middleware Pattern**. It is, in essence, a pipeline of components that are linked together, most often for the purpose of tranforming data back and forth between layers of an application - hence the term *middleware*. Each component in the pipeline processes the data and then passes the modified data to the next component, in sequential order.

Building a *Middleware* object requires providing a way to add components to this pipeline. You could imagine the middleware being something like an array of components, each with their own behaviors, and then logic of the middleware ensure that data or other objects given to it are passed through each component in the array.

## Example
The current example is taken directly from *Node.js Design Patterns - Second Edition* and uses middleware wrapped around the 0MQ package to serialize and deserialize messages sent over a socket. 

To test you will need to run both:
`node server`
and
`node client`


