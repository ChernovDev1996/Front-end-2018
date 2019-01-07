var data = [{
    name: 'Person One',
    species: "Homo",
    meal: ['meat', 'fish', 'veggies'],
    birth: 1996
  },
  {
    name: 'Person Two',
    species: "Neanderthal",
    birth: 1995
  },
  {
    name: 'Person Three',
    species: "Habilis",
    meal: ['meat', 'soy', 'veggies'],
    birth: 1994
  }
];



function age(birth) {
  var curDate = new Date().getFullYear() - birth;
  if (curDate < 23) {
    return "youngster"
  } else {
    return curDate;
  }
}


function foods(food) {
  return `
    <ul>
      ${food.map(foodItem => `<li>${foodItem}</li>`).join('')}
    </ul>
  `
}


function insertData(item) {
  return `
    <div class='app-item'>
      <div class='app-left'>
        <h1 class='app-header'>${item.name}</h1>
      </div>
      <div class='app-right'>
        <p class='app-paragraph'>Species: ${item.species}</p>
        <p class='app-paragraph'>Birth: ${age(item.birth)}</p>
        ${item.meal ? foods(item.meal) : ''}
      </div>
    </div>
    `
}


function filterSearch(event) {
  var searchValue = event.target.value.toLowerCase();
  var appItem = document.querySelectorAll('.app-item');
  appItem.forEach(function (appItem) {
    var headerText = appItem.firstElementChild.textContent;
    var paragraphText = appItem.lastElementChild.textContent;
    if (headerText.toLowerCase().indexOf(searchValue) != -1) {
      appItem.style.display = 'flex';
    } else if (paragraphText.toLowerCase().indexOf(searchValue) != -1) {
      appItem.style.display = 'flex';
    } else {
      appItem.style.display = 'none';
    }
  });
}



window.onload = function () {
  document.querySelector('#app').innerHTML = `
  <h1>Humans (${data.length} results)</h1>
  <input type="text" name="search-box" class="searchBox" />
   ${data.map(insertData).join('')}
  <p> These ${data.length} humans were added </p>
  `;

  var inputSearch = document.querySelector('.searchBox');
  inputSearch.addEventListener('keyup', filterSearch);
};