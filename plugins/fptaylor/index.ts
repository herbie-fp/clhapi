import {AbstractPlugin} from '@clapi/types';

class FPTaylorPlugin extends AbstractPlugin {
  commandName: string = "fptaylor";
  processInput (input: Object): string {
    return "Hello World";
  }
  parseOutput (text: string): Object {
    return {msg: "Hello World"};
  }
}

export default FPTaylorPlugin;
