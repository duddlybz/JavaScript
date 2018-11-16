/*************************
* Variables and data types
*/

/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';

var age = 28;

var fullAge = true; 
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

var Years = 3;
var johnmark = 'John and Mark';

//Variable Naming rules
var jon3j = 'john';
var john, kk = 'sdfsdf';
console.log(kk);
console.log(john);
*/


/*************************
* Variables mutation and type coercion
*/
/*
var firstName = 'John';
var age = 28;
//type coercion. number into string
console.log(firstName+' '+age);

var job, isMarried;
job = 'teacher';
isMarried = false;
//type coercion. boolean into string
console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
//dynamic type conversion from number to string, or just modify value
age = 'twenty eight';
job = 'driver';
//alert will pop up small window with given string
alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

//prompt pop up small window for user to input some value. like scanner in the JAVA
var lastName = prompt('What is his last Name?');
console.log(firstName+' '+ lastName); 
*/

/*************************
* Basic Operators
*/
var now, yearJohn, yearMark, ageJohn, ageMark;
now = 2020;
ageJohn = 28;
ageMark = 33;

//If is repeated many times should declare as variable first.
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

//Math operators
console.log(now +2);
console.log(now *2);
console.log(now /10);

//Logic operators
var isJohnOlder = ageJohn > ageMark;
console.log(isJohnOlder);

var change = 'true';
