console.log(process.execPath) // path nodejs
console.log(process.version) // version nodejs
console.log(process.platform) // platform, OS  win32
console.log(process.arch) // x32 or x64
console.log(process.title) // where was ran our script/app
console.log(process.pid) // id app
console.log(process.cwd()) // current path
console.log(process.argv) // launch parametrs // смотри файл REPL.js

// process.env возвращает объект, хранящий пользовательское окружение
// процесса, и практически незаменим при отладке
// console.log(process.env)

/**
 * Поскольку process наследует Event Emmiter у него есть событие on
 * Например если нам необходимо завершить выполнение процесса мы можем вызвать process.exit
 */
process.on('exit', code => {
    console.log('Exit: ' + code)
})
// Команда которая завершает процесс
process.exit(1) // 1 это параемтр ( по умолчанию 0 - процесс успешно выполнение)
