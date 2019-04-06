const EventEmitter = require('events')
const uuid = require('uuid')

// Create class
class Logger extends EventEmitter {
    log(msg) {
        // Call event
        this.emit('message', { id: uuid.v4(), msg })
    }
}

module.exports = Logger
