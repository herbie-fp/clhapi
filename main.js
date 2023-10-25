const express = require('express');
const { exec } = require("child_process");
const { argv } = require('node:process');
const path = require('node:path');
const requireModule = require('require-module');
const bodyParser = require('body-parser');
const cors = require('cors');


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

const runCommand = (args, callback) => {
  exec(`${plugin.commandName()} ${args}`, (error, stdout, stderr) => {
    if (error) {
      callback(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      callback(`stderr: ${stderr}`);
      return;
    }
    callback(`${stdout}`);
  });
}

app.post('/', (req, res) => {
  const request = req.body;
  runCommand(plugin.processInput(req.body), (out) => res.send(plugin.parseOutput(out)));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

