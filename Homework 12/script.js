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
    inputOne = document.querySelector("#inputFieldOne");
    inputTwo = document.querySelector("#inputFieldTwo");
    inputThree = document.querySelector("#inputFieldThree");
    var textField = document.querySelector(".textZone");

    var arrayInputs = [inputOne.value, inputTwo.value, inputThree.value];

    if (inputOne.value !== "") {
      textField.value = arrayInputs[0];
    }


    if (inputOne.value !== "" && inputTwo.value !== "") {
      textField.value = arrayInputs[0] + "," + arrayInputs[1];
    }


    if (inputOne.value !== "" && inputTwo.value !== "" && inputThree.value !== "") {
      textField.value = arrayInputs[0] + "," + arrayInputs[1] + "," + arrayInputs[2];
    }

  }

  setInterval(inputsTransfer, 400);

};


