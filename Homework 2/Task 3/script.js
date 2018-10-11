
// Четные не выводит, я хз почему - задал if (a % 2 == 0) как внешнее условие
var a = +prompt();
var b = +prompt();


if (a && b) { 
    if (a % 2 == 0) {
    document.write("<table style='border: 1px solid black'>");
        // for (i = a, j = b; i >= 0 && j <= 100; i++) {
        //     document.write("<tr> <td>" + i + "</tr> </td>");
        // }  Тут вообще страшные вещи творятся, браузеру - хана) 
        for (i = a; i < 100 && i > 0; i++) {
            document.write("<tr> <td style='border: 1px solid black'>" + i + "</tr> </td>")
        }
    document.write("</table>");
}}



// Total disaster, Browser crashes omg?????

// do {
//     for(i = a; i % 2 == 0; i++) {
//             document.write("<table style='border: 1px solid black'> <tr> <td>" + i + "</td> </tr> </table>");
//         }  
// }
// while(a >= 0 && b <= 100);



console.log("Done")
