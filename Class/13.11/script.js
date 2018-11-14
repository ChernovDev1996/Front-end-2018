// function fofo() {

//     var args = arguments;
//     var argsArray = [];

//     for(var i = 0; i < args.length; i++) {
//         argsArray = argsArray.concat(args[i]);
//     }

//     return argsArray;
// }




// console.log(fofo([1,2,3,4], [3,4,5,6], [7,6,5,4]));







//2
// function factory(array) {
//     var i = array[0];

//     return function() {
//         return array[i++];
        
//     }



    
// }

// var step = factory([1,2,3,4,5,6]);


// console.log(step());
// console.log(step());
// console.log(step());



//3

// function factory(array) {
//     var i = array[0];

    
//     return function() {
//         return array[i++];   
//     }
  
// }

// var step = factory([1,2,3,4,5,6]);

// console.log(step());
// console.log(step());
// console.log(step());

//4

// function getMaxs(args) {
//     var args = arguments;

//     var maxOfArrays = [];
//     var numberToCompare = [0];

//     for(var i = 0; i < args.length; i++) {
//         if(numberToCompare < args[i]) {
//             maxOfArrays = maxOfArrays.concat(args[i]);
//         }

//     }
//     console.log(numberToCompare);
// }


// console.log(getMaxs([1,10,4,5], [20,40,15,4]));


//5



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










// 1) Функция должна вернуть массив из центральных элементов переданных массивов.

//     Центральный элемент, это один центральный, если массив по длине непарный [1, 2, 3, 4, 5] -> 3

//     Центральный элемент, это пара центральных, если массив по длине парный: [1, 2, 3, 4, 5, 6] -> 3, 4



// middle = Math.ceil(arr.length / 2) - 1;

// if (arr.length % 2 == 0) {
//     arr.splice(middle, 2);
// } else {
//     arr.splice(middle, 1); 
// }
