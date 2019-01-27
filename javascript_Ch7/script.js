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

///////////////////////////////////////////
// Destructuring

/*
//ES5
var john = ['John',26];
//var name = john[0];
//var age = john[1];

//ES6
// Destructuring: write the element then assign the value for those element
const [name, age] = ['John',26];
console.log(name);
console.log(age);

const obj = {
    firstName: 'John',
    lastName: 'Smith'
};
//for object destructuring using curley braces and put elment in it then assign the obj to it.
const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);
//alias to elment name is possible like below
const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);


//ES5
 
function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

const [age2, retirement]  = calcAgeRetirement(1990);
console.log(age2);
console.log(retirement);

*/

////////////////////////////////////////////
// Arrays

/*
// box 클래스에 속한 html 엘리먼트를 모두 불러옴
const boxes = document.querySelectorAll('.box');

//ES5 

// box 클래스에 속한 html 엘리먼트들을 array object의 slice함수로 잘라서 넣는다.
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur) {
    cur.style.backgroundColor = 'dodgerblue';
});

const boxes = document.querySelectorAll('.box');
//ES6 
Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');


const boxes = document.querySelectorAll('.box');
//ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur) {
    cur.style.backgroundColor = 'dodgerblue';
});

for(var i= 0; i < boxesArr5.length ; i++) {
    if(boxesArr5[i].className === 'box blue') {
        continue;
    } 
    boxesArr5[i].textContent = 'I changed to blue';

}


//ES6 
// for of loop
const boxes = document.querySelectorAll('.box');
const boxesArr6 = Array.from(boxes)
for (const cur of boxesArr6) { //cur 는 아무렇게나 지정해도 되고 array에서 현재 탐색할 엘리먼트 이름
    if (cur.className.includes('box blue')) { // for문의 i와 동일한 기능
        continue;
    }
    cur.textContent = 'I changed to Yellow';
}


// ES5
var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function(cur) {
    return cur >= 18;
});
console.log(full); //find the full age elment and its' index number
console.log(full.indexOf(true)); 
console.log(ages[full.indexOf(true)]);

//ES6
// returns the index of an element which is bigger then 18
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));

*/

/////////////////////////////////////////////
//  Spread operator 
/*
function addFourAges (a, b, c, d) {
    return a + b + c + d;
}

var sum1 = addFourAges(18,30,12,21);
console.log(sum1);

//ES5
var ages = [18,30,12,21];
//this is reqired to use apply but we use null instead
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

//ES6
// ... is spread operator: it will spread array by its each element so that you can pass entire
// element to the function without the apply, bind or call method
const sum3 = addFourAges(...ages);
console.log(sum3);

const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];
//const bigFamily = [...familySmith, ...familyMiller];
//console.log(bigFamily);
//(6) ["John", "Jane", "Mark", "Mary", "Bob", "Ann"]
const bigFamily = [...familySmith, 'Lily', ...familyMiller]; //중간에 다른 엘리먼트를 끼워 넣을수도 있음
console.log(bigFamily);
//(7) ["John", "Jane", "Mark", "Lily", "Mary", "Bob", "Ann"]

// In case of we want to change the text color of heading and boxes,
// In ES5 we do it seperately for each heading and boxes
// , however in ES6 we can simply pass everything with spread operator and change like below
// Arrary from method and put combined arrary and then use arraow operator to assign the statement or multiple statements.
const h = document.querySelector('h1'); //select by element name
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];

Array.from(all).forEach(cur => cur.style.color = 'purple');
*/

