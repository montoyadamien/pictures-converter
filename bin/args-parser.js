const {
  availableExtentions,
} = require('../lib/constants/available-extentions');

class ArgsParser {
  constructor() {}

  /* istanbul ignore next */
  static displayAndExit(message) {
    console.log(message);
    process.exit(1);
  }

  static parseOutput(output) {
    const parsedOutput = output.toLowerCase();
    if (!availableExtentions.includes(parsedOutput)) {
      /* istanbul ignore next */
      this.displayAndExit(`output must be one of: [${availableExtentions}]`);
    }

    return parsedOutput;
  }

  static parseInput(input) {
    let parsedInput = input;
    if (!Array.isArray(input)) {
      parsedInput = input.split(',');
    }
    parsedInput = parsedInput.map((i) => i.toLowerCase());
    if (!parsedInput.every((i) => availableExtentions.includes(i))) {
      /* istanbul ignore next */
      this.displayAndExit(`input must be one of: [${availableExtentions}]`);
    }

    return parsedInput;
  }

  static parsePath(path) {
    if (path) {
      const res = /\.([0-9a-z]+)$/i.exec(path);
      if (res && !availableExtentions.includes(res[1])) {
        /* istanbul ignore next */
        this.displayAndExit(
          `path must point to a directory or a picture with the following extention: [${availableExtentions}]`
        );
      }
    }
  }
}

exports.ArgsParser = ArgsParser;
