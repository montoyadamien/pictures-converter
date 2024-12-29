class FileWriter {
  static computeNewFilePath(inputPath, output) {
    const index = inputPath.lastIndexOf('.');

    return `${inputPath.substring(0, index)}.${output}`;
  }
}

exports.FileWriter = FileWriter;
