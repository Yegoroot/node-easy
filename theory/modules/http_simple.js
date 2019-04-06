const http = require('http')

// Create server object
http.createServer((req, res) => {
    // Write response
    res.write('Hi everyone')
    res.end()
}).listen(5000, () => console.log('Server running on http://localhost:5000'))
