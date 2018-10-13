// var a = 1;
// var b = 15;
// var str1 = '';
// var str2 = '';
    
    
//         for (i = a; i <= b; i++) {
//             if (i % 2 == 0) {
//                 str1 = str1 + i;
//             }
//             else {
//                 str2 = str2 + i;
//             }

//             }
        

 
//     document.write("<table style='border: 1px solid black'>")
//     document.write("<tr> <td style='border: 1px solid black'>" + str1  + " </td> </tr>" );
//     document.write("<tr> <td style='border: 1px solid black'>" + str2   + "</td> </tr>")
//     document.write("</table>");



// do {
//     var x = +prompt();
//     var y = +prompt();
//     sum = 0;
// }
// while(isNaN(x) || isNaN(y));



//     for(i = x; i > y; i--) {
        
//         if (i % 2 == 0){
//             document.write(i);
//             sum += i;
//         }
        
//     }
//     document.write(sum);

//     for(i = x; i <= y; i++) {
      
//         if (i % 2 !== 0){
//             document.write(i);
//             sum += i;
//         }
//     }
//     document.write(sum);



// a= -6;
// b = 23;

// for(i = a; i <= b; i++) {
//     res = i * i;
//     if(i < 0 ) {
//         document.write(-res);
//     }
//     else {
//         document.write(res);
//     }
// document.write(i*i);

// }



// var x = +prompt();
// var y = +prompt();

// do {
//     data = +prompt();
// }
// while(data < x && data > y)

// for (i = x; i < y; i++) {
//     if(x = data + 5) {
//         document.write(x);
        
//     }
//     if(x = data - 5) {
//         document.write(x);
//         break;
//     }
// }


var n = +prompt(); //Height
var m = +prompt(); //Width

for(i = 0; i < m; i++) {
    document.write("*")
}
document.write("</br>")
for(j = 0; j < n; j++) {
    document.write("*" + "</br>")
}



for(i = 0; i < m; i++) {
    document.write("*")
}


