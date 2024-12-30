const assert = require('assert');
const { ArgsParser } = require('../../bin/args-parser');

describe('args-parser.js tests', function () {
  describe('parseOutput', function () {
    it('should parse a valid output', async function () {
      assert.equal(ArgsParser.parseOutput('WEBP'), 'webp');
    });
  });

  describe('parseInput', function () {
    it('should parse a valid input', async function () {
      assert.deepEqual(ArgsParser.parseInput('WEBP,PNG'), ['webp', 'png']);
    });
  });

  describe('parsePath', function () {
    it('should parse a valid path', async function () {
      ArgsParser.parsePath('./test/data/');
      ArgsParser.parsePath('./test/data/1_test.png');
    });
  });
});