////////////////////////////////////////////////
// Rest parameters
// exact opposite from ... operator
/*
// ES5
//arguments are the reserved keyworld for passed arguments
function isFullAge5() { //arguments looks like array but not an array it's an object has similar structure as arrary
    //console.log(arguments);
    var agrgsArr = Array.prototype.slice.call(arguments);

    agrgsArr.forEach(function(cur) {
        console.log((2016 - cur) >= 18);
    })
}

//isFullAge5(1990, 1999, 1965);
//isFullAge5(1990, 1999, 1965, 2016, 1987);

//ES6
function isFullAge6(...years) { 
//if you using spread operator in the argument section, 
//it will automatically transform to what will come
    console.log(years);
    years.forEach(cur => console.log((2016 - cur) >= 18));
}

isFullAge6(1990, 1999, 1965, 2016, 1987);


// ES5
function isFullAge5(limnit) { 
    //console.log(arguments); //Arguments(4) [21, 1990, 1999, 1965,
    //second parameter is the index where we want to slice and copy element from the arrary
    console.log(limnit);
    var agrgsArr = Array.prototype.slice.call(arguments, 1); 
    //console.log(agrgsArr); //(3) [1990, 1999, 1965]
    agrgsArr.forEach(function(cur) { 
        console.log((2016 - cur) >= limnit);
    })
}

//isFullAge5(16, 1990, 1999, 1965);
//여러 parameter를 넘겨줬는데 함수에서 limit이라는 arrary가 아닌 변수로 받으면 첫번째 원소인
//16이 limit으로 들어가고 나머지는 argments에 남아 있는데 그걸 이용해서 
//처음 원소는 나이기준이 되는 limit으로 설정하고, 나머지는 arguments를 slice해서 두번째 원소부터 받아서
//성년인지 판별할 데이터로 사용한다.
//isFullAge5(1990, 1999, 1965, 2016, 1987);

//ES6
//ES5와 다르게 첫 원소는 limit으로 받고 나머지는 rest 파라미터로 받아서 배열로 사용한다.
function isFullAge6(limit, ...years) { 
//if you using spread operator in the argument section, 
//it will automatically transform to what will come
    console.log(years);
    years.forEach(cur => console.log((2016 - cur) >= limit));
}

isFullAge6(16, 1990, 1999, 1965, 2016, 1987);

//Rest operator는 함수의 정의부에서 arguments 받는 타입에 spread처럼 ...을 사용하면 들어오는 원소를 갯수나 형태에 상관없이 받아서 arrary처럼 합치는 기능
// 반면 spread operator는 함수의 call부분에서 parameter로 넘겨줄때 배열등의 dataset을 ...으로 넘겨주면
// 함수가 받을 때, 자동으로 slice되어 전달되어서 함수가 미리 설정해 놓은 argument타입과 수에 맞게 알아서 받아짐.
// 그래서 서로 정반대의 작용을 한다고 한듯.

*/

////////////////////////////////////////////////////////////////
// Default parameters
/*
//ES5

function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
    
    //if lastName is not defined then smith will be default value for it. 
    //Implement default parameter in the ES5
    lastName === undefined ? lastName = 'Smith' : lastName;
    nationality === undefined ? nationality = 'American' : nationality; 

    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth; 
    this.nationality = nationality;
}
//javascript allows us to leave parameter blank then it will automatically become undefined
var john = new SmithPerson('John', 1990, 'Park');
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish');
console.log(john);
console.log(emily);


//ES6
// We can simply mention the default parameter in the declaration part of parameter like below
// no need to use if or ternary operator
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'American') {

    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth; 
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1990, 'Park');
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish');
console.log(john);
console.log(emily);

*/

/////////////////////////////////////////////////////////////////////
//  Maps
//totally new in ES6
/*
const question = new Map();
question.set('question', 'What is the official name of the latest major Javascript vesion?');
question.set(1, 'ES5'); //set: add the certain set to the map
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('answer', 3);
question.set(true, 'Correct answer :D')
question.set(false, 'Wrong, Please try again!!');

console.log(question.get('question')); //get: retreive certain set from the map
//console.log(question.size);

if(question.has(4)){ // has: if certain key in the map
    //question.delete(4); //delete: delete the certain set from the map
    //console.log('Answer 4 is here');
}

//question.clear(); //clear: empty the whole map 

//question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`));

for (let [key, value] of question.entries()) {
//another destructuring example
//This will also work with arrays
    //console.log(`This is ${key}, and it's set to ${value}`);
    if(typeof(key) === 'number') { //function that check the type of the variable
        console.log(`Answer ${key}: ${value}`);
    }
}

const ans = parseInt(prompt('Write the correct answer!'));
console.log(question.get(ans === question.get('answer')));

//Why Maps better then object when building hasmap dataset( key with the value)
// 1. Key can be anything
// 2. Maps are iterable easily manipulate with for each
// 3. Easy to get the size of the map with just using size method
// 4. easily add or remove data from the map

*/

/////////////////////////////////////////////////////////////////
// Classes
// Add nothing in language but synthetic changes
// Makes it easier to implement inheritence to create object based on blueprint(function constructor)

// ES5
/*
var Person5 = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    
    //function calcAge() { 
    //    var age = new Date().getFullYear() - yearOfBirth;
    //    console.log(age);
    //}

}

Person5.prototype.calcAge = function(){
    var age = new Date().getFullYear - yearOfBirth;
    console.log(age);
}


var john5 = new Person5('John', 1990, 'teacher');

//ES6
// 기존의 생성자 함수로 생성하는 object는 prototype으로 method를 따로 설정해주지 않으면
// instance한테 method가 상속이 되지 않았는데, 
// class는 기존에 내가 알던 java의 class처럼 선언하면서 설정한 method가 상속됨
// Static으로 설정한 함수는 상속이 안됨. 그냥 Class.스태틱함수() 인럭식으로만 사용가능
// 1. Class definition are not hoisted, so we can furst declare then use it
// 2. Only inheriting method not properties

class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calcAge() {
        var age = new Date().getFullYear() - yearOfBirth;
        console.log(age);
    }

    static greeting() { //Static method is not going to interitated
        console.log('Hey there!!');
    }
}

const john6 = new Person6('John', 1990 ,'teacher');
Person6.greeting();

// 1. Class definition are not hoisted, so we can furst declare then use it
// 2. Only inheriting method not properties

*/

