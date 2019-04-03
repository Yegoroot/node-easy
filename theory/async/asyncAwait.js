// https://habr.com/ru/company/ruvds/blog/424555/

const doSomethingAsync = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve('I did something'), 3000)
    })
}
const doSomething = async () => {
    console.log(await doSomethingAsync())
}
console.log('Before')
doSomething()
console.log('After')

/**
 * --------------------------------------
 */

/**
 * Если объявить некую функцию с использованием ключевого слова async,
 * это будет означать, что такая функция возвратит промис даже если в явном виде это не делается

 * Именно поэтому, например, следующий пример представляет собой рабочий код:
 */
const aFunction = async () => {
    return 'test'
}
aFunction().then(console.log) // Будет выведен текст 'test'

//Эта конструкция аналогична такой:

const aFunction = async () => {
    return Promise.resolve('test')
}
aFunction().then(console.log) // Будет выведен текст 'test'

/**
 * ЦЕПОЧКИ
 * ---------------------------------------------------------------
 */
const promiseToDoSomething = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve('I did something'), 10000)
    })
}
const watchOverSomeoneDoingSomething = async () => {
    const something = await promiseToDoSomething()
    return something + ' and I watched'
}
const watchOverSomeoneWatchingSomeoneDoingSomething = async () => {
    const something = await watchOverSomeoneDoingSomething()
    return something + ' and I watched as well'
}
watchOverSomeoneWatchingSomeoneDoingSomething().then(res => {
    console.log(res)
})

/**
 * При отладке промисов нельзя эффективно пользоваться обычными
 * инструментами отладчика (наподобие «шага с обходом», step-over)
 * а асинхронные ф-ии можно )
 */
