//Arrays



// var min = -20;
// var max = 65;

// var random = Math.floor(Math.random() * (max - min)) + min; // -20 -----45

// var random = Math.floor(Math.random() * 66 - 20)    // - 20 --- 45

// var n = +prompt();
// arr = new Array(n);

// for(i = 0; i < arr.length; i++) {
//     var random = Math.floor(Math.random() * 66 - 20);

//     arr[i] = random;
    
//     console.log(arr[i]);

// }

// var n = + prompt();
// arrA = new Array(n);
// arrB = new Array(n);

// for (i = 0; i < arrA.length; i++) {
//     var random = Math.floor(Math.random() * 66 - 20);
//     arrA[i] = random;
//     console.log(arrA[i]);
// }
// for (i = 0; i < arrB.length; i++) {
//     var random = Math.floor(Math.random() * 66 - 20);
//     arrB[i] = random;
//     console.log(arrB[i]);
// }


// for (i = 0; i < arrA.length; i++) {
//     arrA[i] = item;
//     for (j = 0; j < arrB.length; j++) {
//         if (arrB[j] == item) {
//             document.write(arrB[j] + "br/ ");
//         }
//     }
// }

















// 1
// var arr = [1, 2, 3, 4, 5];
// var str = arr.join('_');
// console.log(str);


// 2

// var arr = [6, 7, 2, 3, 5, 7];




// for (i = 0; i < arr.length; i++) {
//     var li = li + arr[i];
//     console.log(li);
//     var liIn = "<li>" + li + "</li>";
// }

// document.write("<ul>" + liIn + "</ul>");

// 3

// var arr = [5, 6, 43, 3, 436, 7, 87, 76, 45, 3];

// var splice = arr.splice(4, 2);

// console.log(splice);


// 4

// var arr = [1, 2, 3];


// for (i = 0; i < arr.length; i++) {
//     var element = +prompt();

// }





// Двумерные массивы



// a = int[n][m];

// row = i;
// col = j;


// a[0][2];


// A = new Array(n); // !!!!
// for (i = 0; i < A.length; i++) {
//     A[i] = new Array(m);
// }








//1

// var n = +prompt();
// var m = +prompt();

// var min = -42;
// var max = 38;

// A = new Array(n)

// for(i = 0; i < A.length; i++){
//     A[i] = new Array(m);
// }
// for(i = 0; i < A.length; i++){
//     for(j = 0; j < A[i].length; j++){
//         A[i][j] = Math.floor(Math.random() * (max - min) + min);
        
//         }
//     }


//     minA = [0][0];

//     imin = 0;
//     ijmin = 0;

//     for(i = 0; i < A.length; i++){
//         for(j = 0; j < A[i].length; j++){
            
//            if(A[i][j] < min) {
//             min = A[i][j];
//            }
//         }}

//     buffer = A[imin][jmin];
//     A[imin][jmin] = A[0][0];
    
//2


// var n = +prompt();

// var min = -42;
// var max = 38;

// A = new Array(n);


// var min = A[0];

// for (i = 0; i < A.length; i+=2) {
//     A[i] = Math.floor(Math.random() * (max - min) + min);
//     if (A[i] < min) {
//     min = A[i];
//     } 
// }
// console.log(min)




// 3

var n = +prompt();

var min = 22;
var max = 38;

A = new Array(n);

var total = 0;
var avg = total / A.length;
for (i = 0; i < A.length; i++) {
    A[i] = Math.floor(Math.random() * (max - min) + min);
     total += A[i];
     item = (A[i] - avg * 100 / A[i])
     console.log(item + '%')
}

console.log(total)
console.log(avg)

    









