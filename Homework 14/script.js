window.onload = function () {
  function RenderHero(height, width, actionArea) {
    this.heroElem = document.createElement('div');
    this.heroElem.classList.add('heroElement');
    this.heroElem.style.height = height + 'px';
    this.heroElem.style.width = width + 'px';

    this.heroWrap = document.createElement('div');
    this.heroWrap.classList.add('heroWrap');

    var xPos = 0;
    var yPos = 0;

    console.log(this.heroElem);

    this.drawHero = function () {
      this.heroWrap.appendChild(this.heroElem);
      actionArea.appendChild(this.heroWrap);
      return this;
    }

    this.moveHero = function (keyCode, step) {
      if (keyCode == 37) {
        xPos += step;
        this.heroElem.style.right = xPos + "px";
      } else if (keyCode == 38) {
        yPos -= step;
        this.heroElem.style.top = yPos + "px";
      } else if (keyCode == 39) {
        xPos -= step;
        this.heroElem.style.right = xPos + "px";
      } else if (keyCode == 40) {
        yPos += step;
        this.heroElem.style.top = yPos + "px";
      }
      return this;
    }

    this.jumpHero = function (keyCode, jump) {
      if (keyCode == 32) {
        var curTop = this.heroElem.offsetTop;
        this.heroElem.style.top = curTop - jump + 'px';
        setTimeout(() => {
          this.heroElem.style.top = curTop + 'px';
        }, 300);
      }
      return this;
    }


    this.squezeHero = function (keyCode) {
      if (keyCode == 17) {

        var squezedHeight = this.heroElem.offsetHeight * 0.6;
        var initHeight = this.heroElem.offsetHeight * 1.0;
        var squezedWidth = this.heroElem.offsetWidth * 1.25;
        var initWidth = this.heroElem.offsetWidth * 1.0;
        this.heroElem.style.marginTop = '40px';
        this.heroElem.style.height = squezedHeight + 'px';

        setTimeout(() => {
          this.heroElem.style.width = squezedWidth + 'px';
        }, 50)


        setTimeout(() => {
          this.heroElem.style.marginTop = '0px';
          this.heroElem.style.height = initHeight + 'px';
          this.heroElem.style.width = initWidth + 'px';
        }, 700);
      }

      return this;
    }
  }








  var actionArea = document.querySelector('.wrapper');
  var newHero = new RenderHero(100, 100, actionArea);

  document.addEventListener('keydown', function (event) {
    if (event.keyCode == 13) {
      newHero.drawHero();
    };
    newHero.moveHero(event.keyCode, 5);
    newHero.jumpHero(event.keyCode, 100);
    newHero.squezeHero(event.keyCode);
  });

};