function SuperArray(n, m, obj) {
    this.min = obj.min;
    this.max = obj.max;

    var arrayConstructor = new Array(n);


    for (var i = 0; i < arrayConstructor.length; i++) {
        arrayConstructor[i] = new Array(m);
    }


    for (var i = 0; i < arrayConstructor.length; i++) {
        for (var j = 0; j < arrayConstructor[i].length; j++) {
            arrayConstructor[i][j] = Math.floor(Math.random() * (obj.max - obj.min) + obj.min);
        }
    }


    this.arrayUpd = arrayConstructor;

}


var newSupArr = new SuperArray(5, 6, {
    min: 10,
    max: 55
});


console.log(newSupArr);



// 1
SuperArray.prototype.render = function (separator) {

    for (var i = 0; i < this.arrayUpd.length; i++) {
        for (var j = 0; j < this.arrayUpd[i].length; j++) {
            document.write(this.arrayUpd[i][j] + ' ');

        }
        document.write('<br />');
    }

    for (var k = 0; k <= 20; k++) {
        document.write(separator);
    }
    document.write("<br />");


    this.arrayUpd = arrayConstructor;


    return this;

}

// 2
SuperArray.prototype.clear = function (direction, k) {

    if (direction == "row") {
        for (var j = 0; j < this.arrayUpd[k].length; j++) {
            this.arrayUpd[k][j] = 0;
        }
    } else if (direction == "column") {
        for (var j = 0; j < this.arrayUpd[k].length; j++) {
            this.arrayUpd[j][k] = 0;
        }
    }
    return this;
}

// 3
SuperArray.prototype.setMarker = function (obj) {
    var x = obj.x;
    var y = obj.y;

    for (var i = 0; i < this.arrayUpd.length; i++) {
        for (var j = 0; j < this.arrayUpd[i].length; j++) {
            this.arrayUpd[x][y] = "&";
        }
    }
    return this;
}


// 4
SuperArray.prototype.goTo = function (obj) {

    var x = obj.x;
    var y = obj.y;

    for (var i = 0; i < this.arrayUpd.length; i++) {
        for (var j = 0; j < this.arrayUpd[i].length; j++) {
            if (this.arrayUpd[i][j] == "&") {
                this.arrayUpd[i][j] = Math.floor(Math.random() * (this.max - this.min) + this.min);
            }
            this.arrayUpd[x][y] = "&";
        }
    }
    return this;
}



// 5
SuperArray.prototype.shift = function (direction) {

    for (var i = 0; i < this.arrayUpd.length; i++) {
        for (var j = 0; j < this.arrayUpd[i].length; j++) {
            switch (direction) {
                case "up":
                    if (this.arrayUpd[i][j] == "&") {
                        this.arrayUpd[i][j] = Math.floor(Math.random() * (this.max - this.min) + this.min);
                        this.arrayUpd[i - 1][j] = "&";
                    }
                    break;
                case "right":
                    if (this.arrayUpd[i][j] == "&") {
                        this.arrayUpd[i][j] = Math.floor(Math.random() * (this.max - this.min) + this.min);
                        this.arrayUpd[i][j + 1] = "&";
                    }
                    break;
                case "down":
                    if (this.arrayUpd[i][j] == "&") {
                        this.arrayUpd[i][j] = Math.floor(Math.random() * (this.max - this.min) + this.min);
                        this.arrayUpd[i + 1][j] = "&";
                    }
                    break;
                case "left":
                    if (this.arrayUpd[i][j] == "&") {
                        this.arrayUpd[i][j] = Math.floor(Math.random() * (this.max - this.min) + this.min);
                        this.arrayUpd[i][j - 1] = "&";
                    }
                    break;

            }
        }
    }

    return this;
}


newSupArr.setMarker({
    x: 2,
    y: 3
});

newSupArr.goTo({
    x: 2,
    y: 5
});

newSupArr.shift("up").shift("left");



Создать игру:

    Есть поле field, является экземпляром класса Field(width, height),
    предпочитаемые размеры 10 на 10.

Есть герой person, класс Person(name, XPosition, YPosition)


Поле являет собой двумерный массив, который состоит из нулей.
Там где находится наш герой - стоит 1.

Field имеет такие методы:
    *
    renderField() - выводит поле в document, устанавливает разделители `<hr />`
сверху и снизу
    *
    clearField() - убирает героя с доски *
    changeSize(newX, newY) - меняет размер поля

Person имеет такие методы:
    *
    start() - герой появляется на доске *
    go(direction, step) - движение по переданом параметру *
    (direction может быть: 'left', 'right', 'top', 'bottom') и с шагом step *
    resetPosition() - перенос в начальную позицию


Нужно самим решить какие методы получают аргументы, какие нет.Организовывать код можно
любым образом.

Вызов методов происходит из консоли.


Суть такая:

    field.renderField();
person.start();
person.go('left', 2);
person.go('top', 1);
field.renderField();

последовательно вызываются команды, renderField - отображает новую доску в document.
В результате мы должны увидеть 2 нарисованных состояния поля.