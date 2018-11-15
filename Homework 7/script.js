//1
// function middleOfArgs(args) {
//     args = arguments;
//     var arrayForCentral = [];

//     var middle = Math.ceil(args.length / 2) - 1;

//     for (var i = 0; i < args.length; i++) {
//         if(args.length % 2 == 0) {
//             var even = args.splice(middle, 2);
//             arrayForCentral = arrayForCentral.concat(even);
//         }
//         else {
//             var odd = args.splice(middle, 1);
//             arrayForCentral = arrayForCentral.concat(odd);
//         }

//     }
//     console.log(arrayForCentral);
// }


// middleOfArgs([1,2,3,4,5], [1,2,3,4,5,6]);


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


// V2

// function doFunction() {

//     if(arguments.length = 2 && typeof arguments[0] == !isNaN) {
//         return func(arguments[0], arguments[1]);
//     }


// }

// doFunction(6, function factorial(){
//     var factorial = 1;

//     for(var i = 1; i <= arguments[0]; i++) {
//         factorial = factorial * i;
//     }

//     return factorial;
// })