             
// 1
// function fill2DArray(m, n) {

//   arr = new Array(n)

//   for (var i = 0; i < arr.length; i++) {
//       arr[i] = new Array(m);
//   }


//   for(var i = 0; i < arr.length; i++ ) {
//     for(var j = 0; j < arr[i].length; j++) {
//       arr[i][j] = Math.floor(Math.random() * 100);
//     }
//   }
// }
// fill2DArray(10, 10);


// 2
// function compareTwoArrays(a, b) {
//   var A = a;
//   var B = b;
//   var sumOfA = 0;
//   var sumOfB = 0;
//   for (i = 0; i < A.length; i++) {
//     if(!isNaN(A[i])) {
//     sumOfA += A[i];
//   }
    
//   }
  
//   for (j = 0; j < B.length; j++) {
//     if(!isNaN(B[j])) {
//       sumOfB += B[j];
//     }
//   }


//   if(sumOfA > sumOfB) {
//     // return sumOfA;
//     document.write(sumOfA);
//   }
//   else {
//     // return sumOfB;
//     document.write(sumOfB);
//   }

// }

// compareTwoArrays([1,"Hello",3,4,"Bye",6], [1,"Bye",3,12,"Woow",54])




// 3
// function doMath(x, znak, y) {
//   var x = +prompt("Enter x", '');

//   var znak = prompt("Enter your operator for calc", '');

//   var y = +prompt("Enter y", '');


//  switch(znak) {
//   case "+":
//       console.log(x + y);
//       break;

//   case "-":
//       console.log(x - y);
//       break;

//   case "*":
//       console.log(x * y);
//       break;

//   case "/":
//       console.log(x / y);
//       break;

//   case "%":
//       console.log(x % y);
//       break;

//   case "^":
//       console.log(x ^ y);
//       break;

//   default: 
//     console.log("Looking forward for your numbers")
//  } 
// }


// doMath();




//4

// var func = function(string, testArray) {
//     var stringToArray = string.split('');

//     for(i = 0; i < stringToArray.length; i++) {
//       for (j = 0; j < testArray.length; j++) {
//         if (stringToArray[i] == testArray[j]) {
//           stringToArray[i] = "";
//         }

//       }
//     }
//     var joinedString = stringToArray.join("");
//     document.write(joinedString);
// }

// func("Hello World", ["l", "d"]);






//5
// function filter(testArray, testFunction) {
//     var innerArray = [];


//     for(var i = 0; i < testArray.length; i++) {
//         if(testFunction(testArray[i]) == true) {
//             innerArray.push(testArray[i]);
//         }
//     }
//     return innerArray;
// }


// var filter = filter([1,2,3,4,5,6,7,8], function(x) {
//     return x % 2 == 0;
// });

// console.log(filter);







// var attitude = function(original, replacement, source) {
//     return function(source) {
//       return source.replace(original, replacement);
//     };
//   };
  
//   var snakify = attitude(/millenials/ig, "Snake People");
//   var hippify = attitude(/baby boomers/ig, "Aging Hippies");
  
//   console.log(snakify("The Millenials are always up to something."));
//   // The Snake People are always up to something.
//   console.log(hippify("The Baby Boomers just look the other way."));
//   // The Aging Hippies just look the other way.