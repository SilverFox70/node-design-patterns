# Direct Injection

## Overview
In Node, wiring modules together is very straight forward using the `require('<some-resource');` pattern. One thing to consider when doing this with stateful instances is that it creates tight coupling. Sometimes this is not an issue for smaller applications, but it does mean that modules that require other stateful modules cannot be reused. If we consider a chain of dependencies between an AuthService, an AuthController, and a database it is easy to see that, because they become tightly bound through stateful references, the components are not reusable and become very specific to the particular application.

The answer is to use *Direct Injection* so that we move our more specific code higher up in the application chain. Essentially create modules which are factories for the service they provide. This will allow our top level scripts to create the instances instead of importing stateful components straight through the **require** method.

## Example
This example is taken directly from *Node.js Design Patterns - Second Edition*.