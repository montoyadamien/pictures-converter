const { FilesFinder } = require('./files-finder');
const { FileWriter } = require('./file-writer');
const { PictureConverter } = require('./picture-converter');

class CLIHandler {
  constructor(output, input, path, verbose) {
    this.output = output;
    this.input = input;
    this.path = path;
    this.verbose = verbose;
  }

  async convertPictures() {
    const files = new FilesFinder(
      this.input,
      this.path
    ).getFilesPathToConvert();

    await Promise.all(
      files.map(async (inputPath) => {
        await this.convertPicture(inputPath);
      })
    );
  }

  async convertPicture(inputPath) {
    const outFilePath = FileWriter.computeNewFilePath(inputPath, this.output);
    if (outFilePath === inputPath) {
      console.log(`Skipping ${inputPath}`);
      return;
    }

    if (this.verbose) {
      console.log(`Converting file ${inputPath} to ${this.output} format`);
    }

    try {
      await new PictureConverter(
        inputPath,
        this.output,
        outFilePath
      ).convertFile();

      if (this.verbose) {
        console.log(`Success to convert ${inputPath}`);
      }
    } catch (error) {
      console.error(`Failed to convert ${inputPath}: ${error.message}`);
    }
  }
}

exports.CLIHandler = CLIHandler;
