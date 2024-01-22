# clhapi
command line -> http api

This tool must be run on a device with a bash shell.

The fptaylor tool requires the fptaylor executable and the fpbench executable to be added in path.
FPTaylor can be found [here](https://github.com/soarlab/FPTaylor) (use ocaml 4.07.1)
You can build the fpbench executable on the main FPBench branch [here](https://github.com/FPBench/FPBench).
Clone the repo and build using ```make distribute```

More detailed instructions are in the README under ``plugins/fptaylor``

```npm install```

```node main.js 3000 fptaylor```

hopefully that works, otherwise, good luck (just like dm me or something)!
