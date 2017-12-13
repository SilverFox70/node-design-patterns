# Plugin DI

## Overview
This is an example of using DI services as a plugin for the application. By passing in an instance of the app, the authService, and database we are able to extend the functionality of the application and provide a new _logout_ function which will invalidate the sign in token. All we need to do in the main application is require the _authsrv-plugin-logout_ to provide this extension.

A drawback to this pattern is that the main application has no way of knowing what the plugin needs, so we either have to provide everything, which isn't practical, or only pass in a subset of the core functionality. The flip side to this is that we can control what is exposed to the plugin and provide better information hiding.


## Example
This example is taken directly from *Node.js Design Patterns - Second Edition*.