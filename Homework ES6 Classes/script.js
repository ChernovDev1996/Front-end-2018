class Elem {
  constructor(selector) {
    this.selector = document.querySelector(selector);
  }
  html(symbol) {
    this.selector.innerHTML = symbol;
    return this;
  }
  appendSym(symbol) {
    this.selector.append(symbol);
    return this;
  }
  prependSym(symbol) {
    this.selector.prepend(symbol);
    return this;
  }
  attr(name, value) {
    this.selector.setAttribute(name, value);
    return this;
  }
}

window.onload = function () {
  var elem = new Elem('.target')
  elem.html('Hello').appendSym('!').prependSym('George, ').attr('class', 'www').attr('title', 'hello');
};