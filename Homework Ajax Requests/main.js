// 1
// function formValidation(inputNameOne, inputNameTwo, submitBtn) {
//     inputNameOne = document.forms[0].elements[inputNameOne];
//     inputNameTwo = document.forms[0].elements[inputNameTwo];
//     submitBtn = document.forms[0].elements[submitBtn];

//     var inputOneArr = Array.from(inputNameOne.value);
//     for (let i = 0; i < inputOneArr.length; i++) {
//         if (!isNaN(inputOneArr[i])) {
//             return false;
//         }
//     }
//     if (isNaN(inputNameTwo.value)) {
//         return false;
//     }
//     return true;
// }

// function doAjaxPost(method, url) {
//     return new Promise((resolve, reject) => {
//         let xhr = new XMLHttpRequest;

//         xhr.open(method, url);

//         xhr.send();

//         xhr.onreadystatechange = function () {
//             if (this.readyState != 4 || this.status != 200) {
//                 reject(`There is an error ${this.readyState} and ${this.status}`);
//             }
//             resolve(this.response);
//         }
//     });
// }

// window.onload = function () {
//     const submitForm = document.forms[0];
//     submitForm.addEventListener('submit', function (event) {
//         event.preventDefault();

//         if (formValidation('username', 'userage', 'submitBtn') == true) {
//             doAjaxPost('POST', '/registration')
//                 .catch(error => {
//                     console.log(error);
//                 });
//         }

//         else {
//             console.log(`Wrong with form validation: ${formValidation('username', 'userage', 'submitBtn')}`)
//         }

//     });
// }


// 2
// window.onload = function () {
//     Promise.all([promiseOne, promiseTwo])
//         .then((params) => {
//             newArr = [];
//             params.forEach((item) => {
//                 for (i in item) {
//                     item[i].forEach(item => {
//                         newArr.push(item);
//                     });
//                 }
//             });
//             newArr.join(",");
//             return newArr;
//         });


// }

// let promiseOne = new Promise((resolve, reject) => {
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function () {
//         if (this.readyState != 4 || this.status != 200) {
//             return
//         }

//         setTimeout(() => {
//             let respOne = JSON.parse(this.response);
//             resolve(respOne);
//         }, 1000)
//     }

//     xhr.open('GET', '/data-test-1.json');

//     xhr.send();
// });

// let promiseTwo = new Promise((resolve, reject) => {
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function () {
//         if (this.readyState != 4 || this.status != 200) {
//             return
//         }

//         setTimeout(() => {
//             let respTwo = JSON.parse(this.response);
//             resolve(respTwo);
//         }, 2000)
//     }

//     xhr.open('GET', '/data-test-2.json');

//     xhr.send();
// });