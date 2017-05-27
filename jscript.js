/*
*Types(first class citizen)
*/
- undefined & null
- string
- number
- boolean
- object
/**/
var Tank = {
  ammo  : 5,
  level :2
}
//Prebuild object types
-Primitive equipvalent
- Array
var tank = [1,2,3,4];
console.log(tank.length);

- Date
var time = new Date();//current time on this machine
- Regex
- Error
//Type value
var a = 6;
typeof a;//Number
a = "Hello"
typeof a;//string

a = {
  name: "Mai"
}

typeof a;//object

/*
*First class function(function is a First class citizen)
*Function of programing
*/
- Function
function saySomething() {
  console.console.log("something");
}
saySomething();
// other way
var saySomething = function() {
  console.console.log("something");
}
saySomething();


function smell() {
  console.console.log("sweet");
}
//
var rose() = {};
rose.smell = smell;
rose.smell();
//

setTimeout(smell, 1000);//wait 1000ms then call smell()--smell is a parameter

function setTimeout(callback, waitTime){
  //wait for waitTime millisecond
  callback();
}

//function scope: a variable is used for all function

function countDown(time){
  var i = time;
  var j = i;
  while(time >= 0){
    setTimeout(function(){
      console.log(j--);
    }, (i--)*1000)
  }
}
countDown(5);
