//1

// const data = [{
//     value: 10
//   },
//   {
//     value: 12
//   },
//   {
//     value: 3
//   },
//   {
//     value: 15
//   },
//   {
//     value: 4
//   },
//   {
//     value: 7
//   },
//   {
//     name: 7
//   },
//   {
//     value: 9
//   }
// ];


// window.onload = function () {


//   data.sort((a, b) => a.value - b.value).join("");

//   const simplifiedData = data.reduce((prev, item) => {
//     // if (!item.value) {
//     //   return prev;
//     // }

//     // return prev.concat(item.value);

//     return item.value ? prev.concat(item.value) : prev;
//   }, []);

// };



class ViewController {
  constructor(data, cardClass, contentClass) {
    this.data = data;
    this.cardClass = cardClass;
    this.contentClass = contentClass;
  }

  render() {
    return `
    <h2>Here is our data</h2>
    ${this.data.map(item => {
      return this.displayHTML(item);
    }).join('')}
  `
  }

  displayHTML(item) {
    return `
      <div class ="${this.cardClass}">
       <div class ="${this.contentClass}">
            <p> ${item.title}</p>
            <p> ${item.size}</p>
            <p> ${item.img}</p>
         </div>
      </div>
    `
  }

  m1() {
    return this;
  }

  m2() {
    return this;
  }
}


const data = [{
  title: 'Title1',
  size: 4,
  img: 'url'
}, {
  title: 'Title2',
  size: 35,
  img: 'url'
}, {
  title: 'Title2',
  size: 22,
  img: 'url'
}]

const viewC = new ViewController(data, 'card', 'card__content');



window.onload = function () {
  document.querySelector('.app').innerHTML = viewC.render();

};






// 1) Используя классы и шаблонные строки произвести вывод на экран товаров:
// `[{ title: 'Title1', size: 4, img: 'url' }, { title: 'Title2', size: 35, img: 'url' }, { title: 'Title2', size: 22, img: 'url' } ......]`
//   * Товары вывести в виде карточек, верстка элементарная, на свое усмотрение
//     * Используем фичи ES6, все методы по рендерингу должны хранится в классе`ViewController`