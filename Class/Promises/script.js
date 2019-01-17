// window.onload = function () {


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
  //   )}

// 1) Написать промис, который будет запрашивать ввод с клавиатуры чисел(использовать тэг input, с очисткой после каждого ввода), которые сохранит в массив.
// Закончить запрос чисел необходимо тогда, когда закончится время.Время - 10 сек.После этого - выполнить операцию, которая выведет массив в консоль.