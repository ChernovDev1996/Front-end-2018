var a = "20";
var b = 19;
var c = 22;

var parseVarA = parseInt(a);

if (c / 2) {
    document.write(parseVarA + b + c);
}

else {
    document.write("No")
};

if (c / 2 || parseVarA / 2 || b / 2) {
    document.write("</br>Someone from our crew is even")
}
else {
    document.write("No, all guys are odd")
};

if (a = !NaN) {
    document.write("</br>It is a string");
}

else {
    document.write("number")
};