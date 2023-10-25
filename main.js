const express = require('express');
const { exec } = require("child_process");
const { argv } = require('node:process');
const path = require('node:path');
const requireModule = require('require-module');


const app = express();
const port = Number(argv[2]);

var plugin;

try {
  plugin = requireModule(path.join(__dirname, "./build/plugins/", argv[3]));
} catch (err) {
  console.log(`Cannot load plugin ${argv[3]}`, err);
}


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
  console.log("got a post");
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const runCommand = (args) => {
  exec(`${argv[3]} ${args}`, (error, stdout, stderr) => {
    if (error) {
      return `error: ${error.message}`;
    }
    if (stderr) {
      return `stderr: ${stderr}`;
    }
    return `stdout: ${stdout}`;
  });
}
