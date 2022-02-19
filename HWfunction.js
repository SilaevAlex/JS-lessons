'use strict'

// hw1 start
// function wrapTags(str, tag) {
//     return `<${tag}>${str}</${tag}>`

// }


// var res = wrapTags("Hello world", "p")


// console.log(res) // <p>Hello world</p> */


/* Написать фунцию:



    Принимает первым аргументом любую строку
    Вторым аргументом принимает название тега
    Возращает Строку обернутую в теги согластно переданного названия тега


Пример:


var res = wrapTags("Hello world", "p")


console.log(res) // <p>Hello world</p> */

// hw1 end 

// hw2 START 

// function exponentiate(num, ext) {

//     var sum = []


//     for (var i = 0; i < num.length; i++) {
//         if (num[i] **= ext) {
//             sum.push(num[i]);
//         }
//     }

//     return sum
// }


// var res = exponentiate([2, 4, 3, 1], 2)

// console.log(res)

// Написать функцию которая:



//     принимает массив чисел [2, 4, 3, 1] и степень числа 2
//     возращает новый массив из чисел возведенных в указанную степень


// Пример:

// var res = exponentiate([2, 4, 3, 1], 2)


// Результат: [4, 16, 9, 1]

// hw end 


// hw3 START 

function sort(str) {

    var strRev = [];

    for (var i = str.length - 1; i >= 0; i--) {
        strRev.push(str[i]);
    }
    return strRev
}




var res = sort(["a", "b", "c"])

console.log(res)
// Написать функцию которая:


//     принимает массив значений ["a", "b", "c"]
//     возращает новый массив из значений отсортированных наоборот


// Пример:

// 	var res = sort(["a", "b", "c"])


// 	Результат: ["c", "b", "a"]

// HW END