# State

## Overview
The **State Pattern** is very similar to the Strategy Pattern. We still have a *Context* which can employ different *strategies*, but in the State Pattern we adopt which strategy to use based upon the **state** of the context. Of course, this pattern is only useful when the state of the context is dynamic and can change over the course of time.

## Book Example
This a very simple example of using the state pattern to track whether a book is checked on or out of a library. The function that is exposed for the book is `scan()`. Scanning the book when it is checked in will changed its state to being checked out, and vice versa. Obviously there are many other approaches for handling something so simple, but this clearly demonstrates the most basic aspect of this pattern.

To try this out: `node scanner.js`

## Socket Example
This is a more involved example of using the State Pattern and it is taken directly from *Node.js Design Patterns - Second Edition*. Here we created a 'failsafesocket' that will hold data in a queue should the serve connection ever go down, and then once connection has been reset, send all of the queued data to the server, ensuring that no data is lost when a connection goes down. Please note that this is not a full implemented version of such a server and does not represent a 100% reliable solution.

To see this example in action you will need to run both the client and server:
`node client`
`node server`

Try stopping the server for several seconds and then restarting to see the queue in action.

