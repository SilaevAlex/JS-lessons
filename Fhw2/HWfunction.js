

// hw2 START 

function exponentiate(num, ext) {

    var sum = []


    for (var i = 0; i < num.length; i++) {
        if (num[i] **= ext) {
            sum.push(num[i]);
        }
    }

    return sum
}


var res = exponentiate([2, 4, 3, 1], 2)

console.log(res)

// Написать функцию которая:



//     принимает массив чисел [2, 4, 3, 1] и степень числа 2
//     возращает новый массив из чисел возведенных в указанную степень


// Пример:

// var res = exponentiate([2, 4, 3, 1], 2)


// Результат: [4, 16, 9, 1]

// hw end 


