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

/*
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

//"typeof" operator
console.log(typeof isJohnOlder); //boolean
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
*/

/*************************
* Operators Precedence (우선순위 인듯)
*/
/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

//Multiple operator
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

//OPerator precedence table 
//Top of table has most highest priority(20)
//precedence value of - operator is greater than >= (16 vs 11) so above sentence execute correctly
//assignment operator has almost lowest value of priority

//Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) /2;
console.log(average);

//Multiple assignment
var x, y;
x = y = (3 + 5) * 4 -6; //8*4-6//32-6//26
console.log(x, y);
//assignment operator has associativity of right to left, so above sentence work just fine. Majority of opearator has associativity of left to right like math operator.

//More operators
x *= 2;//same as x = x * 2; 
console.log(x);
x += 10; //x = x + 10;
console.log(x);
x++; //same as x = x + 1; x += 1;
*/

/*************************
* Coding Challenge1
*/
/*
var JohnMass = 80;
var MarkMass = 90;
var JohnHeight = 1.8;
var MarkHeight = 1.9;

var BMIJohn = JohnMass / (JohnHeight*JohnHeight);
var BMIMark = MarkMass / (MarkHeight*MarkHeight);

var isBMIMarkHiger = BMIMark > BMIJohn;
console.log('BMI John '+BMIJohn,'BMI Mark '+BMIMark);
//console.log('BMI Mark'+BMIMark);
console.log('Is Mark BMI higher than John'+"'s?"+isBMIMarkHiger);
//Brackets에서는 '앞에 \를 붙여서 일반 캐릭터로 쓰기 가능한데 vscode는 안됨. 문자열 나눠야함. 
//console.log('Is Mark BMI higher than John\'s?'+isBMIMarkHiger);
*/

/* number^2 == number * number 여야 하는데 앞에꺼는 소수점이 짤림. 뒤에꺼는 그대로 나옴. 뒤에꺼를 써야 할듯
var pow = JohnHeight^2; 
var normal = JohnHeight*JohnHeight;
console.log(typeof pow);
console.log(typeof normal);
*/

/*************************
* If /else statements
*/

/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married');
}else {
    console.log(firstName+' will hopefully marry soon :)');
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married');
}else {
    console.log(firstName+' will hopefully marry soon :)');
}

var JohnMass = 80;
var MarkMass = 90;
var JohnHeight = 1.8;
var MarkHeight = 1.9;

var BMIJohn = JohnMass / (JohnHeight*JohnHeight);
var BMIMark = MarkMass / (MarkHeight*MarkHeight);

if (BMIMark > BMIJohn){
    console.log('Mark'+"'s"+' BMI is greater than John'+"'s");
} else {
    console.log('John'+"'s"+' BMI is greater than Mark'+";'s");
}

*/

/*************************
* Boolean logic
*/
/*
var firstName = 'John';
var age = 30;

if(age < 13){
    console.log(firstName + ' is a boy.');
} else if(age >= 13 && age <20) {
    // Between 13 and 20. 
    console.log(firstName + 'is a teenager.');
} else if(age >=20 && age <30) {
    // Between 20 and 30. 
    console.log(firstName + 'is a young man.');
} else {
    console.log(firstName + ' is a man.');
}
*/

/*************************
* The Ternary Operator and Switch Statements
*/

/* for simple decision ternary operator is better than this. 
if(age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}
*/

/*
var firstName = 'John';
var age = 16;

//Ternary Operator
age >=18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(firstName + ' drinks ' + drink);



// Switch statement
var job = 'instructor'; //policeman, instructor
switch (job){
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'desiner':
        console.log(firstName + ' designes beautiful website.');
        break;
    default:
        console.log(firstName + ' does something else.');
}

// convert if into switch
if(age < 13){
    console.log(firstName + ' is a boy.');
} else if(age >= 13 && age <20) {
    // Between 13 and 20. 
    console.log(firstName + 'is a teenager.');
} else if(age >=20 && age <30) {
    // Between 20 and 30. 
    console.log(firstName + 'is a young man.');
} else {
    console.log(firstName + ' is a man.');
}


var firstName = 'John';
var age = 20;
//if you want to put the result of logical expression in th case clause put 'true' on the switch clause. So that it will examine if the result of logical expression in the case is true or not.
switch (true){
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age <20:
        console.log(firstName + 'is a teenager.');
        break;
    case age >= 20 && age <30:
        console.log(firstName + 'is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}
*/

/*************************
* Truthy and Falsy values and equality operators
*/
//when it evaulated in the if statement falsy values determined as false
// falsy values: undefined, null, 0, '', NaN(not a number)
// truthy values: NOT falsy values

