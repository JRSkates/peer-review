const repl = require('repl');
const getMiddle = require('./get-middle');

global.getMiddle = getMiddle;

repl.start('> ');