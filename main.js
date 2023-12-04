const express = require('express');
//const { exec } = require("child_process");
const { argv } = require('node:process');
const path = require('node:path');
const requireModule = require('require-module');
const bodyParser = require('body-parser');
const cors = require('cors');
const util = require('util');
const exec = util.promisify(require('child_process').exec);


const app = express();
const port = Number(argv[2]);

app.use(cors());

var plugin;

try {
  plugin = Object.create(requireModule(path.join(__dirname, "./build/plugins/", argv[3]))?.default.prototype);
} catch (err) {
  console.log(`Cannot load plugin ${argv[3]}`, err);
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(bodyParser.json());

const runCommand = async (args, callback) => {
  try {
    const { stdout, stderr } = await exec(
      //`fptaylor <(printf "Variables\n  float64 x0 in [1.0, 2.0];\n  float64 x1 in [1.0, 2.0];\n  float64 x2 in [1.0, 2.0];\n  float64 x in [1.001, 2.0];\n  float64 y in [1.001, 2.0];\n  float64 z in [0, 999];\n\nDefinitions\n  p0 rnd64= (x0 + x1) - x2;\n  p1 rnd64= (x1 + x2) - x0;\n  p2 rnd64= (x2 + x0) - x1;\n  t rnd64= x * y;\n\n\nExpressions\n  sum rnd64= (p0 + p1) + p2;\n  nonlin1 rnd64= z / (z + 1);\n  nonlin2 rnd64= (t - 1) / (t * t - 1);\n  ")`, {shell: '/bin/bash'}, (error, stdout, stderr) => {
      `${plugin.commandName()} ${args}`, {shell: '/bin/bash'});
    return stdout;
  } catch (e) {
    console.error(e);
  }
}

app.post('/', (req, res) => {
  const request = req.body;
  plugin.processInput(req.body).then(value => runCommand(value)).then(out => plugin.parseOutput(out, req.body)).then(ret => res.send(ret));
  //runCommand(plugin.processInput(req.body), (out) => res.send(plugin.parseOutput(out, req.body)));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

