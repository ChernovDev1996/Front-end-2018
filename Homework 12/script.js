window.onload = function () {



  function inputsTransfer() {
    var inputs = document.querySelectorAll('.inputField');
    var textField = document.querySelector('.textZone');

    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].value !== '' && inputs[i] !== inputs[inputs.length - 1]) {
        textField.value += inputs[i].value + ",";

      } else if (inputs[i] == inputs[inputs.length - 1]) {
        textField.value += inputs[i].value + '.';
      } else {
        return confirm("Enter the data please?");
      }
    }
  }

  setTimeout(inputsTransfer, 10000);
}