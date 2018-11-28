// obj.key == "Hello";

// key = 'some'
// obj[key] = "Hello"
// obj['key'] == "Hello";

// key: "Hello";

// 1. git--version

// 2. git init

// 3. git remote add origin < url > -"remote"
// and "add" - name of distanced repo - origin - < url >

//         -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

// 4. git status




// Four states:

//         unmodified, modified, tracked / in index, commited




// 5. git add.

// 6. git commit - m "Update"


// 7. git branch

// 8. git branch Dev

// 9. git checkout Dev
// git checkout - b dev-- --create and
// switch to dev

// 10. git branch - D dev-- --deleting a branch






// //     Home Lection

// git checkout - b EXAMPLE

// git add.

// git commit - m "c1"



// git log - 1-- - history of commits
// git log - 2-- - two last

// git commit--amend-- -- -- -- -- ++ + i(insert in VIM)

// Exit from VIM
//         : wq-- - write & quit


// git push--force origin EXAMPLE-- - always when history is re - recorded with--amend


// git merge example(dev1 - ads to example)



// git checkout - b Dev2

//         ++console.log();


// git merge dev2(merge with master) --fastforward


// git checkout - b Dev3

// git checkout master

// git merge--no - ff Dev3


// git reset--hard HEAD~1




// // rebase

// git checkout - b dev4

//         +
//         commit etc


// back to master

// ++commit etc


// checkout to dev4

// git rebase master

// git add.
// git rebase--
// continue

// git push--force origin dev4



// git reset --hard --soft HEAD (tilda) 2


data = {
    x: 12,
    y: 3,
    znak: '/'
}

function SuperMath(x, y, znakString) {
    this.x = x;
    this.y = y;
    this.znakString = znakString;

    this.znak = function () {
        if (typeof znakString == 'string') {
            switch (znakString) {
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

    for (key in obj) {
        if (type)


    }

};

newMath.check(data);




// 1) Создать класс SuperMath.Добавить к экземпляру метод - check(obj), параметр obj которого имеет свойства X, Y, znak.Метод должен
//  подтвердить у пользователя хочет ли он произвести действие znak c Х и У.
// Если - да, сделать математическое действие znak
// (которое описано в прототипе), иначе - запросить ввод новых данных через метод input() класса SuperMath.
// Пример обекта: `obj = { X:12, Y:3, znak: “/”}`, возможные варианты znak => `+ - / * %`.
// При вводе znak нужно сделать проверку корректности ввода на возможные математические действия

// p = new SuperMath();
// p.check(obj); // --> no p.input() -> 3 prompt -> считает


