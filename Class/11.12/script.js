window.onload = function () {

    data = {
        name: 'menu',
        type: 'row',
        items: [
            {
                title: 'title 1',
                handler: 'ActionAdd'
            },
            {
                title: 'title 2',
                handler: 'ActionSaveAs',
                items: [
                    { title: 'inner 1' }, { title: 'inner 2' }
                ]
            },
            {
                title: 'title 3',
                handler: 'ActionExit'
            }
        ]
    }


    var ul = document.createElement('ul');
    ul.classList.add('data');

    var li;

    for (var i = 0; i < data.items.length; i++) {
        li = document.createElement('li');
        li.innerHTML = data.items[i].title;

        if (data.items[i].items) {
            var ulInner = document.createElement('ul');
            ulInner.classList.add('inner-ul');

            var liInner;

            for (var j = 0; j < data.items[i].items.length; j++) {
                liInner = document.createElement('li');
                liInner.innerHTML = data.items[i].items[j].title;

                ulInner.appendChild(liInner);
            }
            li.appendChild(ulInner);
        }

        ul.appendChild(li);
    }


    document.body.appendChild(ul);

};


