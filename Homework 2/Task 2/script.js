// Тут бы мне чисто формулу факториала если бы заюзать в переборе - сработало бы, перебор вроде пашет

var a = +prompt();
var b = +prompt();


if (a < b) {
    for(i = a; i <= b; i++) {   
        console.log(i); 
    }
}

else {
    console.log("Make sure a < b")
}
