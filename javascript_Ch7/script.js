// let and const

/*
// ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

// ES6
// Two types of varable declaration: 
// "const" for variable that we did not want to change
// "let" for variable that we may change the value later
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6); //Error because name6 is constant



// ES5
function driversLicence5(passTest) {


    if(passTest) {
        //console.log(firstName); // print undefined 
        var firstName = 'John';
        var yearOfBirth = 1990;
        //console.log(firstName + 'born in ' + yearOfBirth + 'is now officially allowed to drive a car.');
    }
    console.log(firstName + 'born in ' + yearOfBirth + 'is now officially allowed to drive a car.');
    //it is okay because variables are function scope
}

driversLicence5(true);

// ES6
function driversLicence6(passTest) {

    //console.log(firstName); // Error! unlike var you cannot access the let before its declared
    let firstName;
    const yearOfBirth = 1990; 

    if(passTest) {
        //let firstName = 'John';
        //const yearOfBirth = 1990;
        firstName = 'John';
        //yearOfBirth = 1990; Unlike above let, you cannot assign a value to a const in a block.
        //So assign a value outside of the scope is only possible option.

        //console.log(firstName + 'born in ' + yearOfBirth + 'is now officially allowed to drive a car.');
    }
    //console.log(firstName + 'born in ' + yearOfBirth + 'is now officially allowed to drive a car.');
    // It will generate an error because let & const are blocked scope. Only available in blocked area with two curly braces
    // firstName and yearOfBirth variables are no longer visible.
}

driversLicence6(true);



let i = 23;
for (let i = 0; i < 5; i++) {
    console.log(i); // 0 ~ 4 :i in the for loop is not the same as i at the outside
}
console.log(i);

*/

////////////////////////////////////////////////////////////////////
// Blocks and IIFEs in ES6

/*
//ES5
(function() {
    var c = 3;
})();

//ES6
{
    const a = 1;
    let b = 2;
    var c = 3;
}
// console.log(a + b); not accessible from outside
console.log(c);
 
*/

/////////////////////////////////////////////////////
// Strings ES6

/*
let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year){
    return 2016 - year;
}

//ES5

console.log('This is ' + firstName + '' + lastName + '. He was born in '+yearOfBirth+'. Today, he is '+ calcAge(yearOfBirth) +' years old.');

//ES6
// One big string with back tic " ` " and put variable or expression in the ${}. No more + operator
//similar to asp, jsp or php
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J')); //startsWith: return true if the string start with the given pattern
console.log(n.endsWith('th')); //endssWith: return true if the string ends with the given pattern
console.log(n.includes(' ')); //includes: return true if the includes the given pattern
console.log(firstName.repeat(5)); //repeat: repeat the value of variable as given number of times in a row
console.log(`${firstName} `.repeat(5)); // if you want to add additional space between each print use back tick like this

*/

/////////////////////////////////////////////////////
// Arrow function ES6
/*
const years = [1990, 1965, 1982, 1937];

// ES5
// map method: allows to navigate the arrary from current position till it reaches the end of an array. 
var ages5 = years.map(function(el) { 
    return 2016 - el;
}); //ages5 stores the result of calculate age by using map on years array
console.log(ages5); // result: [26, 51, 34, 79]

//ES6
// map method: allows to navigate the arrary from current position till it reaches the end of an array. 
// map method can have three argument like below.
// map(element: value of an element , index: , arrary: navigated arrary or original array) 
//const ages6 = years.map(el=> 2016 - el);
let ages6 = years.map(el=> 2016 - el);
console.log(ages6); //same result as above code

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);
console.log(ages6); //same result as above code

ages6 = years.map((el, index, arr) => { 
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}. ${arr}`
});
console.log(ages6);

*/

/////////////////////////////////////////////////////
// Arrow function 2 ES6
/*
//ES5
var box5 = {
    color: 'greeen',
    position: 1, 
    clickMe: function() {
        
        //var position = this.position;
        //var color = this.color;
        var self = this; //shorter and better way to handle this keyword
        document.querySelector('.green').addEventListener('click', function() {
            //only the this keyworld in the method is pointing the object where method belong
            //in this event listener callback function is inner function scope so this keyword pointing Window object instead of box5 object
            //var str = 'This is box number ' +  this.position + ' and it is ' + this.color;
            //var str = 'This is box number ' +  position + ' and it is ' + color;
            var str = 'This is box number ' +  self.position + ' and it is ' + self.color;
            alert(str);
        });
    }
}
//box5.clickMe(); 

//ES6
const box6 = {
    color: 'greeen',
    position: 1, 
    clickMe: function() {
        //var self = this; //shorter and better way to handle this keyword
        document.querySelector('.green').addEventListener('click', 
        () => { //arrow function shares a lexsical scope of this keyword
            let str = 'This is box number ' +  this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}
box6.clickMe(); 
*/

//replace function keyword with arrow in the method declaration
//won't work because arrow function shares the this keyword of surroundings. 
//Method declaration is the context of object so surroundings would be the Window object. 
//So generate this keyworld generate undefined because Window object does not have position or color attributes.
/*
const box6 = {
    color: 'greeen',
    position: 1, 
    clickMe: () => {
        //var self = this; //shorter and better way to handle this keyword
        document.querySelector('.green').addEventListener('click', 
        () => { //arrow function shares a lexsical scope of this keyword
            let str = 'This is box number ' +  this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}
box6.clickMe(); 
*/

/*
function Person(name) {
    this.name = name;
}

// ES5
Person.prototype.myFriends5 = function(friends) {
    //var self = this; 이것보다 bind를 써서 더 좋게 가능함
    var arr = friends.map(function (el) {
        return this.name + ' is friends with ' + el;
    }.bind(this));
    console.log(arr);
}

var friends = ['Bob', 'Jane','Mark'];
//new Person('John').myFriends5(friends);

// ES6
Person.prototype.myFriends6 = function(friends) {
    //arrow function does not hold it's own this keyword instead sharing this keyword of its' surroundings
    var arr = friends.map(el => 
        `${this.name} is friends with ${el}`
    );
    console.log(arr);
}

var friends = ['Bob', 'Jane','Mark'];
new Person('Park').myFriends6(friends);

*/









