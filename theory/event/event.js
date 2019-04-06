const EventEmitter = require('events')

// Create class
class MyEmitter extends EventEmitter {}

// init object
const myEmmiter = new MyEmitter()

// Event listener
myEmmiter.on('event', () => console.log('Event Fired!'))

// init event
myEmmiter.emit('event')
myEmmiter.emit('event')
myEmmiter.emit('event')
myEmmiter.emit('event')
