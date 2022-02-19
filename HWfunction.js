'use strict'


function wrapTags(str, tag) {
    return `<${tag}>${str}</${tag}>`

}


var res = wrapTags("Hello world", "p")


console.log(res) // <p>Hello world</p> */


/* Написать фунцию:



    Принимает первым аргументом любую строку
    Вторым аргументом принимает название тега
    Возращает Строку обернутую в теги согластно переданного названия тега


Пример:


var res = wrapTags("Hello world", "p")


console.log(res) // <p>Hello world</p> */