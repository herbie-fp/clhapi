# FPTaylor CLHAPI setup guide

## Requirements

1. [FPTaylor executable](https://github.com/soarlab/FPTaylor) (OCaml versions are finnicky! Use OCaml 4.07.1 for best results)
2. [FPBench executable](https://github.com/FPBench/FPBench) (Make the executable using the ``make distribute`` target)
3. Node v18.17.0
4. npm v10.2.1

## Instructions

1. Make sure all executables are in the PATH.
2. Navigate to the main clhapi directory.
3. ``npm install``
4. ``node main.js 3000 fptaylor``
5. Open ``localhost:3000`` in a web browser.
6. Open the console from the page.
7. Try the example query from ``examples.txt``.
