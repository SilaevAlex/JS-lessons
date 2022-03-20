"use strict"

var user = {
    id: 777,
    name: "Vasa",
    age: 77,
    email: "vasa007@gmail.com",
    city: "Kiev",

}

user.card = function (userData) {

    var userInfo = document.querySelector(`#${userData}`);

    var info = "";

    for (var data in this) {
        if (data!= "card")
            info+=`${data}: ${this[data]} `;
    }

    

    userInfo.innerHTML = info;

};

user.card("user-block");