const {
  availableExtentions,
} = require('../lib/constants/available-extentions');

class ArgsParser {
  constructor() {}

  static displayAndExit(message) {
    console.log(message);
    process.exit(1);
  }

  static parseOutput(output) {
    const parsedOutput = output.toLowerCase();
    if (!availableExtentions.includes(parsedOutput)) {
      this.displayAndExit(`output must be one of: [${availableExtentions}]`);
    }

    return parsedOutput;
  }

  static parseInput(input) {
    let parsedInput = input;
    if (!Array.isArray(input)) {
      parsedInput = input.split(',').map((i) => i.toLowerCase());
    }
    if (!parsedInput.every((i) => availableExtentions.includes(i))) {
      this.displayAndExit(`input must be one of: [${availableExtentions}]`);
    }

    return input;
  }

  static parsePath(path) {
    if (path) {
      const res = /\.([0-9a-z]+)$/i.exec(path);
      if (res) {
        const extention = res[1];
        if (!availableExtentions.includes(extention)) {
          this.displayAndExit(
            `path must point to a directory or a picture with the following extention: [${availableExtentions}]`
          );
        }
      } else {
        this.displayAndExit(
          `path must point to a directory or a picture with the following extention: [${availableExtentions}]`
        );
      }
    }
  }
}

exports.ArgsParser = ArgsParser;
