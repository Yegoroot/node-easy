// Система модулей Node.js, использование команды exports
// Экспорт можно организовать двумя способами.

// 1
const car = {
  brand: "Ford",
  model: "Fiesta",
};
module.exports = car;

const car = require("./car"); //..в другом файле

// 2
const car = {
  brand: "Ford",
  model: "Fiesta",
};
exports.car = car;

const car = require("./items").car;

/**
 * В чём разница между записью объекта в module.exports и заданием свойств объекта exports?
 * В первом экспортируется объект, который записан в module.exports. Во втором случае экспортируются свойства этого объекта.
 */
