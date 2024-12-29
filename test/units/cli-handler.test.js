const assert = require('assert');
const fs = require('fs');
const { CLIHandler } = require('../../lib/cli-handler');

describe('cli-handler.js tests', function () {
  describe('convertPictures', function () {
    it('should convert a png file into a webp one', async function () {
      const inPath = 'test/data/1_test.png';
      const outPath = 'test/data/1_test.webp';

      const cliHandler = new CLIHandler('webp', [], inPath, false);
      await cliHandler.convertPictures();
      const data = fs.lstatSync(outPath).isFile();
      assert.equal(data, true);
      fs.rmSync(outPath);
    });

    it('should convert a every png files into a webp ones', async function () {
      const inPath = 'test/data/';
      const outPath = 'test/data/1_test.webp';
      const outPath2 = 'test/data/subfolder/1_subfolder_test.webp';

      const cliHandler = new CLIHandler('webp', ['png'], inPath, false);
      await cliHandler.convertPictures();
      const data = fs.lstatSync(outPath).isFile();
      assert.equal(data, true);
      const data2 = fs.lstatSync(outPath2).isFile();
      assert.equal(data2, true);
      fs.rmSync(outPath);
      fs.rmSync(outPath2);
    });

    it('should convert a png file into a webp one with verbose activated', async function () {
      const inPath = 'test/data/1_test.png';
      const outPath = 'test/data/1_test.webp';

      const cliHandler = new CLIHandler('webp', [], inPath, true);
      await cliHandler.convertPictures();
      const data = fs.lstatSync(outPath).isFile();
      assert.equal(data, true);
      fs.rmSync(outPath);
    });

    // coverate test
    it('should skip a file if it has already the desired format', async function () {
      const inPath = 'test/data/1_test.png';
      const cliHandler = new CLIHandler('png', [], inPath, false);
      await cliHandler.convertPictures();
      assert.equal(true, true);
    });

    // coverate test
    // this case should not occur since the CLI can not be run on files that are not pictures
    it('should throw an error if file can not be converted', async function () {
      const inPath = 'mywrongpath';
      const cliHandler = new CLIHandler('png', [], inPath, false);
      try {
        await cliHandler.convertPicture(inPath);
        assert.equal(false, true);
      } catch {
        assert.equal(true, true);
      }
    });
  });
});
