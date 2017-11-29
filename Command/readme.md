# Command

## Overview
The **Command Pattern** provides a way to encapsulate commands so that we do not have to invoke them directly. By creating this extra layer between client or system requests and the invocation of the commands, we can do things like:
* schedule tasks to be run at a later time
* keep a log of all actions actions
* undo or rollback previously executed commands
* batch several commands together (for example, to preserve atomicity with database operations)
* transform the commands themselves to avoid duplicating commands, or to join or split apart operations.

## Example
The example provided here is from *Node.js Design patterns - Second Edition*

To test, run both `node server` and `node command`
