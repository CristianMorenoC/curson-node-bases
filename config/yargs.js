
const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'es la lista'
    })
    .option('h',{
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'es el limite de numero por el que se va a multiplicar la base'
    })
    .check( ( argv, options )=>{
        if( isNaN( argv.b ) ){
            throw 'la base tiene que ser un numero'
        }
        return true;
    })
    .argv;


console.clear();

console.log(argv);


module.exports = argv;