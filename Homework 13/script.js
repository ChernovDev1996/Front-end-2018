window.onload = function () {

  var inputRange = document.querySelector('.rangeInput');
  var rangeOutput = document.querySelector('.rangeRes');
  var creditBar = document.querySelector('.creditBar');
  var mainScale = document.querySelector('.main-scale')
  var creditScale = document.querySelector('.percentage-scale');
  var creditCommission = document.querySelector('.creditContents');



  function blockDiagram(range, mainElement, innerElement, commission) {
    commission.style.backgroundColor = 'red';
    innerElement.style.backgroundColor = 'green';
    if (range == 100) {
      mainElement.style.height = 108 + 'px';
    } else {
      mainElement.style.height = 100 + 'px';
      innerElement.style.height = range + 'px';
    }

    if (range < 20) {
      commission.style.height = 2 + 'px';

    } else if (range >= 20 && range <= 50) {
      commission.style.height = 4 + 'px';
    } else if (range >= 50 && range <= 75) {
      commission.style.height = 6 + 'px';
    } else if (range >= 75 && range <= 100) {
      commission.style.height = 8 + 'px';
    }

  }

  inputRange.addEventListener('input', function (event) {
    rangeOutput.value = event.target.value;
    creditCommission.innerHTML = 'Credit: ' + event.target.value + " / Commission: " + creditScale.clientHeight;

    blockDiagram(inputRange.value, creditBar, mainScale, creditScale);


  });

  rangeOutput.addEventListener('input', function (event) {
    inputRange.value = event.target.value
    creditCommission.innerHTML = 'Credit: ' + inputRange.value + " / Commission: " + creditScale.clientHeight;

    blockDiagram(inputRange.value, creditBar, mainScale, creditScale);
  });




};