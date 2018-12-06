const http = require('http')

http.createServer((request, response)=>{
    response.end('Hello Node.js')
})
.listen(7777, '127.0.0.1', ()=> console.log('Сервер начал прослушивание запросов на порту 3000'))