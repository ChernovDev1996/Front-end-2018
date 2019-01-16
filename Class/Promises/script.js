window.onload = function () {


  // let newPromise = new Promise((resolve, reject) => {
  //   console.log(1);

  //   setTimeout(() => {

  //     // var mathRand = Math.random(Math.floor() *)
  //     reject();


  //   }, 1000)

  //   resolve()

  // });


  // newPromise
  //   .then(
  //     () => {
  //       console.log('resolve 2');


  //     },
  //     () => {
  //       console.log('reject 3');


  //     }
  //   )
  //   .then(
  //     () => {
  //       console.log('resolve 4');

  //       return Promise.reject();
  //     },
  //     () => {
  //       console.log('reject 5');

  //       return Promise.reject();
  //     }
  //   )
  //   .then(
  //     () => {
  //       console.log('resolve 6');


  //     },
  //     () => {
  //       console.log('reject 7');

  //     }
  //   )


  const inputNums = document.querySelector('.inputNums');
  const submitBtn = document.querySelector('.sbmt');
  let arr = [];
  let flag = true;

  let promiseNums = new Promise((resolve, reject) => {

    setTimeout(() => {

      if (flag == true) {
        resolve('Enter numbers into the field');
      } else if (flag == false) {
        reject('Some error');
      }

    }, 1000)

  })

  promiseNums
    .then(
      (msgRes) => {
        alert(msgRes);
        submitBtn.addEventListener('click', (event) => {
          arr.push(inputNums.value);
          inputNums.value = '';

        });
        return arr;
      }
    )
    .then((arrayPassed) => {
      setTimeout(() => {
        alert("Time's up, see items in console");
        arrayChecker(arrayPassed);
        console.log(arrayPassed);
      }, 10000)
    })
    .catch((error) => {
      console.error(error);
    })
}

function arrayChecker(arrToCheck) {
  arrToCheck.forEach((item, index) => {
    if (isNaN(item)) {
      console.error(`${item} under index ${index} is not a num, recheck`);
    }
  });
}
// 1) Написать промис, который будет запрашивать ввод с клавиатуры чисел(использовать тэг input, с очисткой после каждого ввода), которые сохранит в массив.
// Закончить запрос чисел необходимо тогда, когда закончится время.Время - 10 сек.После этого - выполнить операцию, которая выведет массив в консоль.