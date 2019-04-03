const fs = require('fs')
const zlib = require('zlib')
const file = 'test.txt'

fs.createReadStream(file)
    .pipe(zlib.createGzip())
    // У потока чтения есть событие 'end'
    .on('end', () => {
        console.log('Read end')
    })
    .pipe(fs.createWriteStream(file + '.gz'))
    .on('close', () => {
        console.log('Closed')
    })

/**
 * потоками мы решили 2 проблемы как миниум
 * 1 код стал яснее
 * 2 мы не забираем все память файла под буфер
 * // передаем частями
 */
