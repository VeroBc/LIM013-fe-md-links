#!/usr/bin/env node

const path = require('path');
const process = require('process');
const [,,  ...args] = process.argv;
const userPath = `${args[1]}`;
const fs = require('fs'); 
const mdlinks = require('../src/mdlinks.js');

const verifiedPath = (pathString) => path.resolve(pathString);

const { program } = require('commander');
program
    .version('0.0.1');

program
    .command('links <path>')
    .description('Links valitation of MD Files')
    .option('-v, --validate', 'Valitation of Links')
    .option('-s, --stats' , 'Stats of Links')
    .action((path, options) => {
        const folderPath = verifiedPath(userPath);
        if (fs.existsSync(folderPath) === true) {
            mdlinks.mdLinks(folderPath, options).then(response => 
                console.log(response.join('\n')));
        } else
        console.log('Enter a valid filename or folder name');

    });

program.parse(process.argv);



