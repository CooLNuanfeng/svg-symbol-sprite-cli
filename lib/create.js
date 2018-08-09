const path = require('path');
const util = require('util');
const fs = require('fs');
const SVGSpriter = require('svg-sprite');
const mkdirp = require('mkdirp');
const chalk = require('chalk');

var sprite;

module.exports = function(entry,output,name){
    if(Boolean(true) === output || output === undefined){
        output = 'dist'
    }

    if(Boolean(true) === name || name === undefined){
        name = 'sprite'
    }

    // console.log(path.resolve(process.cwd(),entry));
    // console.log(path.resolve(process.cwd(),output));
    spriter = new SVGSpriter({
        dest: path.resolve(process.cwd(),output),
        mode: {
            symbol: true
        }
    });
    var files = fs.readdirSync(path.resolve(process.cwd(),entry));
    files.forEach(function(item,index){
        if(path.extname(item)==='.svg'){
            console.log(chalk.green(path.join(entry,item)));
            spriter.add(path.join(entry,item),item,fs.readFileSync(path.join(entry,item), { encoding: 'utf-8' }));
        }
    });

    spriter.compile(function (error, result, data) {
        mkdirp.sync(path.resolve(process.cwd(),output));
        var resultBitmap = '';
        for (var type in result.symbol) {
            resultBitmap+=result.symbol[type].contents
        }
        fs.writeFileSync(path.resolve(process.cwd(),output,name+'.svg'), resultBitmap);
    });

    console.log('');
    console.log(chalk.green('Success！'));
}
