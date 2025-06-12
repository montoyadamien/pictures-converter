const sharp = require('sharp');

class PictureConverter {
  constructor(filePath, output, outFilePath) {
    this.filePath = filePath;
    this.output = output;
    this.outFilePath = outFilePath;
  }

  sharpOutputHandler(sharpData) {
    switch (this.output) {
      case 'gif':
        return sharpData.gif();
      case 'tiff':
        return sharpData.tiff();
      case 'avif':
        return sharpData.avif();
      case 'webp':
        return sharpData.webp();
      case 'png':
        return sharpData.png();
      case 'jpeg':
      case 'jpg':
        return sharpData.jpeg();
    }
  }

  async convertFile() {
    // apply rotate in case of iOS problem with exif
    await this.sharpOutputHandler(sharp(this.filePath).rotate()).toFile(
      this.outFilePath
    );
  }
}

exports.PictureConverter = PictureConverter;
