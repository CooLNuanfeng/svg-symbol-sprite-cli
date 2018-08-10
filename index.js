#! /usr/bin/env node
var program = require('commander');
var pkg = require('./package.json');
var create = require('./lib/create.js');

program.on('--help', function(){
    console.log('  Examples:');
    console.log('');
    console.log('    $ svg --help');
    console.log('    $ svg -e src -o dist');
    console.log('    $ svg -l email.svg,user.svg -o dist');
    console.log('');
});

program
  .version(pkg.version)
  .option('-e, --entry <dir>', 'entry directory path')
  .option('-l, --list <items>', 'a list of svg files as source',list)
  .option('-n, --rename [name]', 'output svg name, default sprite.svg')
  .option('-o, --output [dir]', 'output directory path, default dist')
  .parse(process.argv)


if(!process.argv.slice(2).length) {
    program.outputHelp();
}

if(program.entry){
    create(program.entry,program.output,program.rename);
    return;
}
if(program.list){
    create(program.list,program.output,program.rename);
    return;
}


function list(val) {
    return val.split(',');
}
