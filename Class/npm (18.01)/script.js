
var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    console.log(xhr);
}

xhr.open("GET", '/data.json');


xhr.send();

// console.log(xhr);

// var res = JSON.parse(xhr.responseText);

// console.log(res);

