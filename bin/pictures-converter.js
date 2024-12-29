#!/usr/bin/env node

const { program } = require('commander');
const { CLIHandler } = require('../lib/cli-handler');
const { ArgsParser } = require('./args-parser');
const {
  availableExtentions,
} = require('../lib/constants/available-extentions');

program
  .description('Convert pictures in another format')
  .requiredOption('-o, --output <extention>', 'Output file extention')
  .option(
    '-i, --input <extention>',
    'Input pictures extention to convert in case of directory path, comma separated',
    availableExtentions
  )
  .option('-p, --path <path>', 'Path to the input file / directory', './')
  .option('-v, --verbose', 'Increase verbosity', false);

program.parse();

const opts = program.opts();
var { output, input, path } = opts;

output = ArgsParser.parseOutput(output);
input = ArgsParser.parseInput(input);
ArgsParser.parsePath(path);

new CLIHandler(output, input, opts.path, opts.verbose).convertPictures();
