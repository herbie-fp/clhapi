import {AbstractPlugin} from '@clapi/types';

class FPTaylorPlugin extends AbstractPlugin {
  commandName (): string { return "fptaylor" }
  processInput (input: Object): string {
    return "--help";
  }
  parseOutput (text: string): Object {
    return {msg: text};
  }
}

export default FPTaylorPlugin;
