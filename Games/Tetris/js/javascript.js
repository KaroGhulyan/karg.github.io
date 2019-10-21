// function foo(num) {
//     return +num.toString().split('').reverse('').join('');
//     // var str = num.toString();
//     // var arr = str.split('');
//     // var reversed = arr.reverse('');
//     // var res = reversed.join('');
//     // return res;
// }
//                                             // ex-2
// function foo(str) {
//     var arr = str.split(' ');
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i][0].toUpperCase()+arr[i].slice(1);
//     }
//     return arr.join(' ');
// }
// console.log(foo("now im learn js"));
//                                         // ex-3



// function boo(str) {
//     let arr = str.split(' ');
//     let largest = " ";  
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i].length >= largest.length){
//             largest = arr[i];
//         }
//     }
//     return largest;
// }
// console.log(boo("I love Javascript"));

//                                             //ex-4;
// function goo(str) {
//     let arr = str.split(" ");
//     return arr.length;
// }
// console.log(goo("My name is Karo"));

                                                    //closer

// function f1(name) {
//     return function () {
//         alert(name);
//     }   
// }

// var func = f1("Karo");
// f1 = null;
// func();

// function f1(a) {
//     var x = a + 10;
//     function sum(b) {
//         return a + b + (x++);
//     }
//     return sum;
// }
// var res = f1(5);
// // res(20);
// // res(20);
// // res(20);
// // res(20);
// // res(20);
// // res(20);
// var result = res(20);
// console.log(result);
                                   //Factorial ex-1
// function f1(x) {
//     if(x <= 1){
//         return 1;
//     }
//     return x * f1(x - 1);
// }
// console.log(f1(5));
                                //ex-2
// function f1(arr) {
//     if (arr.length == 1) {
//         return arr[0];
//     }
//     return arr[0]+f1(arr.slice(1));
// }
// console.log(f1([1,2,3]));

// var arr = [1,2,3];
// var x = arr[0] + arr.slice(1);
// console.log(x);

                                        //ex-3

// function f1(n) {
//     if(n < 2){
//         return n;
//     }
//     return f1(n-1)+f1(n-2);
// }
// console.log(f1(6));
function almostIncreasingSequence(seq) {
  var bad=0
  for(var i=1;i<seq.length;i++) if(seq[i]<=seq[i-1]) {
    bad++
    if(bad>1) return false
    if(seq[i]<=seq[i-2]&&seq[i+1]<=seq[i-1]) return false
  }
  return true
}
console.log(almostIncreasingSequence([1,3,4,5,1]));
