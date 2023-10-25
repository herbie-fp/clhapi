abstract class AbstractPlugin {
  commandName: string;
  abstract processInput (input: Object): string; // turns input json into command line arguments
  abstract parseOutput (text: string): Object; // turns stdout into a response object
}

export {AbstractPlugin};
