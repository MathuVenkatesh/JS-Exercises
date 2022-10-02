//Flatten Array

function flattednArr(inputArr) {
  let outputArr = [];
  recursion(0, inputArr, outputArr);
  return outputArr;
}

function recursion(index, inputArr, outputArr) {
  if (index >= inputArr.length) return;

  if (Array.isArray(inputArr[index])) {
    recursion(0, inputArr[index], outputArr);
  } else {
    outputArr.push(inputArr[index]);
  }
  recursion(index + 1, inputArr, outputArr);
}

out = flattednArr([1, 2, 3, [4, [5, 6]], [7, 8, [9, 10]], [11, 12]]);
console.log(out);

// What is between? (1,5) output=> [1,2,3,4,5]
//(-2,2) output=> [-2,-1,0,1,2]

function between(a, b) {
  // your code here
  arr = [];
  for (i = a; i <= b; i++) {
    arr.push(i);
  }
  return arr;
}

//solution 2
function between(a, b) {
  const betweenArray = [];

  while (a <= b) {
    betweenArray.push(a);
    a++;
  }

  return betweenArray;
}

//Count by X - solution 1

function countBy(x, n) {
  var z = [];
  for (i = 1; i <= n; i++) {
    z.push(x * i);
  }
  return z;
}

//Count by X - solution 2

const countBy = (x, n) => [...Array(n)].map((_, idx) => ++idx * x);

// check for prime number
function prime(number) {
  let count = 0;
  for (i = 1; i < number; i++) {
    if (number % i === 0) {
      count++;
    }
  }

  count === 1 ? console.log("prime") : console.log("not prime");
  console.log(count);
}

prime(6);

// list of prime numbers from
let count = 0;
let i, j;
function prime(num) {
  for (j = 2; j <= num; j++) {
    for (i = 1; i <= j; i++) {
      if (j % i == 0) count++;
    }

    if (count == 2) console.log(j);
    count = 0;
  }
}

prime(10);

// (n) number of prime numbers
let count = 0;
let i, j;
function prime(num) {
  if (num <= 1) {
    console.log("Not Prime Number");
  } else {
    for (let j = 2; j <= num; j++) {
      count = 0;
      for (i = 1; i < j; i++) {
        if (j % i == 0) count++;
      }
      console.log("number is", j, "it is count", count);
      if (count == 1) console.log(j);
    }
  }
}

prime(10);

// reverse string

let reversestr = "";
let i, j;
function rev(str) {
  for (let i = str.length - 1; i >= 0; i--) {
    //console.log(str[i]);
    reversestr += str[i];
  }
  console.log(reversestr);
}
rev("back");

// isPalindrome

function rev(str) {
  let reversestr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    //console.log(str[i]);
    reversestr += str[i];
  }
  return reversestr;
}

// isPalindrome (Ex. MADAM is Palindrome, teacher is not a Palindrome)
function isPalindrome(str) {
  console.log(typeof [1, 2, 3].join(""));
  str === str.split("").reverse().join("")
    ? console.log("word is palindrome")
    : console.log("word is not a palindrome");
}
isPalindrome("teacher");

// giving \n at end of the array[i] and , as well

function toCsvText(array) {
  let csv = "";
  for (let i = 0; i < array.length - 1; i++) {
    csv += array[i] + "\\n";
  }
  console.log(csv + array.pop());
}

//input value (calling function)
toCsvText([
  [0, 1, 2, 3, 45],
  [10, 11, 12, 13, 14],
  [20, 21, 22, 23, 24],
  [30, 31, 32, 33, 34],
]);

// finding max in 1D array
let newArr = [];
function findMax(inputArr) {
  let max = 0;
  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i] > max) {
      max = inputArr[i];
    }
  }
  console.log(max);
}

findMax([15, 3, , 100, 1, 6]);

// finding Max number in 2D Array

let newArr = [];
function findMax(inputArr) {
  let max = 0;
  for (let i = 0; i < inputArr.length; i++) {
    for (let j = 0; j < inputArr[i].length; j++) {
      console.log(inputArr[i][j]);
      if (inputArr[i][j] > max) {
        max = inputArr[i][j];
      }
    }
  }
  console.log("max num is", max);
}

findMax([
  [100000000, 1, 2, 3, 4],
  [100, 11, 12, 13, 14],
  [2000, 21, 22, 23, 24],
  [3210, 31, 32, 33, 34],
]);

// finding min number in 2D array

