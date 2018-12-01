Person.prototype = Object.create(Field.prototype);



function Field(height, width) {

        var array = new Array(height);

        for (var i = 0; i < array.length; i++) {
                array[i] = new Array(width);
        }


        for (var i = 0; i < array.length; i++) {
                for (j = 0; j < array[i].length; j++) {
                        array[i][j] = 0;
                }
        }

        this.arrayComplete = array;

        Field.prototype.arrayComplete = this.arrayComplete;



        // Start of methods
        Field.prototype.renderField = function () {
                document.write("<hr />")
                for (var i = 0; i < this.arrayComplete.length; i++) {
                        for (var j = 0; j < this.arrayComplete[i].length; j++) {
                                document.write(this.arrayComplete[i][j] + " ");
                        }
                        document.write("<br />");
                }

                document.write("<hr />")
                return this;
        }


        Field.prototype.clearField = function () {

                for (var i = 0; i < this.arrayComplete.length; i++) {
                        for (j = 0; j < this.arrayComplete[i].length; j++) {
                                this.arrayComplete[i][j] = 0;
                        }
                }
                return this;
        }

        Field.prototype.changeSize = function (newX, newY) {
                this.arrayComplete = new Array(newY);
                for (var i = 0; i < this.arrayComplete.length; i++) {
                        this.arrayComplete[i] = new Array(newX);
                }

                for (var i = 0; i < this.arrayComplete.length; i++) {
                        for (var j = 0; j < this.arrayComplete[i].length; j++) {
                                this.arrayComplete[i][j] = 0;
                        }
                }
                return this;
        }

}






function Person(name, XPosition, YPosition) {
        var horizontalLoc = XPosition;
        var verticalLoc = YPosition;



        // Methods
        this.start = function () {
                for (var i = 0; i < this.arrayComplete.length; i++) {
                        for (var j = 0; j < this.arrayComplete[i].length; j++) {
                                this.arrayComplete[verticalLoc][horizontalLoc] = name;
                        }
                }

                return this;
        }

        this.go = function (direction, step) {
                for (var i = 0; i < this.arrayComplete.length; i++) {
                        for (var j = 0; j < this.arrayComplete[i].length; j++) {
                                switch (direction) {
                                        case "up":
                                                if (this.arrayComplete[i][j] == name) {
                                                        this.arrayComplete[i][j] = 0;
                                                        this.arrayComplete[i - step][j] = name;
                                                }
                                                break;
                                        case "right":
                                                if (this.arrayComplete[i][j] == name) {
                                                        this.arrayComplete[i][j] = 0;
                                                        this.arrayComplete[i][j + step] = name;
                                                }
                                                break;
                                        case "down":
                                                if (this.arrayComplete[i][j] == name) {
                                                        this.arrayComplete[i][j] = 0;
                                                        this.arrayComplete[i + step][j] = name;

                                                }
                                                break;
                                        case "left":
                                                if (this.arrayComplete[i][j] == name) {
                                                        this.arrayComplete[i][j] = 0;
                                                        this.arrayComplete[i][j - step] = name;
                                                }
                                                break;

                                }
                        }
                }
                return this;
        }



        this.resetPosition = function () {
                for (var i = 0; i < this.arrayComplete.length; i++) {
                        for (var j = 0; j < this.arrayComplete[i].length; j++) {
                                if (this.arrayComplete[i][j] == name) {
                                        this.arrayComplete[i][j] = 0;
                                        this.arrayComplete[verticalLoc][horizontalLoc] = name;

                                }
                        }
                }
                return this;
        }
}


var gameField = new Field(10, 10);
var player = new Person("Hero", 5, 6);



gameField.renderField();
player.start();
player.go("left", 4);
player.resetPosition();
gameField.renderField();