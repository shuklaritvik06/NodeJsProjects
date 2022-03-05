// Event Emitter

const events = require('events');
const myEventEmitter = new events.EventEmitter();
myEventEmitter.on('myevent',function(arguement)=>{
  console.log(arguement);
});
myEventEmitter.emit('myevent','HELLO');
