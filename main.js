/* first HW */
// let yourName = prompt("Enter your name")

// let result = yourName 

// alert("Hello" + result)

/* first HW  */



/* HW2 Start */


// var yourName = prompt("Enter your names")

// for(var i = 0; i < yourName.length; i++) {
//     console.log("<li>" + yourName + "</li>")
// }



// var yourName = prompt("Enter your names")

// var arr = yourName.split(", ")

// for (var names of arr) {

//    console.log("<li>" + names + "</li>")
// }


/* HW2 END */

/* HW3 Start */

"use strict";

var phoneNumber = prompt("Enter your phone number:")

var err = false


for (var char of phoneNumber.slice(4, 13)) {

    var code = char.charCodeAt()

    if ( code < 48 || code > 57) {
        err = true

    }
}

if (phoneNumber[0] != "+" && err == false) {
    alert("Please start whith '+'!")

}

else if (phoneNumber.length != 13) {
    alert("Please enter '+' and 12 numbers");


}
else if (phoneNumber.slice(1, 4) != "380" && err == false) {
    alert("Start number from '+380...'!");

}

 

else if (err == true) {
    alert ("only num")
}
else{alert("It`s Ok")}


/* HW3 End */