let newArr = [];
function findMin(inputArr) {
  let min = inputArr[0][0];
  //console.log('min is', min)
  for (let i = 0; i < inputArr.length; i++) {
    for (let j = 0; j < inputArr[i].length; j++) {
      //console.log(inputArr[i][j])
      if (inputArr[i][j] < min) {
        min = inputArr[i][j];
      }
    }
  }
  console.log("min num is", min);
}
// input field - function calling
findMin([
  [-100, 10, 2, 3, 4],
  [100, 11, 12, 13, 14],
  [2000, 21, 22, 23, 24],
  [3210, 31, 32, 33, 34, -200],
]);

// Binary to Decimal conversion

function Binary(num) {
  let result = 0;
  let n = num.length - 1;
  for (i = 0; i < num.length; i++) {
    result += num[i] * 2 ** (n - i);
  }
  console.log(result);
}
Binary("1011");

// array reverse (when input is string)
function numrev(n) {
  let i;
  let resultnum = [];
  for (i = n.length - 1; i >= 0; i--) {
    //console.log(num[i]);
    resultnum.push(parseInt(n[i]));
  }
  console.log(resultnum);
}

numrev("35231");

// array reverse (input is not string)
function numrev(n) {
  console.log(n.toString().split("").reverse());
  console.log(n.toString().split("").reverse().map(Number));
}

numrev(13253);

// reverse number without split()

let num = 123;
let reverse = 0;
while (num > 0) {
  let rem = num % 10;
  reverse = reverse * 10 + rem;
  num = Math.floor(num / 10);
}
console.log(reverse);

//--------------------------------------------------------------------------------//
//OOPS in ES6 syntax
class Shape {
  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }
  calcPerimeter() {
    console.log(this.sideLength);
  }
}

let square = new Shape("square", 20, 5);

let triangle = new Shape("triangle", 20, 3);

square.calcPerimeter();
triangle.calcPerimeter();
//--------------------------------------------------------------------------------//
// OOPS in ES5 syntax

var Shape = function (name, sides, sideLength) {
  this.name = name;
  this.sides = sides;
  this.sideLength = sideLength;
};

Shape.prototype.calcPerimeter = function () {
  console.log(this.sideLength);
};

let square = new Shape("square", 20, 5);

let triangle = new Shape("triangle", 20, 3);

square.calcPerimeter();
triangle.calcPerimeter();

//
//--------------------------------------------------------------------------------//
// class inside class
class Shape {
  constructor(name, sides, sideLength, EducationQali) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
    this.EducationQali = EducationQali;
  }
  calcPerimeter() {
    console.log(this.sideLength);
  }
}
class EducationQali {
  constructor(degree, certificate, project) {
    this.degree = degree;
    this.certificate = certificate;
    this.project = project;
  }
}

let EduQuali1 = new EducationQali("B.E", "CCNA", "JavaScript");

let EduQuali2 = new EducationQali("M.E", "HTML", "CSS");

let square = new Shape("square", 20, 5, EduQuali1);

let triangle = new Shape("triangle", 20, 3, EduQuali2);

square.calcPerimeter();
triangle.calcPerimeter();
console.log(square);

class Shape {
  constructor(name, sides, sideLength, EducationQali) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
    this.EducationQali = EducationQali;
  }
  calcPerimeter() {
    console.log(this.sideLength);
  }
}
class EducationQali {
  constructor(degree, certificate, project) {
    this.degree = degree;
    this.certificate = certificate;
    this.project = project;
  }
}

let EduQuali1 = new EducationQali("B.E", "CCNA", "JavaScript");

let EduQuali2 = new EducationQali("M.E", "HTML", "CSS");

let square = new Shape("square", 20, 5, EduQuali2);

let triangle = new Shape("triangle", 20, 3, EduQuali2);

square.calcPerimeter();
// triangle.calcPerimeter();
// console.log(square);
//--------------------------------------------------------------------------------//
/// class inside class

class Shape {
  constructor(name, sides, sideLength, EducationQali) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
    this.EducationQali = EducationQali;
  }
  calcPerimeter() {
    console.log(this.sideLength);
  }
  getDegree() {
    console.log(this.EducationQali);
  }
  getPerDeg() {
    console.log(this.degree);
  }
}
class EducationQali {
  constructor(degree, certificate, project) {
    this.degree = degree;
    this.certificate = certificate;
    this.project = project;
  }
  getPerDeg() {
    console.log(this.degree);
  }
}

let EduQuali1 = new EducationQali("B.E", "CCNA", "JavaScript");

let EduQuali2 = new EducationQali("M.E", "HTML", "CSS");

let square = new Shape("square", 20, 5, EduQuali2);

