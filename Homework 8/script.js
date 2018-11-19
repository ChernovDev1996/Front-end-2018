
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
//     for (var key in obj){
//         if (typeof obj[key] == 'object') {
//             for (var key2 in obj[key]) {
//                 newObj[key2] = obj[key][key2];
//             }
//         }else{
//             newObj[key] = obj[key];
//         }
//     }
//     return newObj;
// }

// console.log(convert(object));

//2
// var list = [1,2,3,4,45,5,6]

// console.log(list);

// list.myJoin = function() {

//     var str = '';

//     for(var i = 0; i < this.length ; i++) {
//         str += this[i];
//     }
//     return str;
// }



//3


// objectOne = {
//     x: 10,
//     y: 20,
//     z: 40,
//     n: 100,
//     j: 25
// }


// objectTwo = {
//     a: 890,
//     b: 30,
//     t: 46,
//     y: 29,
//     n: 101,
//     g: 999
// }




// function assignObject(obj1, obj2) {

//     newObject = {};

//     for (keyOne in obj1) {
//         newObject[keyOne] = obj1[keyOne];
//     }

//     for (keyTwo in obj2) {
//        newObject[keyTwo] = obj2[keyTwo]; 
//     }

//     return newObject;
// }

// console.log(assignObject(objectOne, objectTwo));




//1 Home

// function inArray(string, array) {

//     for(var i = 0; i < array.length; i++) {
//         if(string == array[i]) {
//             return true;
//         }

//         else {
//             return false;
//         }
//     }

// }


// console.log(inArray('hello', ['hello', 'bye']));