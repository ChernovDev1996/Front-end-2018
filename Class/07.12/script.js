window.onload = function () {

    var item = document.querySelector('.block');


    item.addEventListener('mousedown', function (event) {
        var startX = event.clientX;
        var startY = event.clientY;
        var itemX = event.target.offsetLeft;
        var itemY = event.target.offsetTop;
        item.addEventListener('mousemove', function (event) {
            var curX = event.clientX;
            var curY = event.clientY;


            event.target.style.left = itemX + (curX - startX) + 'px';
            event.target.style.top = itemY + (curY - startY) + 'px';
            console.log("mousemove")
        });
        item.addEventListener('mouseup', function (event) {
            event.target.style.left = itemX;
            event.target.style.top = itemY;
        });
    });


};