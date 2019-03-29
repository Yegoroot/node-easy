const interval = setInterval(function() {
    if (App.somethingIWait === 'arrived') {
        clearInterval(interval)
        // если условие выполняется - удалим таймер, если нет - выполним некие действия
    }
}, 100)

/**
 * При использовании setInterval() может возникнуть ситуация,
 * когда выполнение коллбэка занимает время, превышающее n, что приводит к тому,
 *  что следующий вызов осуществляется до завершения предыдущего.
 */

// Рекурсивная установка setTimeout()

const myFunction = () => {
    // выполнить некие действия
    setTimeout(myFunction, 1000)
}
setTimeout(myFunction(), 1000)
