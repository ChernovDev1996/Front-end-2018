alert("Введите значения");



var radius = +prompt("Enter radius (R)", '');
var height = +prompt("Enter height (H)", '');
var base = +prompt("Enter base (S)", '');
var pi = Math.PI;



var volumeOne = height * base;

var volumeTwo = pi * (radius * radius) * height;


document.write("**************</br></br>" + 

"Обьем цилиндра с площадью основы " + base + ", радиусом "+ radius + " и высотой " + height + " равен:</br></br>" +

"--------------------</br></br>"  +

volumeOne + " = результат (S*H)</br></br>" +

volumeTwo + " = результат (PI * (R * R) * H)</br></br>" +

"-------------------</br></br>" +

"end.")