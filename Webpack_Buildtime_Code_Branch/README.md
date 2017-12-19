# Webpack Buildtime Code Branching

## Overview
By using the **DefinePlugin** feature of webpack we can replace instances of code or modules with custom code at build time, and the *Uglify* pipeline to ensure that "dead code" doesn't end up in the build. Webpack will need to be installed locally for this example to work.

This is taken directly from *Node.js Design Patterns - Second Edition*.