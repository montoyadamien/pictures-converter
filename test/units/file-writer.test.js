const assert = require('assert');
const { FileWriter } = require('../../lib/file-writer');

describe('file-writer.js tests', function () {
  describe('computeNewFilePath', function () {
    it('should return the new path of a file', function () {
      const res = FileWriter.computeNewFilePath('test/data/1_test.png', 'webp');
      assert.equal(res, 'test/data/1_test.webp');
    });
  });
});
