node --trace_gc .\theory\StreamBuffer\videoStream.js
node --trace_gc .\theory\StreamBuffer\videoBuffer.js

Буфер это когда мы пытаемся загрузить весь файл и отправить на размере его есть ограничение (не более 1гб)

потоки же позволяют передавать информацию порциями через канал, тунель, связь
.pipe(chunk) // pipe - труба, chunk - ломоть, часть, порция, кусочек