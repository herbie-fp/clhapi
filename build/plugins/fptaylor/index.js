"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("@clhapi/types");
class FPTaylorPlugin extends types_1.AbstractPlugin {
    commandName() { return "fptaylor"; }
    processInput(input) {
        return "--help";
    }
    parseOutput(text) {
        return { msg: text };
    }
}
exports.default = FPTaylorPlugin;
