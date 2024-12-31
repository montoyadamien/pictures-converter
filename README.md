# pictures-converter
Node.js image converter (JPEG, PNG, WebP, AVIF, TIFF, GIF) CLI

![Validation workflow](https://github.com/montoyadamien/pictures-converter/actions/workflows/tests.yml/badge.svg?branch=main)
[![Coverage Status](https://coveralls.io/repos/github/montoyadamien/pictures-converter/badge.svg?branch=main)](https://coveralls.io/github/montoyadamien/pictures-converter?branch=main)
![NPM Version](https://img.shields.io/npm/v/pictures-converter?style=flat&logo=npm)

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
