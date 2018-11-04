

var animalContainer =  document.getElementById("animal-info");

var button = document.getElementById("button");




button.addEventListener('click', function() {

    var ourRequest = new XMLHttpRequest();

    ourRequest.open('GET', 'https://jsonplaceholder.typicode.com/posts');
    
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
    };
    
    
    ourRequest.send();
});


function renderHTML(data) {
var htmlString = "";


for (var i = 0; i < data.length; i++) {
    htmlString += "<p>" + data[i].title + "</p>";
}

animalContainer.insertAdjacentHTML('beforeend', htmlString);
}