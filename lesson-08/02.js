/*
 * Напишите функцию isNumeric, которая принимает строку и проверяет, представляет ли эта строка корректное числовое значение.
 * Если строка является числом, функция должна возвращать true, в противном случае - false.
 */

// function isNumeric(str) {
//   // Преобразуем строку в число и проверяем, не является ли результат NaN
//   return !isNaN(parseFloat(str)) && isFinite(str);
// }


// console.log(isNumeric("123")) // Ожидаемый результат: true
// // console.log(isNumeric("12.3")) // Ожидаемый результат: true
// console.log(isNumeric("123abc")) // Ожидаемый результат: false
// console.log(isNumeric("abc")) // Ожидаемый результат: false
//  console.log(isNumeric(" ")) // Ожидаемый результат: false




function areYouPlayingBanjo(name) {
  if (name[0] === 'R' || name[0] === 'r') {
    return `${name} plays banjo`
  } else {
    return `${name} does not play banjo`
  }
 } 

 console.log(areYouPlayingBanjo("rrff"));
 
