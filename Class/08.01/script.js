window.onload = function () {
  HtmlItem.staticRender('p', '.app', { key: "one", key2: "two" });
}


class C1 {
  constructor(p2) {
    this.p2 = p2;
  }
}


class C2 extends C1 {
  constructor(p1, p3, p2) {
    super(p2);
    this.p1 = p1;
    this.p3 = p3;
  }
}


class C3 extends C2 {
  constructor(p1, p4, p2, p3) {
    super(p2, p1, p3)
    this.p4 = p4
  }
}

class HtmlItem {
  static staticRender(tagName, target, attrs) {
    const targetEl = document.querySelector(target);
    const createdEl = document.createElement(tagName);

    for (let at in attrs) {
      console.log(at, attrs[at]);
      createdEl.setAttribute(at, attrs[at]);
    }


    targetEl.appendChild(createdEl);
  }

}
