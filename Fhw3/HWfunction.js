'use strict'



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