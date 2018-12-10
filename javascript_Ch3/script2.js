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
//function이 declare되기 전에도 이미 hoisting에 의해서 variable section에 로딩이 되어 있어서 실행가능
calculateAge(1965);
function calculateAge(year) {
    console.log(2016 - year);
}
// retirement(1956);
//아래는 function declaration이 아니고 function expression이라서 
//위에서 실행하면 에러발생
var retirement = function(year) {
    console.log(65 - (2016 - year));
}
//retirement(1956);

// variables
//result: undefined. code가 scan되서 age라는 변수가 있는건
//확인이 되지만 출력문이 불리는 시점에 값이 할당되지 않았으므로
//변수 확인시 할당된 undefined값으로 출력됨
console.log(age); 
var age = 23;
//function은 자신만의 execution context가 있고, age는 그 범위안에 있음.
//따라서 첫 출력은 65, 다음은 23
function foo() {
    console.log(age); //바깥에 있는 age의 값은 여기서 접근불가하므로 undefined 출력
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
    //console.log(c); 에러 발생. b나 c는 다른 scope에 있기때문
    console.log(a+d);
}
*/



/////////////////////////////////////
// Lecture: The this keyword


//console.log(this); window object 내용을 print함
calculateAge(1985);
function calculateAge(year) {
    console.log(2016 - year);
    console.log(this); //window object 내용을 print함
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
//function overriding처럼 calculateAge의 기능만 가져오고 내용은 object Mike에 맞게 값이 나옴
mike.calculateAge = john.calculateAge;
mike.calculateAge();
