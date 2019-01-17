
// window.onload = function () {
  // const inputNums = document.querySelector('.inputNums');
  // const submitBtn = document.querySelector('.sbmt');
  // let arr = [];
  // let flag = true;

  // let promiseNums = new Promise((resolve, reject) => {

  //   setTimeout(() => {

  //     if (flag == true) {
  //       resolve('Enter numbers into the field');
  //     } else if (flag == false) {
  //       reject('Some error');
  //     }

  //   }, 1000)

  // })

  // promiseNums
  //   .then(
  //     (msgRes) => {
  //       alert(msgRes);
  //       submitBtn.addEventListener('click', (event) => {
  //         arr.push(inputNums.value);
  //         inputNums.value = '';

  //       });
  //       return arr;
  //     }
  //   )
  //   .then((arrayPassed) => {
  //     setTimeout(() => {
  //       alert("Time's up, see items in console");
  //       arrayChecker(arrayPassed);
  //       console.log(arrayPassed);
  //     }, 10000)
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   })



//   let asyncOne = new Promise((resolve, reject) => {
//     const randNum1 = Math.floor(Math.random() * 100);

//     setTimeout(() => {
//       if (randNum1 > 1) {
//         resolve(randNum1);
//       }

//       reject('==1');

//     }, 1500)


//   });

//   let asyncTwo = new Promise((resolve, reject) => {
//     const randNum2 = Math.floor(Math.random() * 100);

//     setTimeout(() => {
//       if (randNum2 > 1) {
//         resolve(randNum2);
//       }

//       reject('==1');

//     }, 2500)


//   });

//   let asyncThree = new Promise((resolve, reject) => {
//     const randNum3 = Math.floor(Math.random() * 100);

//     setTimeout(() => {
//       if (randNum3 > 1) {
//         resolve(randNum3);
//       }

//       reject('==1');

//     }, 3500)


//   });


//   Promise.all([asyncOne, asyncTwo, asyncThree])
//     .then(params => {
//       for (let i = 0; i < params.length; i++) {
//         console.log(params[i])
//       }

//     })

// }

// function arrayChecker(arrToCheck) {
//   arrToCheck.forEach((item, index) => {
//     if (isNaN(item)) {
//       console.error(`${item} under index ${index} is not a num, recheck`);
//     }
//   });
// };