let triangle = new Shape("triangle", 20, 3, EduQuali2);

// square.calcPerimeter();
//square.getPerDeg();
EduQuali1.getPerDeg();
// triangle.calcPerimeter();
// console.log(square);

class City {
  constructor(name) {
    this.name = name.length === 0 ? randomName() : name;
    this.citizens = [];
  }

  randomName() {
    let names = "abcdefghijklmnopqrstuvwxyz";
    let t = Math.floor(Math.random() * 22);
    let randomNames = names.slice(t, t + 5);
    console.log(randomNames);
    return randomNames;
    //  length = 5;
    //  lowercase
  }
}

let obj1 = new City(" ");
console.log(obj1.name);

/////////

class World {
  constructor(num) {
    this.num = num;
    this.cities = [];
  } // Enter code below
  add_city(cityName) {}

  random_city() {}

  total_cities() {
    return cities.length;
  }
}
class City {
  constructor(name) {
    this.name = name.length === 0 ? randomName() : name;
    this.citizens = [];
  }

  randomName() {
    let names = "abcdefghijklmnopqrstuvwxyz";
    let t = Math.floor(Math.random() * 22);
    let randomNames = names.slice(t, t + 5);
    console.log(randomNames);
    return randomNames;
    //  length = 5;
    //  lowercase
  }

  add_citizen() {}
}

class Citizen {
  constructor() {
    this.age = math.floor(math.random() * 101);
  }
}

let world = new World(100);

//adds a new city called 'hackerhero'
world.add_city("hackerhero");

//should pull out a random city object within the world and log its value
console.log("Random city name: ", world.random_city().name);

//should pull out a random city object within the world and log its value
console.log(
  "Age of first citizen in another random city: ",
  world.random_city().citizens[0]
);

//should log 101 as there are 101  cities now
console.log("# of Cities: ", world.total_cities());

//--------------------------------------------------------------------------------//
//////// Finding Factorial of n (n!)

function factorialize(num) {
  let result = 1;

  for (let i = num; i > 0; i--) {
    result = result * i;
  }
  return result;
}
// 5! = 5 * 4 * 3 * 2 * 1;
console.log(factorialize(5));

//--------------------------------------------------------------------------------//
// finding the largest word in a sentance
let resultArr;
let resultinNum = [];
function findLongestWordLength(str) {
  //console.log (str.split(' '));
  resultArr = str.split(" ");
  for (let i = 0; i < resultArr.length; i++) {
    resultinNum.push(resultArr[i].length);
    // console.log(resultinNum);
  }
  console.log(resultinNum);

  //let maximum = resultinNum.max();
  console.log(Math.max(...resultinNum));
}

findLongestWordLength("May the force be with you");

//--------------------------------------------------------------------------------//
///// Finding largest number in list of array and form a new array with max number
//Return Largest Numbers in Arrays

function findMax(arr) {
  let max = arr[0];
  // console.log(max)
  for (let i = 0; i < arr.length; i++) {
    //  console.log(arr[i])
    if (arr[i] > max) max = arr[i];
  }
  return max;
}

function largestOfFour(arr) {
  let maxes = [];

  for (let i = 0; i < arr.length; i++) {
    var innermax = findMax(arr[i]);

    maxes.push(innermax);
  }

  console.log(maxes);
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);
//--------------------------------------------------------------------------------//
///// Confirm the Ending of the given word

function confirmEnding(str, target) {
  console.log(str.length);
  console.log(target.length);
  let firstLength = str.length;
  let secondLength = target.length;
  let matching = str.slice(firstLength - secondLength);
  let output = matching == target ? true : false;
  console.log(output);
}

confirmEnding("Connor", "n");
//--------------------------------------------------------------------------------//
//// Repeat a sting 'n times

function repeatStringNumTimes(str, num) {
  if (num <= 0) {
    return "";
  }

  let i = 0;
  let result = "";
  while (i < num) {
    result = result + str;
    i++;
  }
  return result;
}

repeatStringNumTimes("abc", 3);

//--------------------------------------------------------------------------------//
////////////// show only first(num) letters+ ...
function truncateString(str, num) {
  if (num >= str.length) {
    return str;
  }

  return str.slice(0, num) + "...";
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

//--------------------------------------------------------------------------------//
//// find which number can give num % 2 === 0 in a given array

function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      console.log(arr[i]);
    }
  }
  return undefined;
}

findElement([8, 2, 3, 4], (num) => num % 2 === 0);

//--------------------------------------------------------------------------------//

              JavaScript Array splice()        
              index of splice()
