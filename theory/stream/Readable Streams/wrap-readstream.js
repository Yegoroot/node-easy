const srteam = require('stream')
const fs = require('fs')
const path = require('path')

class ReadStream extends srteam.Readable {
    // указывать файл опционально
    constructor(file, options) {
        super(options)
        this.rr = fs.createReadStream(file) // создаём поток
    }

    _read(size) {
        // на считывании ловим ломтики и видоизменяем
        this.rr.on('data', chunk => {
            this.push(chunk.toString().toUpperCase()) // push отправляет в поток
        })

        this.rr.on('end', () => {
            this.push(null)
        })
    }
}

const rs = new ReadStream(path.join(__dirname, 'file.txt'))

rs.on('data', chunk => {
    // catch chunks on reading
    console.log(chunk.toString())
})

rs.on('end', () => {
    console.log('--End my Stream--')
})
