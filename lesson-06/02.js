/*
Попробуйте написать свою версию метода `map`. Ваша задача — создать функцию `map`, которая принимает два параметра:

- `array` (массив, над которым выполняется операция),
- `callback` (функция, которая вызывается для каждого элемента массива).

Функция `callback` должна иметь возможность принимать следующие параметры:

- `element` (текущий элемент массива),
- `index` (индекс текущего элемента),

Ваша функция `map` должна возвращать новый массив, где каждый элемент является результатом вызова функции `callback` на каждом элементе исходного массива.
*/

/*
Пример использования вашей функции:

const numbers = [1, 2, 3, 4, 5]

const doubledNumbers = map(numbers, (element, index) => {
  return element * 2
})

console.log(doubledNumbers) // Должен вывести: [2, 4, 6, 8, 10]
*/

// const map = (array, callback) => {
//   const result = []
//   for (let index = 0; index < array.length; index++){
//     const element = array[index]
//     result.push(callback(element, index))
//   }
//   return result
// }


















// Вот перевод вашего текста на русский язык:

// Ваша задача — создать функцию, которая может принимать любое неотрицательное целое число в качестве аргумента 
// и возвращать его с цифрами в порядке убывания.По сути, необходимо переставить цифры, чтобы создать наибольшее возможное число.

//   Примеры:
// Вход: 42145 Выход: 54421

// Вход: 145263 Выход: 654321

// Вход: 123456789 Выход: 987654321







function descendingOrder(number) {
  if (number >= 0) {
    let string = number.toString()
    let array = string.split('')
    
  
    let newNumber = array.sort((prev, next) => next - prev) 

   return +newNumber.join('')
   
  } else {
    return null
  }
}

console.log(descendingOrder(5423));
