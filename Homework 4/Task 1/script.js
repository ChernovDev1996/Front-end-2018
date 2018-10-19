
// 1 


// var n = +prompt("Enter a number of array");

// arrA = new Array (n);
// arrB = new Array ();

// for (var i = 0; i < arrA.length; i++) {
//     arrA[i] = Math.floor(Math.random() * 20 + 4);
//     console.log(arrA[i]);
//     if (arrA[i] < 10) {
//         arrB.unshift(arrA[i]);
//     }
// }
// console.log(arrB + " This is arrB");

// var maxArrA = arrA[0];
// var minArrA = arrA[0];
// for (var i = 0; i < arrA.length; i++) {
//     if (arrA[i] >= maxArrA) {
//         maxArrA = arrA[i];
//     }
//     else if (arrA[i] <= minArrA) {
//         minArrA = arrA[i];
//     }
// }


// console.log(maxArrA + " Max from A");

// console.log(minArrA + " Min from A");






// 2

// var n = +prompt("Enter array length");

// var min = +prompt("Enter min start array value");
// var max = +prompt("Enter max end value");


// arrA = new Array (n);
// arrB = new Array ();

// for (var i = 0; i < arrA.length; i++) {
//     arrA[i] = Math.floor(Math.random() * (max - min) + min);
//     console.log(arrA[i]);
//         if(arrA[i] < max) {
//             arrB.unshift(arrA[i]);
//         }
//         else if (arrA[i] > min) {
//             arrB.unshift(arrA[i]);
//         }  
// }

// console.log(arrB);



// 3

// var n = +prompt("Enter array length");

// var max = +prompt("Enter max array value");
// var min = +prompt("Enter min value");


// arrA = new Array (n);
// arrB = new Array ();


// var maxArrA = arrA[0];
// var minArrA = arrA[0];

// for (var i = 0; i < arrA.length; i++) {
//     arrA[i] = Math.floor(Math.random() * (max - min) + min);

//     if (arrA[i] >= maxArrA) {
//             maxArrA = arrA[i];
//             arrA.unshift(maxArrA) }
//     else if (arrA[i] <= minArrA) {
//             minArrA = arrA[i];
//             arrA.push(minArrA)
    
// }}

// console.log(arrA + " Look at the first digit (should be the smallest)");
// console.log(arrA + " Look at the last digit (the biggest?)");

// Что-то я короче не въехал в суть задания, поменять именно как min & max?



// 4

// Метод "тупо в лоб" в действии, сорри но не было времени уже организовывать это через перебор.
// var array = [1, 5, 6, 7, 2, 4];

// console.log(array);

// array.splice(0, 2, 4, 2, 7);
// array.splice(3, 5, 6, 5, 1);

// console.log(array);


// for (i = 0; i < array.length; i++) {
//     item = array[i];
    
//     if (item == array[array.length - 1]) {
//          array.unshift(item);
//     }
    
// }
// console.log(array); /// Shiiit. Баг тут.



// 5



// var n = +prompt("Enter array length");

// var min = +prompt("Enter min start array value");
// var max = +prompt("Enter max end value");


// arrA = new Array (n);




// for (i = 0; i < arrA.length; i++) {
//     arrA[i] = Math.floor(Math.random() * (max - min) + min);
//     if (arrA[i] < arrA[0]) {
//         arrA[0] = arrA[i];
//         console.log(arrA[0]);
      
//     }
//     if (arrA[i] >= arrA[0] + 5) {
//         console.log(arrA[i]);
//     }
// }

// Минимальное число выводит. Как сравнить чтоб на 5 больше было хз










