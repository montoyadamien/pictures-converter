const fs = require('fs');
const path = require('path');

class FilesFinder {
  constructor(input, basePath) {
    this.input = input;
    this.basePath = basePath;
  }

  _recursive(pathData, data = []) {
    if (fs.lstatSync(pathData).isDirectory()) {
      fs.readdirSync(pathData).forEach((file) => {
        return this._recursive(path.join(pathData, file), data);
      });
    } else {
      if (
        !this.input.length ||
        this.input.some((input) => pathData.toLowerCase().endsWith(`.${input}`))
      ) {
        data.push(pathData);
      }
    }

    return data;
  }

  getFilesPathToConvert() {
    return this._recursive(path.join('./', this.basePath));
  }
}

exports.FilesFinder = FilesFinder;
