window.onload = function() {
  var titles = document.querySelectorAll(".bookItems");
  // var titlesArray = Array.from(titles);
  var books = document.querySelectorAll(".bookList li p");

  var bookList = document.querySelector(".bookList");

  var bookListLi = document.querySelector(".bookList li:nth-child(1)");

  var bookListHeading = document.querySelector(".title");

  var btns = document.querySelectorAll(".bookItemBtn");

  var list = document.querySelector(".main-area ul");

  var addForm = document.forms[1];

  addForm.addEventListener("submit", function(event) {
    event.preventDefault();
    var value = addForm.querySelector('input[type="text"]').value;
    var li = document.createElement("li");
    li.classList.add("bookItems");
    var bookPara = document.createElement("p");
    bookPara.classList.add("bookItemParagraph");
    bookPara.textContent = value;
    var bookBtn = document.createElement("button");
    bookBtn.classList.add("bookItemBtn");
    bookBtn.textContent = "Delete";
    li.appendChild(bookPara);
    li.appendChild(bookBtn);
    list.appendChild(li);
  });

  list.addEventListener("click", function(event) {
    if (event.target.className == "bookItemBtn") {
      var li = event.target.parentElement;
      list.removeChild(li);
    }
  });

  //   books.forEach(function(book) {
  //     book.textContent += " (book title)";
  //   });

  // btns.forEach(function (btn) {
  //     btn.addEventListener('click', function (event) {
  //         const li = event.target.parentElement;
  //         li.parentNode.removeChild(li);
  //     });
  // });

  // var listLast = bookList.previousElementSibling.innerHTML += "Cool";

  var banner = document.querySelector(".container");
  var clonedBanner = banner.cloneNode(true);
  clonedBanner = banner.cloneNode(false);

  bookListHeading.addEventListener("click", function(event) {});

  // for (var i = 0; i < titles.length; i++) {
  //     console.log(titles[i]);
  // }
};
