const repl = require('repl');
const getMiddle = require('./src/get-middle');

global.getMiddle = getMiddle;

repl.start('> ');
