// function SuperArray(n, m, obj) {
//     this.min = obj.min;
//     this.max = obj.max;

//     var arrayConstructor = new Array(n);


//     for (var i = 0; i < arrayConstructor.length; i++) {
//         arrayConstructor[i] = new Array(m);
//     }


//     for (var i = 0; i < arrayConstructor.length; i++) {
//         for (var j = 0; j < arrayConstructor[i].length; j++) {
//             arrayConstructor[i][j] = Math.floor(Math.random() * (obj.max - obj.min) + obj.min);
//         }
//     }


//     this.arrayUpd = arrayConstructor;

// }


// var newSupArr = new SuperArray(5, 6, {
//     min: 10,
//     max: 55
// });


// console.log(newSupArr);



// // 1
// SuperArray.prototype.render = function (separator) {

//     for (var i = 0; i < this.arrayUpd.length; i++) {
//         for (var j = 0; j < this.arrayUpd[i].length; j++) {
//             document.write(this.arrayUpd[i][j] + ' ');

//         }
//         document.write('<br />');
//     }

//     for (var k = 0; k <= 20; k++) {
//         document.write(separator);
//     }
//     document.write("<br />");


//     this.arrayUpd = arrayConstructor;


//     return this;

// }

// // 2
// SuperArray.prototype.clear = function (direction, k) {

//     if (direction == "row") {
//         for (var j = 0; j < this.arrayUpd[k].length; j++) {
//             this.arrayUpd[k][j] = 0;
//         }
//     } else if (direction == "column") {
//         for (var j = 0; j < this.arrayUpd[k].length; j++) {
//             this.arrayUpd[j][k] = 0;
//         }
//     }
//     return this;
// }

// // 3
// SuperArray.prototype.setMarker = function (obj) {
//     var x = obj.x;
//     var y = obj.y;

//     for (var i = 0; i < this.arrayUpd.length; i++) {
//         for (var j = 0; j < this.arrayUpd[i].length; j++) {
//             this.arrayUpd[x][y] = "&";
//         }
//     }
//     return this;
// }


// // 4
// SuperArray.prototype.goTo = function (obj) {

//     var x = obj.x;
//     var y = obj.y;

//     for (var i = 0; i < this.arrayUpd.length; i++) {
//         for (var j = 0; j < this.arrayUpd[i].length; j++) {
//             if (this.arrayUpd[i][j] == "&") {
//                 this.arrayUpd[i][j] = Math.floor(Math.random() * (this.max - this.min) + this.min);
//             }
//             this.arrayUpd[x][y] = "&";
//         }
//     }
//     return this;
// }



// // 5
// SuperArray.prototype.shift = function (direction) {

//     for (var i = 0; i < this.arrayUpd.length; i++) {
//         for (var j = 0; j < this.arrayUpd[i].length; j++) {
//             switch (direction) {
//                 case "up":
//                     if (this.arrayUpd[i][j] == "&") {
//                         this.arrayUpd[i][j] = Math.floor(Math.random() * (this.max - this.min) + this.min);
//                         this.arrayUpd[i - 1][j] = "&";
//                     }
//                     break;
//                 case "right":
//                     if (this.arrayUpd[i][j] == "&") {
//                         this.arrayUpd[i][j] = Math.floor(Math.random() * (this.max - this.min) + this.min);
//                         this.arrayUpd[i][j + 1] = "&";
//                     }
//                     break;
//                 case "down":
//                     if (this.arrayUpd[i][j] == "&") {
//                         this.arrayUpd[i][j] = Math.floor(Math.random() * (this.max - this.min) + this.min);
//                         this.arrayUpd[i + 1][j] = "&";
//                     }
//                     break;
//                 case "left":
//                     if (this.arrayUpd[i][j] == "&") {
//                         this.arrayUpd[i][j] = Math.floor(Math.random() * (this.max - this.min) + this.min);
//                         this.arrayUpd[i][j - 1] = "&";
//                     }
//                     break;

//             }
//         }
//     }

//     return this;
// }


// newSupArr.setMarker({
//     x: 2,
//     y: 3
// });

// newSupArr.goTo({
//     x: 2,
//     y: 5
// });

// newSupArr.shift("up").shift("left");









// DOM



// Node types: 
// tag, text, 




// window.onload = function () {
//     var link = document.getElementById('block');
//     var link = document.getElementsByClassName('');//array


//     //querySelector + querySelectorAll;


//     console.dir(link);




// }
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


window.onload = function () {



    function changeBlock() {

        var dHeight = window.innerHeight;
        var blocks = document.querySelectorAll('.block');

        for (var i = 0; i < blocks.length; i++) {
            blocks[i].style.left = getRandomInt() + "px";
            blocks[i].style.top = getRandomInt() + "px";
        }

    }

    setInterval(changeBlock, 500);

}





