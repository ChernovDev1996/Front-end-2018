window.onload = function() {
  var blocks = document.querySelectorAll(".block");
  var buttonSet = document.querySelector(".button-set");
  var buttonClear = document.querySelector(".button-clear");
  for (var i = 0; i < blocks.length; i++) {
    var block = blocks[i];
    var span = block.querySelector("span");
    var button = block.querySelector(".click");
    button.dataset.id = "block-" + i;
    button.dataset.color = "block-color-" + i;
    button.id = i;
    var counter = localStorage["block-" + i] || 0;
    span.innerHTML = counter;

    button.addEventListener("click", onClick);
    button.addEventListener("click", function() {
      var counter = localStorage[this.dataset.id];

      event.target.style.backgroundColor =
        "rgb(" +
        getRand(0, 256) +
        ", " +
        getRand(0, 256) +
        ", " +
        getRand(0, 256) +
        ")";

      var color = event.target.style.backgroundColor;

      localStorage[this.dataset.color] = color;

      if (counter >= 50) {
        event.target.style.backgroundColor = "gray";
      }
    });
  }

  buttonSet.addEventListener("click", function() {
    this.blockIdAsker = prompt("ask ID");

    for (var i = 0; i < blocks.length; i++) {
      var span = blocks[i].querySelector("span");
      var button = blocks[i].querySelector(".click");
      if (this.blockIdAsker == button.id) {
        this.numSetter = +prompt("Ask number");
        span.innerHTML = this.numSetter;
        localStorage[button.dataset.id] = span.innerHTML;
      }
    }
  });

  buttonClear.addEventListener("click", function() {
    localStorage.clear();
    for (var i = 0; i < blocks.length; i++) {
      blocks[i].firstElementChild.innerHTML =
        localStorage[button.dataset.id] || 0;
    }
  });
};

function onClick() {
  var counter = localStorage[this.dataset.id] || 0;
  this.previousElementSibling.innerHTML = ++counter;
  localStorage[this.dataset.id] = counter;
}

function getRand(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}
