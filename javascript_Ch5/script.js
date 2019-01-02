// Function consturctor(blue print way of creating object)
/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

//Use Capital Letter start for function constructor variable
var Person = function(name, yearOfBirth, job) {
    this.name = name; //if we do not create new empty object with New keyword, this keyword will point global object.
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    // 이렇게 constructor에서 함수를 선언하게 되면 오브젝트 생성시마다 메서드를 포함하는 오브젝트가 생성되게 되고 이는 낭비.
      //  this.calculateAge = function(){
       // console.log(2016 - this.yearOfBirth);
    //}
}

Person.prototype.calculateAge = function(){
    console.log(2016 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';
// Instanciation: Using Keyword New to  create brand new empty object, then using constructor to set the attributes
// if we do not pass the argument to the constructor it will create an object with undefined variables.
var john = new Person('John',1990,'teacher');
var jane = new Person('Jane',1969,'designer');
var mark = new Person('Mark',1948,'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

john.lastName = 'Park'; //Proto 변수를 바꾸기 가능
console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/

// Object.create
/*
var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'john';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto,
{
    name: { value: 'Jane'},
    yearOfBirth: { value: 1969},
    job: { value: 'desiner'}

});
*/

// Primitives vs Objects
// Primitives hold the values, Objects variable hold the reference that point the real objects
// Pass value or Reference
/*
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

var obj1 = {
    name: 'john',
    age: 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

// Functions
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'LIsbon'
};

function change(a, b){
    a = 30;
    b.city = 'San Francisco';
}// No matter how you change the value of a it does not affect the value of variable age, cause it is primitive type.
// However b is an object variable which represent the reference that points oput the object so city of 
// Object variable obj has changed into San Francisco.
change(age, obj);

console.log(age);
console.log(obj.city);
*/

///
// Passing functions as arguments
//Furst Class function
/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn){
    var arrRes = [];
    for(var i = 0; i < arr.length ; i++){
       arrRes.push(fn(arr[i]));
    }
    return arrRes;
}
//Only one task function = callback function
function calcAge(el){
    return 2016 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
    
}

var ages = arrayCalc(years, calcAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);
console.log(ages);
console.log(fullAges);
console.log(rates);
*/

////
// Functions returning functions
// These are possible because functions in javascript are all firstclass function also an object
/*
function interviewQuestion(job) { //Generic function
    if (job === 'designer') {
        return function(name){ //annoymous function
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function (name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}
//Two different way to use generic function
var teacherQuestion = interviewQuestion('teacher'); //Specific function orginated from generic function
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('John');
designerQuestion('Mark');
designerQuestion('Jane');
// first it reach to the Generic function with first arguments then 
// it will reach further into inner annnoymous function with the second argument
interviewQuestion('teacher')('Mark');

*/

///
//IIFE - Immediately invoked function expressions
//
/*
function game () {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();

//functino을 가로안(Parentheses)에 싸주면 익스프레션으로 안보기 떄문에 빈 함수를 만들 수 있다. 
//이렇게 하면 내부 데이터를 볼 수가 없다. data privacy purpose
//다른 global variable과 충돌 없이 사용할 수 있다. 
// modularity
//이것이 IIFE pattern
(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);

}
)();

(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);

})(5); //goodLuck에다가 10에 5을 넣고 시작함.
*/

///
// Closures
//
/*
function retirement (retirementAge) {
    var a = ' years left until retirement.';
    return function (yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    } 
}

var retirementUS = retirement(66); //binding가 비슷하여 이후에 retirementUS에 새로운 retirementAge와 나이를 argument로 넘겨줘도 retirementAge는 66으로 고정. 새로 할당하는 방법밖에 없음
//retirementUS(1990);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

//retirementGermany(1990);
//etirementIceland(1990);
//retirementUS(1990);

/*
function interviewQuestion(job) { //Generic function
    if (job === 'designer') {
        return function(name){ //annoymous function
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function (name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}
*/
/*
//위와 다르게 Closure를 사용하면 function 구조는 한번만 쓰면 됨. 나머지는 들어오는 인스턴스에 따라 바뀜.
function interviewQuestion(job) {
    return function(name) {
        if (job === 'designer') {
            console.log(name + ', can you please explain what UX design is?');
        } else if (job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?');
        } else {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

interviewQuestion('designer')('Mark');

var designerQuestion = interviewQuestion('designer');
var teacherQuestion = interviewQuestion('teacher');
var Question = interviewQuestion();

designerQuestion('John');
teacherQuestion('John');
Question('John');
*/


////
// Bind, call and apply
//
/*

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and Gentleman! I\'m '+ this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.' );
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I \'m  ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + this.timeOfDay );
        }
    }
}

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

//john.presentation('formal', 'morning');
//call use this as an argument by default. If we put emily into call then this is replaced by emily
// and the value of name and age will be replaced with emily's name and age
//john.presentation.call(emily, 'friendly', 'afternoon');

//similar way is using apply
//john.presentation.apply(emily, ['friendly', 'afternoon']);

//bind does not call the function immediately instead it allows us to preset the argument
//preset with the another value to the another object's function 
var johnFriendly = john.presentation.bind(john, 'friendly');
//johnFriendly('Morning');

var emilyFormal = john.presentation.bind(emily,'formal');
//emilyFormal('Dinner');

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn){
    var arrRes = [];
    for(var i = 0; i < arr.length ; i++){
       arrRes.push(fn(arr[i]));
    }
    return arrRes;
}
//Only one task function = callback function
function calcAge(el){
    return 2016 - el;
}

function isFullAge(limit, el) {
    console.log(limit);
    return el >= limit;
    
}

var ages = arrayCalc(years, calcAge);
// arrayCalc는 array와 function을 받아서 function을 arrary의 값들로 수행한 리턴값을 배열로 저장해서 리턴해줌
// isFullAge는 limit와 들어온 나이로 fullAge 여부를 판단하는데 그것을 bind로 default this로 넣고 limit를 20으로 preset해줌
// 기존의 isFullAge에서 limit부분만 커스터마이징해서 결과를 specific하게 바꿈
//var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));

var fullKor = isFullAge.bind(this, 22);
console.log(fullKor(24,15)); 
//this.limit을 22로 bind했기 때문에, 
//fullKor에 limit을 더이상 받지 않는다. 저렇게 하면 true가 나오는데 앞에 24를 el로 받고 뒤의 15는 무시한다.


//var fulljj = isFullAge(18,22);
//console.log(fulljj);
//console.log(ages);
//console.log(fullJapan);

*/

///
// Conding Challenge

/*
    1. Build a function constructor called Question to describe a question. A question should include :
    a) question itselft
    b) the answer from which the player can choose the correct one (choose an adequate data strcucture here, arrary, object, etc)
    c) correct answer (I would use a number for this)

    2. Create a couple of question using the constructor 

    3. store them all inside an arrary

    4. Select one random question and log it on the console, together with the possible answers (each question should have a number)
    (Hint: write a method for the question objects for this task).

    5. Use the 'prompt' function to ask the user for the correct answer. the user should input the number of the correct answer such as you displayed 
    it on Task 4.

    6. Check if the answer is correct and print to the console whether the answer is correct or not (hint: write another methond for this)

    7. Support this code would be a plugin for other programmers to use in their code. So make sure thqat all your code is private and does not 
    not interfere with the other programmers code (hint: we learned a special techinque to do exactly that)

Expert level

    8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right
        after displaying the result).

    9. Be caferul: after Task 8, the game literally never ends,. So include the optino to quit the game if the user writes 'exit' instead of the answer.
    In this case, DON't call the function from task 8.

    10.  Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score ( Hint: I'm going to use the 
    power of clousres for this, but you don't have to, just do this with the tools you feel more confortable at this point)

    11. Display the score in the console. Use yet another method for this.
    
*/

(function (){ //IIFE
    // 표현 방식이 다르지만 같은 consturctor function.
    // Question = function() {}
    var Question = function(question, answerChoice, crrtAnswer) {

        this.question = question;
        this.answerChoice = answerChoice;
        this.crrtAnswer = crrtAnswer;

    }

    Question.prototype.displayQuestion = function() {
        console.log(this.question);
        //console.log(this.answerChoice);
        //배열을 그대로 log로 찍으면 보기가 별로 안 좋으니 for문으로 하나씩
        for (var i = 0; i < this.answerChoice.length; i++) {
            console.log(this.answerChoice[i]);
        }

    }

    Question.prototype.isCorrectAnswer = function(userAnsw, callback) { // Pass the "trackscore function" as an argument
        //var bullsEyeCount;
        //if (this.crrtAnswer == userAnsw) { 틀린것은 전여 아니지만 읽을 때 의미상 유저의 답이 정답과 같으면이 더 와닿음
        if (userAnsw == this.crrtAnswer) { 
            console.log('Congraturation!! You got the right answer. Good Job');
            bullsEyeCount = callback(true);
            
        } else {
            console.log('Sorry~ Wrong answer!');
            bullsEyeCount = callback(false);
        }
        this.displayScore(bullsEyeCount);
    }

    Question.prototype.displayScore = function(score) { //이걸 굳이 프로토타입으로 해야하는지는 잘 모르겠음

        console.log('================================ Your Score so far: ' + score + '====================================');

    }

    function score() { //Closure를 구현하기 위해서 return을 함수로 하도록하여 score함수를 변수에 전달하고 이후에 변수처럼 넘기고 받으면서 사용이 가능하다. 또한 local variable인 bullsEyeCount가 Clousure특성에 의해서 계속 사용가능하다.
        var bullsEyeCount = 0;
        return function(correct) {
            if (correct){
                bullsEyeCount++;
            }
            return bullsEyeCount;
        }
    }

    function nextQuestion () {
        var next;
        next = Math.round(Math.random() * (questions.length - 1));
        questions[next].displayQuestion();    
        userAnswer = prompt('Select the correct answer for the question \n (type "exit" if you want to quit)');
        if (userAnswer != 'exit' ) {
            questions[next].isCorrectAnswer(userAnswer, trackscore);
            nextQuestion();
        }
    }

    var itQuestion = new Question( 'What is the most common language in web development ?', choice = ['1. Java', '2. C++', '3. javaScrpt'], 3 );
    var entQuestion = new Question( 'Who acting Ironman in the movie "Ironman" ?', choice = ['1. Rober Downy Jr.', '2. Eminem', '3. Tommy Lee Jones'], 1 );
    var sportQuestion = new Question( 'Who hit the most homeruns in MLB history ?', choice = ['1. Mark Mcquire', '2. Hank Aaron', '3. Berry Bonz'], 3 );
    var gameQuestion = new Question( 'What is the GOTY of year 2017 ?', choice = ['1. League Of Legends', '2. The Legend of Zelda: Breath of the Wild', '3. OverWatch'], 2 );    
    var questions = [itQuestion, entQuestion, sportQuestion, gameQuestion];
    //Closure
    var trackscore = score();    
    
        //var gameStatus, userAnswer, nextQuestion, bullsEyeCount;

    nextQuestion();

    /* 틀린것은 없으나 모든 것을 모듈화 하여 타인과 협업을 위해서 위와 같이 수정함

        while(true) {
            nextQuestion = Math.round(Math.random() * (questions.length - 1));
            //var n = Math.floor(Math.random() * questions.length); 버리든 올리든 똑같음
            questions[nextQuestion].displayQuestion();    
            //var answer = parseInt(prompt('Please select the correct answer.')); 강사는 parseInt사용함. 결국 같음
            userAnswer = prompt('Select the correct answer for the question');
            gameStatus = userAnswer;
            if(gameStatus === 'exit'){
                break;
            }
            var isCorrect = questions[nextQuestion].isCorrectAnswer(userAnswer);
            if (isCorrect == true) bullsEyeCount++; 
            

            console.log('================================ Your Score so far: ' + bullsEyeCount + '====================================');
            
        }
    */
    
})();










