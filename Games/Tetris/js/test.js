// import { log } from "util";

//                                             // ex -1

// let student = {
//     name:"Karo",
//     lastname:"Ghulyan",
//     age: 25,
// }
// let res = Object.keys(student);
// for (let i = 0; i < res.length; i++) {
//     console.log(res[i]);    
// }
//                                         // ex-2

//   let student = {
//     name:"Karo",
//     lastname:"Ghulyan",
//     age: 25,
// }
// delete student.age;

// let res = Object.keys(student);

// for (let i = 0; i < res.length; i++) {
//     console.log(res[i]);    
// }
//                                             // ex-3

// let student = {
//     name:"Karo",
//     lastname:"Ghulyan",
//     age: 25,
// }
// let res = Object.keys(student);
// console.log(res.length);



//                                                 // ex-4

// var library = [ 
//     {
//         title: 'Bill Gates',
//         author: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         title: 'Steve Jobs',
//         author: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         title: 'Mockingjay: The Final Book of The Hunger Games',
//         author: 'Suzanne Collins',
//         readingStatus: false
//     }];

// for (var i = 0; i < library.length; i++) 
//    {
//     var book = library[i].title + " "+ library[i].author + " " + library[i].readingStatus; 
//      console.log(book);
// }

//                                                     // ex-5

// class Cylindre{
//     constructor(radius,height){
//         this.radius = radius;
//         this.height = height;        
//     }
//     v(){
//         return (Math.PI * this.radius * this.radius * this.height);
//     }
// }
// let cylindre = new Cylindre(10,5);
// console.log("V = " + cylindre.v().toFixed(0));



//ex-6

// Array.prototype.bubbleSort_algo = function() {
// var is_sorted = false;
//  while (!is_sorted) 
//  {
//     is_sorted = true;
//     for (var n = 0; n < this.length - 1; n++) {
//       if (this[n] > this[n+1]){
//         var x = this[n+1];
//         this[n+1] = this[n];
//         this[n] = x;
//         is_sorted = false;
//       }
//     }
//   }
//   return this;
// };

// console.log([6,4,0, 3,-2,1].bubbleSort_algo());

// let inputArray = ["aba", "aa", "ad", "vcd", "aba"];
// function allLongestStrings(inputArray){
//   let arr = [];
//   for (let i = 0; i < inputArray.length; i++) {
//     arr = inputArray[i];
//     if (inputArray[i].length > arr.length) {
//       return inputArray[i];
//     }
//   }
// }
// ;
// function commonCharacterCount(s1, s2) {
//     let count =0;
//     for (var i = 0; i < s1.length; i++) {
//         if(s1[i] === s2[i]){
//             return s1[i];
//         }        
//     }
// }
// console.log(commonCharacterCount("aabcc","adcaa"));







// ex-1

// function triangleArea(a,b,c) {
//     return a * b * c * 0.5;
// }
// console.log(triangleArea(5,6,7));

//ex-2
/* 2. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

    To determine whether a year is a leap year, follow these steps :

    Step-1 : If the year is evenly divisible by 4, go to step 2. Otherwise, go to step 5.
    Step-2 : If the year is evenly divisible by 100, go to step 3. Otherwise, go to step 4.
    Step-3 : If the year is evenly divisible by 400, go to step 4. Otherwise, go to step 5.
    Step-4 : The year is a leap year (it has 366 days).
    Step-5 : The year is not a leap year (it has 365 days).*/


// function yearFunc(year) {

//     if(year % 4 == 0 ){
//         if(year % 100 == 0){
//             if(year % 400 ==0){
//                 alert("The year is a leap year (it has 366 days).");
//             }else{
//                 alert("The year is not a leap year (it has 365 days).")
//             }

//         }else{
//             alert("The year is a leap year (it has 366 days).");
//         }

//     }else{
//         return alert("The year is not a leap year (it has 365 days).")
//     }
// }
// yearFunc(prompt("Please select year"));

// ex-3

// var today = new Date();
// var newYear = new Date(today.getFullYear(), 12, 1);
// var oneDay=1000*60*60*24;

// console.log(Math.ceil((newYear.getTime()-today.getTime())/(oneDay))+
// " days left until Christmas!");


//ex-4

// function retNumb(number) {
//     let dif = number - 13;
//     if (dif > 13) {
//         return dif * 13;
//     }
//     return false;
// }
// console.log(retNumb(30));

//ex-5
// let twoNumb = (a,b) =>{

//     let x = (a == b) ?  3 * (a + b): false;
//     return x;

// }
// console.log(twoNumb(10,10));


//ex-6

// let absoluteDifference = x => {
//     let n = (x > 19) ? Math.abs((19-x) * 3) : 19 - x;
//     return n; 
// }
// console.log(absoluteDifference(15));


//ex-6


// let checker = (x,y) => x == 50 || y == 50 || x + y ==  50;
// console.log(checker(30,30));

//ex-7

// let checker = x => x >= 20 && x <= 100 || x >= 20 && x <= 400;
// console.log(checker(100));

//ex-8


// let checkNumb = (x,y) => x>0 && y<0 || x<0 && y>0;
// console.log(checkNumb(-10,10));

//ex-9

// function stringRemover(string, position) {
//     let arr = string.split('');
//     arr.splice(position, 1);
//     return arr.join('');
// }
//ex-9
/*
 Write a JavaScript program to create a new string from a given string with the first character of the given string added at the front and back.

*/
//  function stringPos(string) {
//      let arr = string.split('');
//      let n = arr[0];
//      arr.unshift(n);
//      arr.push(n);
//      return arr.join('')
//  }

