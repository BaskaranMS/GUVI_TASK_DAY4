//Anonymous Function
// 1.Print odd numbers in an array
let printOddNumbers = function(arr) {
    arr.forEach(function(num) {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
};
printOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]);
//output
// 1
// 3
// 5
// 7
// 9

// 2.Convert all the strings to title caps in a string array:
let convertToTitleCaps = function(arr) {
    return arr.map(function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
};
let stringArray = ["apple", "banana", "cherry"];
let titleCapsArray = convertToTitleCaps(stringArray);
console.log(titleCapsArray);
//outpt
//['apple','banana','cherry']

// 3.Sum of all numbers in an array:
let sumOfNumbers = function(arr) {
    return arr.reduce(function(acc, num) {
        return acc + num;
    }, 0);
};
let numbers = [1, 2, 3, 4, 5];
let sum = sumOfNumbers(numbers);
console.log(sum);
//output
//15

// 4.Return all the prime numbers in an array:
let isPrime = function(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};
let getPrimeNumbers = function(arr) {
    return arr.filter(function(num) {
        return isPrime(num);
    });
};
let numberArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];
let primes = getPrimeNumbers(numberArray);
console.log(primes);
//output
//[2,3,5,7]

//IIFE
// 1.Return all the palindromes in an array:
let palindromes = (function(arr) {
    return arr.filter(function(str) {
        let reversedStr = str.split('').reverse().join('');
        return str === reversedStr;
    });
})(["level", "hello", "world", "deed"]);
console.log(palindromes);
//output
//['level','deed']

// 2.Return median of two sorted arrays of the same size:
let medianOfArrays = (function(arr1, arr2) {
    let mergedArray = arr1.concat(arr2);
    let sortedArray = mergedArray.sort(function(a, b) {
        return a - b;
    });
    
    let length = sortedArray.length;
    if (length % 2 === 0) {
        return (sortedArray[length / 2 - 1] + sortedArray[length / 2]) / 2;
    } else {
        return sortedArray[Math.floor(length / 2)];
    }
})([1, 2, 3], [4, 5, 6]);
console.log(medianOfArrays);
//output
//3.5

//3.Remove duplicates from an array:
let uniqueArray = (function(arr) {
    return arr.filter(function(value, index, self) {
        return self.indexOf(value) === index;
    });
})([1, 2, 3, 4, 1, 2, 5, 6]);
console.log(uniqueArray);
//output
//[1,2,3,4,5,6]

//4.Rotate an array by k times:
let rotateArray = (function(arr, k) {
    k = k % arr.length;
    return arr.slice(k).concat(arr.slice(0, k));
})([1, 2, 3, 4, 5], 2);
console.log(rotateArray);
//output
//[3,4,5,1,2]


//Arrow function
//1.Print odd numbers in an array:
let OddNumbers = arr => {
    arr.forEach(num => {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
};
OddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]);
//output
// 1
// 3
// 5
// 7
// 9

//2.Convert all the strings to title caps in a string array:
let ToTitleCaps = arr => {
    return arr.map(str => {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
};
let stringArr = ["apple", "banana", "cherry"];
let titleCaps = ToTitleCaps(stringArray);
console.log(titleCapsArray);
//output
//['Apple','Banana','Cherry']

//3.Sum of all numbers in an array:
let sumNumbers = arr => {
    return arr.reduce((acc, num) => acc + num, 0);
};
let number = [1, 2, 3, 4, 5];
let sum1 = sumNumbers(numbers);
console.log(sum);
//output
//15

//4.Return all the prime numbers in an array:
let Primes = num => {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

let PrimeNumbers = arr => {
    return arr.filter(num => Primes(num));
};
let numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];
let prime = PrimeNumbers(numberArray);
console.log(primes);
//output
//[2,3,5,7]

//5.Return all the palindromes in an array:
let palin = arr => {
    return arr.filter(str => {
        let reversedStr = str.split('').reverse().join('');
        return str === reversedStr;
    });
};
let words = ["level", "hello", "radar", "deed"];
let palindromeWords = palin(words);
console.log(palindromeWords);
//output
//['level','radar','deed']
