window.onload = function () {
  // function inputsTransfer() {
  //   var inputs = document.querySelectorAll(".inputField");
  //   var textField = document.querySelector(".textZone");

  //   for (var i = 0; i < inputs.length; i++) {
  //     if (inputs[i].value !== "" && inputs[i] !== inputs[inputs.length - 1]) {
  //       textField.value += inputs[i].value + ",";
  //     } else if (
  //       inputs[i].value !== "" &&
  //       inputs[i] == inputs[inputs.length - 1]
  //     ) {
  //       textField.value += inputs[i].value + ".";
  //     } else {
  //       return confirm("Enter the data please?");
  //     }
  //   }
  // }

  // setInterval(inputsTransfer, 7000);
  function inputsTransfer() {
    var inputOne = document.querySelector("#inputFieldOne");
    var inputTwo = document.querySelector("#inputFieldTwo");
    var inputThree = document.querySelector("#inputFieldThree");
    var textField = document.querySelector(".textZone");

    var arrayInputs = [inputOne.value, inputTwo.value, inputThree.value];

    if (inputOne !== "") {
      textField.value = arrayInputs[0];
    }
    else { console.log("Filled") }
    if (inputOne !== "" && inputTwo !== "") {
      textField.value = arrayInputs[0] + "\n" + arrayInputs[1];
    }
    else { console.log("Filled") }
    if (inputOne !== "" && inputTwo !== "" && inputThree !== "") {
      textField.value = arrayInputs[0] + "\n" + arrayInputs[1] + "\n" + arrayInputs[2];
    }
    else { console.log("Filled") }
  }

  setInterval(inputsTransfer, 400);

};