array.splice(index, howmany, item1, ....., itemX)
example
array.splice(2,1) = at array[2] remove 1 item
//--------------------------------------------------------------------------------//
//

function getIndexToIns(arr, num) {
  let resultArr = []
  let sum = 0;
 for(let i=0; i<arr.length; i++){
resultArr = arr.sort(function (a, b) {  return a - b;  });
if(num>arr[i]){
    sum++
}
// console.log(sum)
 }
  console.log(sum)
}

getIndexToIns([40,60], 50);
//(getIndexToIns([10, 20, 30, 40, 50], 35) should return 3.

//(getIndexToIns([40, 60], 50) should return 1. 
//(getIndexToIns([3, 10, 5], 3) should return 0.)
//--------------------------------------------------------------------------------//

//mutation - check str2 elements are there in str1. if yes - return true else false
function mutation(arr) {
  let str1 = arr[0].toLowerCase();
  let str2 = arr[1].toLowerCase();
  for(let i=0; i<str2.length; i++){
let letter = str2[i];
if(str1.indexOf(letter) == -1){
  return false;
}
  }
  return true;
}

mutation(["hello", "hey"]);

//--------------------------------------------------------------------------------//

//The function should return a new array containing the squares of only the positive integers (decimal numbers are not integers)

const squareList = arr => {
  // Only change code below this line
  let posInt = arr.filter(num => {
   //console.log(num)
   if(Number.isInteger(num) && num > 0) return num;
  }).map(val => {
   return (val * val)
 })
 return posInt
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);

//--------------------------------------------------------------------------------//
//Sort an Array Alphabetically using the sort Method

function alphabeticalOrder(arr) {
  // Only change code below this line
return arr.sort(function(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
  });
  // Only change code above this line
}

alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

//--------------------------------------------------------------------------------//

//NOTES
//The split method splits a string into an array of strings.


//--------------------------------------------------------------------------------//

// urlSlug("Winter Is Coming") should return the string winter-is-coming.
function urlSlug(title) {
return title
.split(' ')
.filter(word => {if(word != '')
  return word
}).join('-').toLowerCase()

}
// Only change code above this line
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");

//--------------------------------------------------------------------------------//

// question: Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {
  const newArr = arr1.concat(arr2);
  console.log(newArr.filter(elem => arr1.includes(elem) !== arr2.includes(elem)));
  
  
}

diffArray([1, 2, 3, 5,6], [1, 2, 3, 4, 5]);

//--------------------------------------------------------------------------------//


