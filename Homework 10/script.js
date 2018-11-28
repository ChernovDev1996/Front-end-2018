dataOne = {
        x: 12,
        y: 3,
        znak: '/'
}

dataTwo = {
        x: 9,
        y: 3,
        znak: '*'
}

dataThree = {
        x: 6,
        y: 3,
        znak: '+'
}

function SuperMath(x, y, znakString) {
        this.x = x;
        this.y = y;
        this.znakString = znakString;

        this.znak = function () {
                if (typeof this.znakString == 'string') {
                        switch (this.znakString) {
                                case '/':
                                        console.log(this.x / this.y);
                                        break;
                                case '*':
                                        console.log(this.x * this.y);
                                        break;
                                case '+':
                                        console.log(this.x + this.y);
                                        break;
                                case '-':
                                        console.log(this.x - this.y);
                                        break;
                        }
                }
        }
}
var newMath = new SuperMath(1, 1, '/');


newMath.check = function (obj) {

        this.x = obj.x;
        this.y = obj.y;
        this.znakString = obj.znak;

        if (confirm('Wanna take some -znak- action, Boss?') == true) {
                return this.znak();
        }


};

newMath.check(dataOne);
newMath.check(dataTwo);
newMath.check(dataThree);