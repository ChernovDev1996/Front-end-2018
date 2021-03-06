window.onload = function() {
  function RenderHero(height, width, actionArea) {
    this.heroElem = document.createElement("div");
    this.heroElem.classList.add("heroElement");
    this.heroElem.style.height = height + "px";
    this.heroElem.style.width = width + "px";

    this.heroWrap = document.createElement("div");
    this.heroWrap.classList.add("heroWrap");

    var xPos = 0;
    var yPos = 0;

    this.drawHero = function() {
      this.heroWrap.appendChild(this.heroElem);
      actionArea.appendChild(this.heroWrap);
      return this;
    };

    this.moveHero = function(keyCode, step) {
      if (keyCode == 37) {
        this.heroElem.style.backgroundColor = "yellow";
        xPos += step;
        this.heroElem.style.right = xPos + "px";
      } else if (keyCode == 38) {
        this.heroElem.style.backgroundColor = "yellow";
        yPos -= step;
        this.heroElem.style.top = yPos + "px";
      } else if (keyCode == 39) {
        this.heroElem.style.backgroundColor = "yellow";
        xPos -= step;
        this.heroElem.style.right = xPos + "px";
      } else if (keyCode == 40) {
        this.heroElem.style.backgroundColor = "yellow";
        yPos += step;
        this.heroElem.style.top = yPos + "px";
      }
      setTimeout(() => {
        this.heroElem.style.backgroundColor = "green";
      }, 3000);
      return this;
    };

    this.jumpHero = function(keyCode, jump) {
      if (keyCode == 32) {
        var curTop = this.heroElem.offsetTop;
        this.heroElem.style.backgroundColor = "red";
        this.heroElem.style.top = curTop - jump + "px";
        setTimeout(() => {
          this.heroElem.style.top = curTop + "px";
        }, 300);
      }

      setTimeout(() => {
        this.heroElem.style.backgroundColor = "green";
      }, 500);
      return this;
    };

    this.squezeHero = function(keyCode) {
      if (keyCode == 17) {
        var squezedHeight = this.heroElem.offsetHeight * 0.6;

        var squezedWidth = this.heroElem.offsetWidth * 1.25;

        this.heroElem.style.backgroundColor = "blue";
        this.heroElem.style.marginTop = "40px";
        this.heroElem.style.height = squezedHeight + "px";
        this.heroElem.style.width = squezedWidth + "px";
      }
      setTimeout(() => {
        var initHeight = this.heroElem.offsetHeight * 1.0;
        var initWidth = this.heroElem.offsetWidth * 1.0;
        this.heroElem.style.marginTop = "0px";
        this.heroElem.style.height = initHeight + "px";
        this.heroElem.style.width = initWidth + "px";
        this.heroElem.style.backgroundColor = "green";
      }, 500);
      return this;
    };

    this.unsquezeHero = function(keyCode) {
      if (keyCode == 17) {
        var initHeight = this.heroElem.offsetHeight * 1.0;
        var initWidth = this.heroElem.offsetWidth * 1.0;
        this.heroElem.style.marginTop = "0px";
        this.heroElem.style.height = initHeight + "px";
        this.heroElem.style.width = initWidth + "px";
        this.heroElem.style.backgroundColor = "green";
      }
    };
  }

  var actionArea = document.querySelector(".wrapper");
  var newHero = new RenderHero(100, 100, actionArea);

  document.addEventListener("keydown", function(event) {
    if (event.keyCode == 13) {
      newHero.drawHero();
    }
    newHero.moveHero(event.keyCode, 5);
    newHero.jumpHero(event.keyCode, 100);
    newHero.squezeHero(event.keyCode);

    // document.addEventListener("keypress", function(event) {});
    // document.addEventListener("keyup", function(event) {});
  });
};