//////////////////////////////////////////////////////////////
// Classes and sub-classes
/*
// ES5
var Person5 = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calcAge = function(){
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var Athlete5 = function(name, yearOfBirth, job, olympiicGames, medals) {
    Person5.call(this, name, yearOfBirth, job); //this is for Athelete
    this.olympiicGames = olympiicGames;
    this.medals = medals;
}
//Person5 is super class, Athelete5 is subclass
Athlete5.prototype = Object.create(Person5.prototype);
Athlete5.prototype.wonMedal = function() {
    this.medals++;
    console.log(this.medals);
}

var johnAthlete5 = new Athlete5('John', 1990, 'Swimmer', 3, 10);

johnAthlete5.calcAge();
johnAthlete5.wonMedal();

// ES6
class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calcAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
}

class Athelete6 extends Person6 {
    constructor (name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job); // call the constructor of the super class
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedal() {
        this.medals++;
        console.log(this.medals);
    }
}

const johnAthlete6 = new Athelete6('John', 1990, 'Swimmer', 3, 10);
johnAthlete6.calcAge();
johnAthlete6.wonMedal();

// johnAthlete6 의 prototype chain
// johnAthlete6 { 
//        Athlete6 {Properties, __Proto__: Person6 { wonMedal(), __Proto__: Object {calcAge() } }
//          
//        }
//  johnAthlete6는 Athlete6의 인스턴스고, 내부는 Athlete6의 프로퍼티들과, Athlete6 전용 method, 그리고 Superclass인 Person6의 method 순으로 내려감
*/

////////////////////////////////////////////////////////////////////////
/// coding challenge

/*
Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small townm so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following: 
1. Tree denstiny of each park in the town (formula: number of trees/park area)
2. Average age of each town's park (fomula: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees.
4. Total and average lenth of the town's streets
5. Size classification of all streets: tyny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console. 

Hint: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.)



class Strucures {
    constructor (name, buildYear) {
        this.name = name;
        this.buildYear  = buildYear;
    }
}

class Park extends Strucures {
    constructor (name, buildYear, numTrees, area) {
        super(name, buildYear);
        this.numTrees = numTrees;
        this.area = area; //km2
        //this.age = new Date().getFullYear() - buildYear;
        
    }
    treeDensity() {
        this.density = this.numTrees / this.area;
        console.log(`${this.name} has a tree density of ${this.density} trees per square km.`);
    }
}

class Street extends Strucures {
    constructor (name, buildYear, length, size = 3) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }

    classifyStreet () {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`${this.name}, build in ${this.buildYear}, is a ${classification.get(this.size)} street.`);
    }
}

const allParks = [new Park('Green Park', 1990, 10000, 0.5), new Park('National Park', 2001, 4000, 0.3), 
                                                                  new Park('Oak Park', 1970, 8000, 0.7)];
const allStreets = [new Street('Ocean Avenue', 2000, 1, 4), new Street('Evergreen Street', 2000, 1.2, 2), 
                            new Street('4th Street', 2000, 2.05), new Street('Sunset Boulevard', 2000, 2.08, 5)  ];


function calc(arr) {
    //arr.forEach(el => )
    const sum = arr.reduce((prev, current, index) => prev + current, 0);

    return [sum,  sum / arr.length];
}


function repotPark(p) {

    console.log('==============PARK REPORT===============');
    p.forEach(el => el.treeDensity());
    const ages = p.map(el => new Date().getFullYear() - el.buildYear);
    const [totalAge, avgAge] = calc(ages);
    console.log(`Our ${p.length} Park have an average age of ${avgAge} years.`);

    const i = p.map(el => el.numTrees).findIndex(el => el >= 5000);
    console.log(`${p[i].name} has more then 5000 trees`);

}

function repotStreet(s) {
    console.log('==============STREET REPORT===============');
    const [totalLength, avgLength] = calc(s.map(el => el.length));
    console.log(`Our ${s.length} Streets have a total length of an ${totalLength} km, with an average of ${avgLength} km.`);
    
    s.forEach(el => el.classifyStreet());

}

repotPark(allParks);
repotStreet(allStreets);

*/





































