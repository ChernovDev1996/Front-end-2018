
var number = +prompt();



if (!isNaN(number)) {
    if (number > 0) {
        for(i = number; i <= 100; i++) {
            console.log((i - 1) + (i - 2));
        }
    }
    else {
        console.log("More than 0, Sir")
    } 
}


else {
    console.log("Not anything other than num, please")
}
