/* eslint mocha/no-async-describe: 0 */
/* eslint mocha/no-setup-in-describe: 0 */

const assert = require('assert');
const fs = require('fs');
const { PictureConverter } = require('../../lib/picture-converter');

describe('picture-converter.js tests', function () {
  describe('convertFile', async function () {
    await Promise.all(
      [
        {
          path: 'test/data/1_test',
          in: 'png',
          out: 'webp',
        },
        {
          path: 'test/data/2_test',
          in: 'webp',
          out: 'png',
        },
        {
          path: 'test/data/3_test',
          in: 'gif',
          out: 'jpg',
        },
        {
          path: 'test/data/4_test',
          in: 'jpg',
          out: 'gif',
        },
        {
          path: 'test/data/5_test',
          in: 'avif',
          out: 'tiff',
        },
        {
          path: 'test/data/6_test',
          in: 'tiff',
          out: 'avif',
        },
        {
          path: 'test/data/7_test',
          in: 'JPG',
          out: 'avif',
        },
      ].map(async (testData) => {
        it(`should convert a ${testData.in} file into a ${testData.out} one`, async function () {
          const inPath = `${testData.path}.${testData.in}`;
          const outPath = `${testData.path}.${testData.out}`;

          const converter = new PictureConverter(inPath, testData.out, outPath);
          await converter.convertFile();

          assert.equal(fs.lstatSync(outPath).isFile(), true);
          fs.rmSync(outPath);
        });
      })
    );
  });
});
