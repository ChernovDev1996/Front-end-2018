window.onload = function () {

  // var inputRange = document.querySelector('.rangeInput');
  // var rangeOutput = document.querySelector('.rangeRes');
  // var creditBar = document.querySelector('.creditBar');
  // var mainScale = document.querySelector('.main-scale')
  // var creditScale = document.querySelector('.percentage-scale');
  // var creditCommission = document.querySelector('.creditContents');



  // function blockDiagram(range, mainElement, innerElement, commission) {
  //   commission.style.backgroundColor = 'red';
  //   innerElement.style.backgroundColor = 'green';
  //   if (range == 100) {
  //     mainElement.style.height = 108 + 'px';
  //   } else {
  //     mainElement.style.height = 100 + 'px';
  //     innerElement.style.height = range + 'px';
  //   }

  //   if (range < 20) {
  //     commission.style.height = 2 + 'px';

  //   } else if (range >= 20 && range <= 50) {
  //     commission.style.height = 4 + 'px';
  //   } else if (range >= 50 && range <= 75) {
  //     commission.style.height = 6 + 'px';
  //   } else if (range >= 75 && range <= 100) {
  //     commission.style.height = 8 + 'px';
  //   }

  // }

  // inputRange.addEventListener('input', function (event) {
  //   rangeOutput.value = event.target.value;
  //   creditCommission.innerHTML = 'Credit: ' + event.target.value + " / Commission: " + creditScale.clientHeight;

  //   blockDiagram(inputRange.value, creditBar, mainScale, creditScale);


  // });

  // rangeOutput.addEventListener('input', function (event) {
  //   inputRange.value = event.target.value
  //   creditCommission.innerHTML = 'Credit: ' + inputRange.value + " / Commission: " + creditScale.clientHeight;

  //   blockDiagram(inputRange.value, creditBar, mainScale, creditScale);
  // });



  function RenderHero(height, width, actionArea) {
    this.heroElem = document.createElement('div');
    this.heroElem.classList.add('heroElement');
    this.heroElem.style.height = height + 'px';
    this.heroElem.style.width = width + 'px';
    console.log(this.heroElem);

    this.drawHero = function () {
      actionArea.appendChild(this.heroElem);
      return this;
    }

    this.moveHero = function (keyCode, step) {
      var heroLeft = 0;
      var heroUp = 0;
      var heroRight = 0;
      var heroDown = 0;
      if (keyCode == 37) {
        heroLeft += step;
        console.log(newItem);
        this.heroElem.style.right = heroLeft + "px";
      } else if (keyCode == 38) {
        heroUp += step;
        console.log(heroUp);
        this.heroElem.style.top = heroUp + "px";
      } else if (keyCode == 39) {
        heroRight += step;
        console.log(heroRight);
        this.heroElem.style.left = heroRight + "px";
      } else if (keyCode == 40) {
        heroDown += step;
        console.log(heroDown);
        this.heroElem.style.bottom = heroDown + "px";
      } else {
        return "Blyat";
      }

      return this;
    }
  }




  var actionArea = document.querySelector('.wrapper');

  var newHero = new RenderHero(100, 100, actionArea);
  console.log(newHero);



  document.addEventListener('keydown', function (event) {
    var heroLeft = 0;
    var heroUp = 0;
    var heroRight = 0;
    var heroDown = 0;

    if (event.keyCode == 37) {
      heroLeft += 2;
      console.log(heroLeft);
      newHero.heroElem.style.left = heroLeft + "px";
    }
    if (event.keyCode == 38) {
      heroDown += 2;
      console.log(heroDown);
      newHero.heroElem.style.bottom = heroDown + "px";
    }
    if (event.keyCode == 39) {
      heroRight += 2;
      console.log(heroRight);
      newHero.heroElem.style.right = heroRight + "px";
    }
    if (event.keyCode == 40) {
      heroUp += 2;
      console.log(heroUp);
      newHero.heroElem.style.top = heroUp + "px";
    }
  });





  document.addEventListener('keydown', function (event) {
    if (event.keyCode == 13)
      newHero.drawHero();
  });


};