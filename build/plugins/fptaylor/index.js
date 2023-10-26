"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("@clhapi/types");
class FPTaylorPlugin extends types_1.AbstractPlugin {
    commandName() { return "fptaylor"; }
    processInput(input) {
        return `<(printf "Variables
  float64 x0 in [1.0, 2.0];
  float64 x1 in [1.0, 2.0];
  float64 x2 in [1.0, 2.0];
  float64 x in [1.001, 2.0];
  float64 y in [1.001, 2.0];
  float64 z in [0, 999];

Definitions
  p0 rnd64= (x0 + x1) - x2;
  p1 rnd64= (x1 + x2) - x0;
  p2 rnd64= (x2 + x0) - x1;
  t rnd64= x * y;


Expressions
  sum rnd64= (p0 + p1) + p2;
  nonlin1 rnd64= z / (z + 1);
  nonlin2 rnd64= (t - 1) / (t * t - 1);")`;
    }
    parseOutput(text, input) {
        const bounds = [...text.matchAll(/Bounds \(without rounding\): (.*)$/gm)];
        const abserror = [...text.matchAll(/Absolute error \(exact\): (.*)\(/gm)];
        const response = [];
        for (let i = 0; i < bounds.length; i++) {
            response.push({ bounds: bounds[i][1], absoluteError: abserror[i][1] });
        }
        return response;
    }
}
exports.default = FPTaylorPlugin;
