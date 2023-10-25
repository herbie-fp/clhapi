"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("@clapi/types");
class FPTaylorPlugin extends types_1.AbstractPlugin {
    constructor() {
        super(...arguments);
        this.commandName = "fptaylor";
    }
    processInput(input) {
        return "Hello World";
    }
    parseOutput(text) {
        return { msg: "Hello World" };
    }
}
exports.default = FPTaylorPlugin;
