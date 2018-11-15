// 1
function middleOfArgs() {

    var arrayForCentral = [];

for(i = 0; i < arguments.length; i++) {

    var middle = Math.ceil(arguments[i].length / 2) - 1;

    if(arguments[i].length % 2 ==0) {
        var even = arguments[i].splice(middle, 2);
        arrayForCentral.push(even);
    }

    else {
        var odd = arguments[i].splice(middle, 1);
        arrayForCentral.push(odd);
    }
    
}

return arrayForCentral;

}


console.log(middleOfArgs([1,2,3,4,5], [1,2,3,4,5,6], [2,3,4,6,56,34,76], [2,3,4,6,56,34,76,75,98,121]));





//2 

//     function doFunction(number1, number2, func) {
//         var number1 = number1;
//         var number2 = number2;

//         return func(number1, number2);
// }

// doFunction(4,4, function power(number1, number2) {
//     return console.log(Math.pow(number1, number2));
// });



// 3

//     function doFunction(number1, number2, func) {
//         var number1 = number1;
//         var number2 = number2;

//         return func(number1, number2);
// }

// doFunction(4,4, function power(number1, number2) {
//     return console.log(Math.pow(number1, number2));
// });

// doFunction(4,4, function power(number1, number2) {
//     return console.log(number1 * number2);
// });

// doFunction(4,4, function power(number1, number2) {
//     return console.log(number1 / number2);
// });


// 4


// V1

//     function doFunction() {


//         if(arguments.length = 3) {
//          return func(arguments[0], arguments[1], arguments[2]);
//         }

//         else {
//             return func(arguments[0], arguments[1]);
//          }
         
// }

// doFunction(4, factorial());

// function factorial() {
//     var factorial = 1;

//     for(var i = 1; i <= arguments[0]; i++) {
//         factorial = factorial * i;
//     }

//     console.log(factorial);

// }


// // V2

// function doFunction() {

//     if(arguments.length = 2 && typeof arguments[0] == !NaN) {
//         return func(arguments[0], arguments[1]);
//     }


// }

// doFunction(6, factorial());