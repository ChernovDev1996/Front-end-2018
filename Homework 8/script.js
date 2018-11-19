// 1
// function middleOfArgs() {

//     var arrayForCentral = [];

// for(i = 0; i < arguments.length; i++) {

//     var middle = Math.ceil(arguments[i].length / 2) - 1;

//     if(arguments[i].length % 2 ==0) {
//         var even = arguments[i].splice(middle, 2);
//         arrayForCentral.push(even);
//     }

//     else {
//         var odd = arguments[i].splice(middle, 1);
//         arrayForCentral.push(odd);
//     }
    
// }

// return arrayForCentral;

// }


// console.log(middleOfArgs([1,2,3,4,5], [1,2,3,4,5,6], [2,3,4,6,56,34,76], [2,3,4,6,56,34,76,75,98,121]));





//2 

//     function doFunction(number1, number2, func) {

//         return func(number1, number2);
// }

// console.log(doFunction(4,4, function power(number1, number2) {
//     return Math.pow(number1, number2);
// }));



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


//         if(arguments.length == 3) {
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


// // // V2

// function doFunction(number1, func) {

//     if(arguments.length == 2 && typeof arguments[0] == !NaN) {
//         return func(arguments[0], arguments[1]);
//     }


// }

// doFunction(6, factorial());














// Lection
// 1

// object = {
//     x: 10,
//     y: 20,
//     inner: {
//         x: 20,
//         z: 30
//     },
//     foo2: {
//         k: 23,
//         p: 13
//     }
// }

// function convert(obj) {
//     var newObj = {};
//         // newObj.x = object.inner.x;
//         // newObj.y = object.y;
//         // newObj.z = object.inner.z;
//         // newObj.k = object.foo2.k;
//         // newObj.p = object.foo2.p;

//     for(key in obj) {


//     }



//     return newObj;
// }

// console.log(convert(object));


// var list = [1,2,3,4,45,5,6]

// console.log(list);

// list.myJoin = function() {

//     var str = '';

//     for(var i = 0; i < this.length - 1; i++) {
//         str += this[i];
//     }
//     return str;
// }


// list.myReverse = function() {
//     this.reverse();
// }


// console.log(list.myReverse());

