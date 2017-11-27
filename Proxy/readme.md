# Proxy

## Overview
Also called a *surrogate*, a proxy is an object that controls access to another object which we call a *subject*. The proxy and the subject have identical interfaces so that the user has no knowledge or awareness of the proxy. A proxy can either simply pass operations to the subject, or it can intercept those operations and add behaviors to them. It should be noted that a proxy does not change the state of the subject or behavior of the subject itself. The drawback to creating this kind of proxy is that you must either intercept or delegate every function and property getter/setter of the subject.

Two common uses for proxies that most people have seen are *data validation* and *logging*. 

There is a variation on this pattern referred to as **object augmentation** which actually modifies the subject by replacing a function with a proxy version. While this is a very quick and easy way to implement a proxy because it avoids the need to delegate every function, care should be taken that it is okay to modify the original object. 

## Proxy Example
The example uses the following:
* **contact-info.js** : An object (our **subject**) for holding a person's name and phone number.
* **infoProxy.js** : A proxy which delegates the *showInfo* and *setName* functions to the subject while intercepting and formatting the phone number before passing the data along to the subject.
* **proxy-example.js** : A simple script for demonstrating the use of the proxy to interface with the subject.




