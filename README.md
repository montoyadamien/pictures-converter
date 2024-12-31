# pictures-converter
Node.js image converter (JPEG, PNG, WebP, AVIF, TIFF, GIF) CLI

[![Validation workflow](https://github.com/montoyadamien/pictures-converter/actions/workflows/tests.yml/badge.svg?branch=main)](https://github.com/montoyadamien/pictures-converter/actions)
[![Coveralls](https://img.shields.io/coverallsCoverage/github/montoyadamien/pictures-converter?branch=main&logo=coveralls&logoColor=rgb(149%2C%20157%2C%20165))](https://coveralls.io/github/montoyadamien/pictures-converter?branch=main)
[![NPM Version](https://img.shields.io/npm/v/pictures-converter?style=flat&logo=npm&logoColor=rgb(149%2C%20157%2C%20165))](https://www.npmjs.com/package/pictures-converter)
[![NPM Downloads](https://img.shields.io/npm/dw/pictures-converter?logo=npm&color=%23007ec6&logoColor=rgb(149%2C%20157%2C%20165))](https://www.npmjs.com/package/pictures-converter)
[![NPM License](https://img.shields.io/npm/l/pictures-converter?logoColor=rgb(149%2C%20157%2C%20165))](https://github.com/montoyadamien/pictures-converter/blob/main/LICENSE)

## Installation:
This is a Node.js module, that can be run with the command line. First ensure you have npm installed, and then install as follows:
```bash
npm install -g pictures-converter
```
## Usage:
```text
pictures-converter -o webp [options]

Options:
  --input, -i       Input pictures extention to convert in case of directory path   [string][default="jpeg,jpg,png,webp,avif,tiff,gif"]
  --output, -o      Output picture extention                                        [string]
  --path, -p        Path to the input file / directory                              [string][default="./"]
  --verbose, -v     Increase verbosity                                              [boolean][default=false]
```

## Examples:
### Convert a picture into a WebP one
```text
pictures-converter -p mypicture.png -o webp
```
### Convert every pictures in a directory into PNG ones
```text
pictures-converter -p pictures/ -o png
```
### Convert every JPEG or WEBP pictures in a directory into PNG ones
```text
pictures-converter -p pictures/ -i jpeg,jpg,webp -o png
```
