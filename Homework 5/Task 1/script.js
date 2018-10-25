// 1

// arr = new Array(1, 2, 3, 4, 5, 6, 7);
// lastOfArr = arr[arr.length-1]
// console.log(arr);

// if (arr.length % 2 == 0) {
// arr.splice(0, 1, arr[1], arr[0])
// arr.splice(2, 3, arr[3], arr[2])
// arr.splice(4, 5, arr[5], arr[4])}
// else {
//     arr.splice(0, 1, arr[1], arr[0])
//     arr.splice(2, 3, arr[3], arr[2])
//     arr.splice(4, 5, arr[5], arr[4])
//     arr.push(lastOfArr);
// }


// console.log(arr)




// 2


n = 5;
m = 5;
A = new Array(n);
B = new Array();
for(i = 0; i < A.length; i++){
    A[i] = new Array(m);
}



for(i = 0; i < A.length; i++){
    sum = 0;
    for(j = 0; j < A[i].length; j++){
        A[i][j] = Math.floor(Math.random()*100);
        
        sum += A[i][j];
    }
   

    if(i == 0) {
        minSum = sum;
        sumPosmin = i;
        maxSum = sum;
        sumPosmax = i;

    } else if (sum < minSum) {
        minSum = sum;
        sumPosmin = i;
    }
    else if (sum > maxSum) {
        maxSum = sum;
        sumPosmax = i;
    }


    if(i == sumPosmin) {
      
    }
    else if(i == sumPosmax) {
      
    }
}



// 1) В одномерном массиве произвести такую замену:
// 1 элемент поменять с 2
// 3 элемент поменять с 4
// 5 элемент поменять с 6
// и тд
// Если массив непарный - последний элемент не трогать.<br><br>
// было 1 2 3 4 5 6, должно стать: 2 1 4 3 6 5

// 2) В двумерном массиве A размером n на m. Заполнить случайными числами.
//     1. Найти ряд, где сумма элементов наименьшая
//     2. Найти ряд, где сумма элементов найбольшая
//     3. Поменять ряды местами (1 и 2 пункт)





