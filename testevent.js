
const EventEmitter = require('events');
//First letter of every world is uppercase its indicate its a class => EventEmitter is a class
// Emit meaning : Making a noise, produce somthing - signalling when event is happend

const Logger = require('./logger');
const logger = new Logger();

//Register a listener when event is raise
logger.on('messageLogged', (arg) => {
  console.log('Listener called', arg);
});

logger.log('message');
