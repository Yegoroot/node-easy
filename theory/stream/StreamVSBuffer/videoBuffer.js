const fs = require('fs')
const http = require('http')
const path = require('path')
const file = path.resolve(__dirname, 'video.mp4')

http.createServer((req, res) => {
    fs.readFile(file, (error, data) => {
        if (error) console.log('hmmm ', error)
        res.writeHeader(200, { 'Content-Type': 'video/mp4' })
        res.end
    })
}).listen(3000, () => console.log('stream - http://localhost:3000'))
