const assert = require('assert');
const { FilesFinder } = require('../../lib/files-finder');

describe('files-finder.js tests', function () {
  describe('getFilesPathToConvert', function () {
    it('should fail if path does not exists', function () {
      const finder = new FilesFinder([], './mywrongpath');
      try {
        finder.getFilesPathToConvert();
        assert.equal(false, true);
      } catch {
        assert.equal(true, true);
      }
    });

    it('should return a path for a file', function () {
      const finder = new FilesFinder([], './test/data/1_test.png');
      const res = finder.getFilesPathToConvert();
      assert.equal(res[0], 'test/data/1_test.png');
    });

    it('should return multiple path for a directory', function () {
      const finder = new FilesFinder([], './test/data/');
      const res = finder.getFilesPathToConvert();
      assert.equal(res[0], 'test/data/1_test.png');
      assert.equal(res[5], 'test/data/6_test.tiff');
      assert.equal(res[6], 'test/data/subfolder/1_subfolder_test.png');
      assert.equal(res.length, 7);
    });

    it('should return a path for a directory and some extentions specified', function () {
      const finder = new FilesFinder(['webp', 'gif'], './test/data/');
      const res = finder.getFilesPathToConvert();
      assert.equal(res[0], 'test/data/2_test.webp');
      assert.equal(res[1], 'test/data/3_test.gif');
      assert.equal(res.length, 2);
    });
  });
});
