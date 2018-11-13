function fofo() {

    var args = arguments;
    var argsArray = [];

    for(var i = 0; i < args.length; i++) {
        argsArray = argsArray.concat(args[i]);
    }

    return argsArray;
}


// document.write(fofo([1,2,3,4], [3,4,5,6], [7,6,5,4]));

console.log(fofo([1,2,3,4], [3,4,5,6], [7,6,5,4]));







//2
// function factory(array) {
//     var i = array[0];

//     return function() {
//         return array[i++];
        
//     }



    
// }

// var step = factory([1,2,3,4,5,6]);


// console.log(step());
// console.log(step());
// console.log(step());



//3

function factory(array) {
    var i = array[0];

    
    return function() {
        return array[i++];   
    }
  
}

var step = factory([1,2,3,4,5,6], function sqr(x) {
    return 
});

console.log(step());
console.log(step());
console.log(step());







// function factory(a){
//     console.log('factory');

//     return function(){
//         console.log('inner', a);
//     }
// }

// var foo = factory(70);
// foo();

// var bar = factory(50);
// bar();