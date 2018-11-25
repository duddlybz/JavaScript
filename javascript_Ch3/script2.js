//Global Execution Context
//Everything except for function blocks belong to Global Execution Context.
//Associated with the global object.
//In the browser, that's the windwo object
//so var star === window.star
/*
window.star = 32;
var star = 42; //it will change star value to 42
console.log(window.star);
console.log(star);
tree = window.star;
console.log(tree);
*/
//Execution Context
//Object
//Variable Object - variable declaration and function declaration
//Scope Chain - current variable object as well as variable object of all parents
//This variable - 
//When function is callled is put on top of execution stack through below two stpes. 
//Creation Phase - 
// Create of VO, create of Scope chaine, determining value of "this" variable
//Execution Phase - execute code of context, if is global context execute global code
//VO - function is created and set in the creation phase but
//     variables is created and set as undefined untill execution phase


/////////////////////////////////////
// Lecture: Hoisting

/*
// functions
calculateAge(1965);
function calculateAge(year) {
    console.log(2016 - year);
}
// retirement(1956);
var retirement = function(year) {
    console.log(65 - (2016 - year));
}
// variables
console.log(age);
var age = 23;
function foo() {
    console.log(age);
    var age = 65;
    console.log(age);
}
foo();
console.log(age);
*/



/////////////////////////////////////
// Lecture: Scoping

/*
// First scoping example
var a = 'Hello!';
first();
function first() {
    var b = 'Hi!';
    second();
    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
// Example to show the differece between execution stack and scope chain
var a = 'Hello!';
first();
function first() {
    var b = 'Hi!';
    second();
    function second() {
        var c = 'Hey!';
        third()
    }
}
function third() {
    var d = 'John';
    //console.log(c);
    console.log(a+d);
}
*/



/////////////////////////////////////
// Lecture: The this keyword

/*
//console.log(this);
calculateAge(1985);
function calculateAge(year) {
    console.log(2016 - year);
    console.log(this);
}
var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2016 - this.yearOfBirth);
        
        function innerFunction() {
            console.log(this);
        }
        innerFunction();
    }
}
john.calculateAge();
var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};
mike.calculateAge = john.calculateAge;
mike.calculateAge();
*/