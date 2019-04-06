let arrayIn = [["a", "b", "c"], ["d", "e", "f"]];
let arrayOut = [];

let len = arrayIn[0].length; // количество элементов на в выходном массиве (боковая сторона)

for (let index = 0; index < len; index++) {
  // формируем выходную коллекию
  let temp = [];
  arrayIn.forEach((arrayInElems, i) => {
    arrayInElems.forEach((elem, j) => {
      if (index == j) {
        temp.push(elem);
      }
    });
  });
  arrayOut.push(temp);
}
console.log(arrayOut);
