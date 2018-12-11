/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var score, roundScore, activePlayer, dice;

score = [0,0];
roundScore = 0;
activePlayer = 1;

//dice = Math.floor(Math.random()*6)+1;

//queryselector().textContent => only access plain text. Does not support html component.
//it will use id of the html component.   
//document.querySelector('#current-'+ activePlayer).textContent = dice;

//if you put '<em>'+dice+'</em>' in the textContent it will just print out '<em>' dice value '</em>'
//document.querySelector('#current-'+activePlayer).innerHTML = '<em>'+ dice +'</em>';

//var x = document.querySelector('#score-0').textContent;
//console.log(x);

//use Style method to manipulate the display property of class dice.
document.querySelector('.dice').style.display = 'none';

//document.querySelector('#score-0'); 쿼리셀렉터와 다르게 #이 필요하지 않다. 바로 이름만
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


/*
function btn(){
    //do something
}
*/

//2 ways to add event handling function to event listner
// 1. Using outter function to handle event
//document.querySelector('.btn-roll').addEventListener('click', btn);

// 2. Use annoymous function to handle the event
document.querySelector('.btn-roll').addEventListener('click', function(){

    // 1. Create a random number
    dice = Math.floor(Math.random()*6)+1;

    // 2. Display the dice result
    
    //매번 이렇게 쿼리 셀렉터를 불러서 엘리먼트에 접근하는 방법도 있지만 
    //변수에 html중 dice요소를 저장해서 좀 더 사용이 쉽게 한다. 상수를 변수로해서 사용하는 것과 같은 이유.
    //document.querySelector('.dice').style.display = 'block';
    //변수 diceDom은 이제 img 엘리먼트 dice를 가리킨다.
    var diceDom = document.querySelector('.dice'); 
    diceDom.style.display='block';
    //diceDom이 img 엘리먼트 이기 때문에 바로 src attribute에 접근해서 세팅하면 됨
    diceDom.src='dice-'+dice+'.png';
    // 3. Update the round score only if the rolled number was not 1.
});