//ex-10


// let checker = n => n % 3 || n % 7;

//ex-11 
/*
        Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back.
        The string length must be 3 or more.
   */

// function stringPos(string) {
//     let x = [];
//     if(string.length >= 3){
//         let arr = string.split('');
//         let arr3 = arr[arr.length -1] + arr[arr.length - 2] + arr[arr.length - 3];
//         x.push(arr3);
//     }
//     return x;
// }
// console.log(stringPos("Ghulyan"));

//ex-12
/*
        Write a JavaScript program to check if a string starts with 'Java' and false otherwise.
   */

// let checkerString = s => s.substr(0,4) === "Java";

//ex-13

// Write a JavaScript program to check if a string "Script" presents at 5th (index 4) position in a given string, 
// if "Script" presents in the string return the string without "Script" otherwise return the original one

//  function checkString(string) {
//      let arr = string.split(' ');
//      for (let i = 0; i < arr.length; i++) {
//          if (arr[4] === "Script") {
//                arr.splice(4,1);
//                return arr.join(' ');
//          }

//      }
//      return arr.join(' ');
//  }
//  console.log(checkString("Privet kak dela im Script axper"));

//ex-14

/*
    Write a JavaScript program to find the largest of three given integers
*/
// ​
// function maxNumber(a,b,c) {
//     return Math.max(a,b,c);
// }

//ex-15

// let foo = (x,y) => {
//     let n = (Math.abs(x-100)<Math.abs(y-100)) ?  x :  y;
//     return n;
// }
//ex-16


// let str = "Karo";
// let x = [...str];
// alert(x[0]);

// let str = "karo";
// let x = Array.from(str);

// function makeCounter() {
//     let count = 0;

//     return function() {
//       return count++; // есть доступ к внешней переменной "count"
//     };
//   }

//   let counter = makeCounter();

//   alert( counter() ); // 0
//   alert( counter() ); // 1
//   alert( counter() ); // 2

// let user = {
//     name: "John"
//   };

//   let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

//   alert( JSON.stringify(descriptor, null, 2 ) );


// function sortByHeight(a) {
//     for(i = 0;i < a.length;i++){
//         if(a[i] == -1){
//             return a.sort()
//         }
//     }
// }
// console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));


// let str = "html and css";
// let result = str.replace(/html|css/gi,str => str.toUpperCase());
// alert(result);


// function sortByHeight(a) {
//     let arr = [];
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] !== -1) {
//             arr.push(a[i]);
//         }
//     }
//     console.log(arr);
//     arr.sort((x, y) => { return x - y });
//     console.log(arr);
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] === -1) {
//             continue;
//         } else {
//             a.splice(i, 1, arr.shift())
//         }
//     }
//     return a

// }
// console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));


//rest operator
// function max(...numbers) {
//     console.log(numbers);
// }
// max(1, 2, 3)

// spread operator

// let arr = [1, 2, 3];
// let res = Math.max(...arr);
// console.log(res);

// let arr = [1, 2, 3];
// let arr1 = [6, 4, 5];
// let res = Math.max(...arr, ...arr1);
// console.log(res);
//arr copy
// arrcopy
// let arr = [1, 2, 3];
// let shellCopy = [...arr];
// console.log(shellCopy);

//destructition

// const user = {
//     firstName: "Karo",
//     lastName: 'Ghulyan',
//     age: 27
// }
// const { firstName, lastName } = user;
// console.log(firstName, lastName);


// const user = {
//     firstName: "Karo",
//     lastName: 'Ghulyan',
//     age: 27
// }
// const copy = Object.assign({}, user);
// console.log(copy);
// copy.firstName = "asdasdsa";
// console.log(copy);
// console.log(user);

//Object Spread

// const user = {
//     firstName: "Karo",
//     lastName: 'Ghulyan',
// }
// const dev = {
//     firstName: "adasds",
//     lastName: 'Ghulyan',
//     age: 27
// }
// const copy = { ...user, ...dev };
// console.log(copy);


// class Animal {
//     constructor(name, voice) {
//         this.name = name;
//         this.voice = voice;
//     }
//     say() {
//         console.log(this.name + this.voice);
//     }
// }

// class Bird extends Animal {
//     constructor(name, voice, canFly) {
//         super(name, voice);
//         super.say();
//         this.canFly = canFly;

//     }
// }

// let x = new Bird("Eagle", "Ptsiiiii", true);

// x.say();

// class Counter {
//     count = 1;
//     inc = () => {
//         this.count++;
//         console.log(this.count);

//     }
// }

// const cnt = new Counter();
// console.log(cnt.count);
// cnt.inc();
// setTimeout(cnt.inc, 1000)

// function alternatingSums(a) {
//     let firstTeamSum = 0;
//     let secondTeamSum = 0;
//     a.forEach((item, i) => {
//         if (!i || i % 2 === 0) {
//             firstTeamSum += item;
//         } else {
//             secondTeamSum += item;
//         }
//     })
//     return [firstTeamSum, secondTeamSum];
// }


// console.log(alternatingSums([[50, 60, 60, 45, 70]]));
let picture = ["abc",
    "ded"];
function addBorder() {
    for (let i = 0; i < picture.length; i++) {
        var x = picture[i].toString();
        x.push("dasdsa");

    }
    return x;
    // picture.push("*****");
    // picture.unshift("*****");
}
console.log(addBorder());