/*
var height;

height = 23;
//height = ''; 
//height = 0; This is considered as falsy value unless additional expression like 'height === 0'.

if(height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
} 

// Equality operators
if(height == '23'){ //automatically convert string into number
    console.log('The == operator does type coercion!');
}
//to compare more accurate use === eqaul rather than == because == automatically does type coercion!!
*/

/************************************
 *  Coding Challenge 2
 */
/*
var teamJohn1st, teamJohn2nd, teamJohn3rd;
var teamMike1st, teamMike2nd, teamMike3rd;
var teamMary1st, teamMary2nd, teamMary3rd;

teamJohn1st = 114;
teamJohn2nd = 120; 
teamJohn3rd = 103;

teamMike1st = 120;
teamMike2nd = 94;
teamMike3rd = 123;

teamMary1st = 97;
teamMary2nd = 134;
teamMary3rd = 105;

var avgScoreTeamJohn = (teamJohn1st + teamJohn2nd + teamJohn3rd)/3;
var avgScoreTeamMike = (teamMike1st + teamMike2nd + teamMike3rd)/3;
var avgScoreTeamMary = (teamMary1st + teamMary2nd + teamMary3rd)/3;
console.log(avgScoreTeamJohn, avgScoreTeamMike, avgScoreTeamMary);

switch(true){
    case avgScoreTeamJohn > avgScoreTeamMike && avgScoreTeamJohn > avgScoreTeamMary:
        console.log('Winner is Team John');
        break;
    case avgScoreTeamMike > avgScoreTeamJohn && avgScoreTeamMike > avgScoreTeamMary:
        console.log('Winner is Team Mike');
        break;
    case avgScoreTeamMary > avgScoreTeamJohn && avgScoreTeamMary > avgScoreTeamMike:
        console.log('Winner is Team Mary');
        break;
    default:
        console.log('Draw');

}
*/

/************************************
 *  Functions
 */
/*
function calculateAge(birthYear){
    return 2018 - birthYear;
}
var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);

function yearUntilRetirement(year, firstName){
    var age = calculateAge(year);
    var retirement = 65 - age;
    if(retirement >0){
    console.log(firstName + ' retires in ' + retirement +' years.');
    } else {
        console.log(firstName + ' is already retired.');
    }

}

yearUntilRetirement(1990, 'John');
yearUntilRetirement(1948, 'Mike');
yearUntilRetirement(1969, 'Jane');
*/

/************************************
 *  Functions Statements and Expressions
 */
/*
 //Function declaration
 //function whatDoYouDo(job, firstName) {}

 //Function expression
 var whatDoYouDo = function(job, firstName){
    switch(job) { 
        //do not need a break because of 'retur' keyword
        case 'teacher':
            return firstName + ' teachers kids how to code';
        case 'driver':
            return firstName + ' drives a cab in Lisbon';
        case 'designer':
            return firstName + ' designs beautiful websites.';
        default:
            return firstName + ' does something elese';
    }
 } 

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));
//expression return result immediately, statement dose not.
//function expression return produce immediate result but function declaration dose not
*/

/************************************
 *  Arrays
 */

 /*
// Initialize new array
var names = ['John','Mark','Jane']; //index start from 0
var years = new Array(1990,1969,1948);

console.log(names[0]);
console.log(names);
console.log(names.length); //how many elemnets in the array
//switch elements in the array
names[1] = 'Ben';
//Mutate array data
//adding mary into further then defined index
names[5] = 'Mary';
console.log(names);
// Different data tyes
var john = ['john','Smith',1990,'designer',false]; 
//add an element at the end of arrary
john.push('blue');
//add an element at the first of arrary
john.unshift('Mr.');
//remove an element at the end of an arrary
john.pop();
//remove an element at the first of an arrary
john.shift();

console.log(john);
//indexOf operator return -1 if there is no such elements match with the input.
console.log(john.indexOf(23));

var isDesigner =  john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John is a designer';
console.log(isDesigner);
*/

/************************************
 *  Coding Challenge3
 */
//tip 20% when value < 50, 
//tip 15% when 50 < value < 200
//tip 10% when value > 200 
//array containing all three tips
//array containing all three final paid amount
/*
var priceOfMeals = [124, 48, 268];

var tips = [];
var toatlPrice = [];

function calculateTips(original){
    var tips;
    if(original < 50){
        tips = original*0.2;
    }else if(original >= 50 && original < 200){
        tips = original*0.15;
    }else {
        tips = original*0.1;
    }
    return tips;
}

tips.push(calculateTips(priceOfMeals[0]));
tips.push(calculateTips(priceOfMeals[1]));
tips.push(calculateTips(priceOfMeals[2]));

toatlPrice.push(tips[0]+priceOfMeals[0]);
toatlPrice.push(tips[1]+priceOfMeals[1]);
toatlPrice.push(tips[2]+priceOfMeals[2]);

console.log(tips);
console.log(toatlPrice);
*/

