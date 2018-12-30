/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying, preDice; //gamePlaying state variable

init();
/* replace below block as function init() for avoid duplication

scores = [0,0];
roundScore = 0;
activePlayer = 0;


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

*/

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
    if(gamePlaying){
            // 1. Create a random number
    var dice = Math.floor(Math.random()*6)+1;
    var dice2 = Math.floor(Math.random()*6)+1;
    // 2. Display the dice result
    //매번 이렇게 쿼리 셀렉터를 불러서 엘리먼트에 접근하는 방법도 있지만 
    //변수에 html중 dice요소를 저장해서 좀 더 사용이 쉽게 한다. 상수를 변수로해서 사용하는 것과 같은 이유.
    //document.querySelector('.dice').style.display = 'block';
    //변수 diceDom은 이제 img 엘리먼트 dice를 가리킨다.
    //querySelector에서 id를 받을 때는 #, 클래스를 받을떄는 .
    var diceDom = document.querySelector('.dice'); 
    diceDom.style.display='block';
    var diceDom2 = document.querySelector('.dice2'); 
    diceDom2.style.display='block';
    //diceDom이 img 엘리먼트 이기 때문에 바로 src attribute에 접근해서 세팅하면 됨
    diceDom.src='dice-'+dice+'.png';
    diceDom2.src='dice-'+dice2+'.png';
    // 3. Update the round score only if the rolled number was not 1.
    if(dice !== 1 && dice2 !== 1){ // == more strict(no type coersion). ternary operator (+=, -=, !=)
        //Add score
        if(dice === 6 && preDice ===6){
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
            nextPLayer();
        } else {
            roundScore += dice+dice2;
            preDice = dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }


    } else {
        nextPLayer();
    }
        /*
        //Next player
        roundScore = 0;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        //toggle works like this. If the class that mentioned is already exist remove it, if is not exist add it
        //So you don't need long ass code like below.
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        //if turn over happen hide the last players' dice.
        document.querySelector('.dice').style.display = 'none'; 
        */

        /*
        if(activePlayer !== 0 ){
            activePlayer = 0;
            document.querySelector('.player-1-panel').classList.remove('active');
            document.querySelector('.player-0-panel').classList.add('active');
        } else {
            activePlayer = 1;
            document.querySelector('.player-0-panel').classList.remove('active');
            document.querySelector('.player-1-panel').classList.add('active');
        }  
        */

    }
  


});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
        // Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;
    
        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        
        //var input = document.getElementById('win-score').value;
        var input = document.querySelector('.win-score').value;
        console.log(input);
        var winScore;

        if(input){
            winScore = input;
        } else {
            winScore = 100;
        }
        console.log(winScore);

        // find out the winner for the game
        if(scores[activePlayer] >= winScore){
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            document.querySelector('#name-'+activePlayer).textContent = 'Winner!!';
            //승자가 나오면 버튼을 아예 사라지게 만들 경우
            //document.querySelector('.btn-roll').style.display = 'none'; 
            //document.querySelector('.btn-hold').style.display = 'none'; 
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            nextPLayer();
        }
    }
});

document.querySelector('.btn-new').addEventListener('click', function(){
    init();
});

function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    preDice = 0;

    //use Style method to manipulate the display property of class dice.
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';

    //document.querySelector('#score-0'); 쿼리셀렉터와 다르게 #이 필요하지 않다. 바로 이름만
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('#name-0').textContent = 'PLAYER 1'; 
    document.querySelector('#name-1').textContent = 'PLAYER 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    //승자 결정시 버튼이 사라지게 한 경우에 새 게임을 시작하려면 아래와 같이 다시 살려줘야 한다.
    //document.querySelector('.btn-roll').style.display='inline-block'; 
    //document.querySelector('.btn-hold').style.display='inline-block'; 
    document.querySelector('.player-'+activePlayer+'-panel').classList.add('active');
}

function nextPLayer(){

    roundScore = 0;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    //toggle works like this. If the class that mentioned is already exist remove it, if is not exist add it
    //So you don't need long ass code like below.
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
        
    //if turn over happen hide the last players' dice.
    document.querySelector('.dice').style.display = 'none'; 
    document.querySelector('.dice2').style.display = 'none'; 
    

}

