
const EventEmitter = require('events');
//First letter of every world is uppercase its indicate its a class => EventEmitter is a class
const emitter = new EventEmitter(); //create an object

//Register a listener when event is raise
emitter.on('messageLogged', function(){
  console.log('Listener called');
});

//emit is use to raise an event
emitter.emit('messageLogged');

// Emit meaning : Making a noise, produce somthing - signalling when event is happend