/************************************
 *  Objects and properties
 */
/*
var john = {
    //Key Values, properties
    firsnName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane','Mark','Bob','Emily'],
    job: 'teacher',
    isMarried: false
};
console.log(john);
console.log(john.birthYear); //using properties by '.' notation
console.log(john['lastName']); //using bracket to access properties
var x = 'birthYear';
console.log(john[x]); //use variable value as a index to access properties
//Mutate object's properties value
john.job = 'designer';
john['isMarried'] = true;
console.log(john);

//create an empty object
var jane = new Object(); 
//add properties seperately
//. 을 사용해서 엑세스 하는 방식으로 프로퍼티 추가하거나 
// []을 사용해서 엑세스 하는 방식으로 프로퍼티 추가
jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith'; //add property type string
jane.firstname = 'tmith';
console.log(jane);
*/

/************************************
 *  Objects and methods
 */
/*
var john = {
    //Key Values, properties
    firsnName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane','Mark','Bob','Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function(birthYear) {//this means present of current object
        //return 2018 - birthYear;
        //return 2018 - this.birthYear;
        this.age = 2018 - this.birthYear;
    }
};
//arrarys are also objects because they have method like push and pop or shift unsift
//console.log(john.calcAge(1990));
//console.log(john.calcAge());

//john.age = john.calcAge();
john.calcAge();
console.log(john);
*/

/************************************
 *  Coding challenge 4
 */

//object - full name, mass, height
//method - calculate the BMI. return it and save it 
//log to the console who has highest bmi with full name and bmi
//BMi = mass / height * height; height(meter), mass(kg)

/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    Mass: 80,
    Height: 1.8,
    createFullName: function(){
        this.fullName = this.firstName +', '+ this.lastName;
        //return this.fullName;
    },
    calcBMI: function(){
        this.BMI = this.Mass / (this.Height * this.Height);
        return this.BMI;
    }
};
var mark = {
    firstName: 'Mark',
    lastName: 'Willow',
    Mass: 90,
    Height: 1.9,
    createFullName: function(){
        this.fullName = this.firstName +', '+ this.lastName;
        //return this.fullName;
    },
    calcBMI: function(){
        this.BMI = this.Mass / (this.Height * this.Height);
        return this.BMI;
    }
};

john.createFullName();
mark.createFullName();

if (john.calcBMI() > mark.calcBMI()){//어찌되었든 일단 if조건을 검사하기 때문에 각 object의 calc가 실행되어 BMI가 세팅이 됨. 따라서 다음부터는 부를 필요가 없음. full name의 경우는 조건절에 들어가지 않아서 위에서 따로 호출해줌. 안그러면 안나옴
    console.log(john.fullName+"'s"+' BMI is '+john.BMI + ' and greater than '+ mark.fullName  +"'s BMI of "+mark.BMI+'.');
} else if (mark.BMI > john.BMI) {
    console.log(mark.fullName+"'s"+' BMI is '+ mark.BMI+ ' and greater than ' + john.fullName+"'s BMI of "+john.BMI+'.')
} else {
    console.log(john.fullName + ' and ' + mark.fullName + ' has same BMI.');
}
*/


/************************************
 *  Loops and iteration
 */

/*
for (i = 0; i < 10; i++){
    console.log(i);
}
for (i = 1; i <= 20; i+=2){
    console.log(i);
}

var john = ['John', 'Smith', 1990, 'designer',false];
for(var i =0; i < john.length; i++){
    console.log(john[i]);
}
//while loop
var i = 0;
while(i < john.length) {
    console.log(john[i]);
    i++;
}
*/
// continue and break satemnets
var john = ['John', 'Smith', 1990, 'designer',false];
for(var i =0; i < john.length ; i++){
//for(var i = john.length; i >= 0 ; i--){ //reverse loop 
    //!==, !=와 비슷하지만 좀 더 strict하게 또같은지 확인하는 연산자.
    if(typeof john[i] !== 'string') continue;
    //continue just skip that iteration but continue next iteration
    //if(typeof john[i] !== 'string') break;
    //break exit the loop
    console.log(john[i]);
}