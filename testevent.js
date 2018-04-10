
const EventEmitter = require('events');
//First letter of every world is uppercase its indicate its a class => EventEmitter is a class
const emitter = new EventEmitter(); //create an object

//Register a listener when event is raise
emitter.on('messageLogged', function(arg){ //  or prefer:- e, eventArg
  console.log('Listener called', arg);
});

//emit is use to raise an event
emitter.emit('messageLogged', { id: 1, url: 'http://' });
// Emit meaning : Making a noise, produce somthing - signalling when event is happend
