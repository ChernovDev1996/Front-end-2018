// Lection
//  1
// function sum(a, b) {
//     return a + b;
// }

// var obj2 = {
//     copy: function (buffer) {
//         this[buffer] = buffer;
//         return this;
//     },
//     doFunction: function (func, a, b) {
//         this[this.target] = func(a, b);

//         return this;
//     },
//     clear: function () {
//         this[this.target] = 0;

//         return this;
//     },

//     targetFunc: function (key) {
//         this[key] = key;

//         this.target = key;

//         return this;
//     },

//     target: 'result',
//     result: '',
// };

// 2
// function transformString(string) {

//     var stringSplit = string.split('');
//     var arrForLetters = [];

//     for (var i = 0; i < stringSplit.length; i++) {
//         if (stringSplit[i] == "_") {

//             stringSplit[i] = stringSplit[i].replace("_", "");
//             arrForLetters.push(stringSplit[i]);

//         } else if (stringSplit[i] == "h") {

//             stringSplit[i] = stringSplit[i].toUpperCase();
//             arrForLetters.push(stringSplit[i]);

//         } else if (stringSplit[i] == "t") {

//             stringSplit[i] = stringSplit[i].toUpperCase();
//             arrForLetters.push(stringSplit[i]);
//         } else {
//             arrForLetters.push(stringSplit[i]);
//         }
//     }

//     if (arrForLetters[7] == "T") {
//         arrForLetters[7] = arrForLetters[7].toLowerCase();
//     }

//     var filteredArrayToString = arrForLetters.join('');
//     console.log(filteredArrayToString);
// }

// transformString("var_text_hello");

//3
// function inArray(string, array) {

//     checkArray = [];

//     for (var i = 0; i < array.length; i++) {
//         for (var k = 0; k < array[i].length; k++) {
//             for (var j = 0; j < string.length; j++) {

//                 if (string[j] == array[i][k]) {
//                     checkArray.push(string[j]);
//                 }

//             }
//         }
//     }

//     if (checkArray.length < string.length) {
//         return false;
//     } else {
//         return true;
//     }

// }

// console.log(inArray("foo", ["foobar", "fool", "food"]));

// Какой-то баг словил, выдает мне в тест-массив на одну букву больше (foo --> fooo),
// плюс с финальным чеком не все так гладко)

// Homework
// 1

// function renderObject() {

//     for (key in this) {
//         if (typeof this[key] == 'function') {
//             this[key] = null;
//         } else {
//             document.write(" " + this.key + ":" + this[key] + " ");
//         }
//     }
// }

// obj = {
//     Name: "Peter",
//     Surname: "Griffin",
//     Status: "200-lvl troll",
//     Spouse: "Louis",
//     peterActs: renderObject,
// }

// console.log(obj.peterActs());

// 2
// function sum(a, b) {
//     return a + b;
// }

// obj = {
//     m1ThreeParams: function (func, a, b) {
//         this[this.OutputOne] = func(a, b);

//         console.log(this[this.OutputOne]);
//         return this;
//     },
//     m2ChangeOutput: function (OutputNew) {
//         this[OutputNew] = OutputNew;
//         this.OutputOne = OutputNew;

//         console.log(this.OutputOne);
//         return this;
//     },
//     m3ClearOutput: function () {
//         for (key in obj) {
//             obj[key] = 0;
//         }
//         console.log(this.OutputOne);
//         return this;
//     },

//     OutputOne: '',
// }

// console.log(obj.m1ThreeParams(sum, 10, 12).m2ChangeOutput("Hello").m3ClearOutput());

// 3 & 4

// data = {

//     addRecord: function () {

//         for (var i = 0; i < arguments.length; i++) {

//             if (arguments[arguments.length - 1] == false) {
//                 for (key in arguments[i]) {
//                     this[key] = arguments[i][key];
//                 }
//             }

//             else if (arguments[arguments.length - 1] == true) {

//                 for (datakey in this) {
//                     for (key in arguments[i]) {
//                         if (this[datakey] == arguments[i][key]) {
//                             console.log("OO")
//                             this.datakey = this.datakey;
//                         }

//                     }
//                 }
//             }
//         }
//     },
//     p: 600,
//     str: 'hello',
//     y: -50
// }

// data.addRecord({
//     x: 10
// }, {
//     y: 20
// }, {
//     z: 30,
//     x: 50,
//     k: 60
// }, true);

// console.log(data);