function destroyer(arr) {
  var args = Array.from(arguments);
  console.log(args)
  console.log(args[0], args[1], args[2])
  args.splice(0,1);
  //console.log('args aft splice applied, here splice removed args[0] index, splice(0,1)means, remove 1 element at 0th Index ', args);
  console.log('args are',arr);
  console.log('arr are', arr)
  return (arr.filter(num => {return args.indexOf(num) == -1}));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

//--------------------------------------------------------------------------------//

function translatePigLatin(str) {
  let result;
  let temp ='';
  let index = -1;
  let vol = ['a', 'e', 'i', 'o', 'u'];
  if(vol.includes(str[0])){
      result = str+'way'
  }
  else{
      for(let i=0; i<str.length; i++){
          //console.log(str[i]);
          if(!vol.includes(str[i])){
              temp = temp + str[i]
          }
          else{
              index = i;
              break;
          }
          
      }
      temp = temp + 'ay';
        console.log(index);
        if(index === -1){
            result = temp
        }
else{
  result = str.substring(index,str.length) + temp;
}
  }
  
  return result;
}

translatePigLatin("glove");

///



let n;
function sort(arr) {
for(let i=0; i<arr.length; i++){
    for(let j=0; j < n-i-1;j++){
   if(arr[j]> arr[j+1])     {
       let temp;
       temp = arr[j];
       arr[j] = arr[j+1];
        arr[j+1] = temp;
   }
   }
}
console.log() 
}

sort([4,8,22,87,60,9,6])

////--------------------------------------------------------------------------------//


//Search and Replace
//myReplace("Let us go to the store", "store", "mall") should return the string Let us go to the mall.
function myReplace(str, before, after) {
  let char = before.charAt(0);
  
  if(isUpperCase(char)){
  after = after.charAt(0).toUpperCase()  + after.slice(1);    
  } else{
      after = after.charAt(0).toLowerCase()  + after.slice(1);
  }
let out = str.includes(before);
console.log(after);
after = str.replace(before,after)
console.log(after);
}

function isUpperCase(ch){
    return (ch == ch.toUpperCase())
}
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
myReplace("His name is tom", "tom", "John");


//
//--------------------------------------------------------------------------------//
//DNA Pairing
// whenever A comes
//'A' = ['A', 'T']
// whenever T comes
// 'T' = ['T', 'A']
// whenever C comes
// 'C' = ['C', 'G']
// whenever G comes
// 'G' = ['G', 'C']

function pairElement(str) {
  let pairs = [];
  const strArr = str.split("");
  strArr.map(elem => {
    switch (elem) {
    case 'C':
      pairs.push(['C', 'G']);
      break;
    case 'G':
      pairs.push(['G', 'C']);
      break;
    case 'A':
      pairs.push(['A', 'T']);
      break;      
    case 'T':
      pairs.push(['T', 'A']);
      break;
    }
  })
  return pairs;
}  

pairElement("GCG");

////--------------------------------------------------------------------------------//
//Palindrome Checker

function palindrome(str) {
   str = str.toLowerCase();
   var newString = str.replace(/[^A-Z0-9]/ig, "");
  console.log(newString);
  if(newString === newString.split("").reverse().join("")){
    return true;
  }
    else{
return false;
    } 
  
}

palindrome("race car");
//--------------------------------------------------------------------------------//

//Roman Numeral Converter

function convertToRoman(num) { 
  if(num < 1){ return "";}
 if(num >= 1000){ return "M" + convertToRoman(num - 1000);}
 if(num >= 900){ return "CM" + convertToRoman(num - 900);}
 if(num >= 500){ return "D" + convertToRoman(num - 500);}
  if(num >= 400){ return "CD" + convertToRoman(num - 400);}
  if(num >= 100){ return "C" + convertToRoman(num - 100);}
  if(num >= 90){ return "XC" + convertToRoman(num - 90);}
  if(num >= 50){ return "L" + convertToRoman(num - 50);}
  if(num >= 40){ return "XL" + convertToRoman(num - 40);}
  if(num >= 10){ return "X" + convertToRoman(num - 10);}
  if(num >= 9){ return "IX" + convertToRoman(num - 9);}
  if(num >= 5){ return "V" + convertToRoman(num - 5);}
  if(num >= 4){ return "IV" + convertToRoman(num - 4);}
  if(num >= 1){ return "I" + convertToRoman(num - 1);}  
}
convertToRoman(36);

//--------------------------------------------------------------------------------//

//Caesars Cipher
//A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

 function rot13(str) {
    console.log(str);
    var alphabets =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'," ", "-", "_", ".", "&","?", "!", "@", "#", "/"];
    
    var alphabets13 = ['N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M', " ", "-", "_", ".", "&","?", "!", "@", "#", "/"];
    
    var resultStr = [];
    for(let i=0; i<str.length; i++){
        for(let j =0; j<alphabets.length; j++){
            if(str[i] === alphabets[j]){
            resultStr.push(alphabets13[j]);
            console.log(resultStr);
            }
        }
    }
    console.log(resultStr.join(""));
  };

  rot13("SERR CVMMN!");

  //--------------------------------------------------------------------------------//
function checkCashRegister(price, cash, cid) {
  let change = 0;
  let tot = 0;
  cid.forEach(val =>{
      tot += val[1]  ;
  });
  totalAmt = tot.toFixed(2);
  console.log('this is total amount', totalAmt);
  change = cash - price;
  change = change.toFixed(2);
  console.log('this is change', change);
  if(change > totalAmt){
      return {status: "INSUFFICIENT_FUNDS", change: []}
  }
  else if(change === totalAmt){
      //console.log('hi')
     return {status: "CLOSED", change: cid}
  }
  else{
      

  }
  return change;
}

console.log('response is', checkCashRegister(5.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

// ES5 - function as a class to create object with 'new' keyword 
//JavaScript uses functions as classes to create objects using the new keyword.
function Person(firstName, age) {
    // construct the object using the arguments
    this.firstName = firstName;
    this.age = age;
}
    Person.prototype.describe = function() {
        return this.firstName + " "+ this.age + " years old";
    }

 

var jack = new Person("Jack", 25);
var jill = new Person("Jill", 24);
console.log(jack.describe());
console.log(jill.describe());

// ES6 - Class
class Person {
    // construct the object using the arguments
   constructor(firstName, age){
   this.firstName = firstName;
    this.age = age;
}
    describe() {
        return this.firstName + " "+ this.age + " years old";
    }
}
 

var jack = new Person("Jack", 25);
var jill = new Person("Jill", 24);
console.log(jack.describe());
console.log(jill.describe());