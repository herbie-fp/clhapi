abstract class AbstractPlugin {
  abstract processInput (input: Object): string; // turns input json into command line arguments
  abstract parseOutput (text: string, input: Object): Object; // turns stdout into a response object
  abstract commandName (): string; // getter function for name because i'm bad at code
}

export {AbstractPlugin};
