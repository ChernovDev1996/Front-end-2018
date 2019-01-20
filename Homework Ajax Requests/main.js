// 1

function formValidation(inputNameOne, inputNameTwo, submitBtn) {
    inputNameOne = document.forms[0].elements[inputNameOne];
    inputNameTwo = document.forms[0].elements[inputNameTwo];
    submitBtn = document.forms[0].elements[submitBtn];

}

function doAjaxPost(method, url, body, event) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest;


        xhr.open(method, url);


        xhr.send();


        xhr.onreadystatechange = function () {
            if (this.readyState != 4 || this.status != 200) {
                reject(`There is an error ${this.readyState} and ${this.status}`);
            }
            resolve(this.response);
        }
    });

}




window.onload = function () {
    const submitBtn = document.forms[0].elements['submitBtn'];

    submitBtn.addEventListener('submit', (event) => {
        event.preventDefault();


    });




}




















// 1)
// Создать форму по отправке имени и возраста.
// Сделать валидацию данных(в имени не может быть чисел, в возрасте - букв).
// При успешной валидации сформировать отправку данных с формы на url `/registration`.Использовать метод POST.
// В результате ничего в ответе мы не должны получить(кроме ошибки 404).Суть - отправка данных с валидацией.

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