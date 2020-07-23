/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 50 points on GLOBAL score wins the game

*/

function setFinalScore(){
    var final = document.querySelector("#set").nodeValue;
    finalScore = final;
}
var scores=[0,0], roundScore =0, activePlayer=0, gamePlay, finalScore;

var btn_roll = document.querySelector(".btn-roll");
var btn_hold = document.querySelector(".btn-hold");
var btn_new = document.querySelector(".btn-new");


btn_roll.addEventListener("click", roll);
btn_hold.addEventListener("click", hold);
btn_new.addEventListener("click", init);

function init(){
    var win = document.getElementsByTagName("h3");
    win[0].classList.remove("winner");
    win[1].classList.remove("winner");
    win[0].textContent = "PLAYER 1";
    win[1].textContent = "PLAYER 2";
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlay = true;
    finalScore = 0;
    var score_dis = document.getElementsByClassName("score_display");
    score_dis[0].textContent = 0;
    score_dis[1].textContent = 0;
     var current_dis = document.getElementsByClassName("player-current-score");
     current_dis[0].textContent = 0;
     current_dis[1].textContent = 0;
}

function roll(){
    if(gamePlay){
        var dice = Math.floor(Math.random() * 6) + 1;
        var img = document.querySelector("img");
        var source = "dice-"+ dice +".png" ;
        img.setAttribute("src",source);
        if(dice!==1)
        {
            roundScore +=dice;
            var current_text = document.querySelectorAll(".player-current-score");
            console.log(current_text[activePlayer]);
            current_text[activePlayer].textContent = roundScore;
        }
        else{
            roundScore =0;
            next();
        }
        console.log(roundScore);

    }

}
function hold(){
    if(gamePlay){
        scores[activePlayer] += roundScore;
        var player_score = document.querySelectorAll(".score_display");
        player_score[activePlayer].textContent = scores[activePlayer];
        if(scores[activePlayer]>= 50)
        {

            var win = document.getElementsByTagName("h3");
            win[activePlayer].classList.add("winner");
            win[activePlayer].textContent = "Winner";
            gamePlay= false;
        }
        else{
            next(); 
        }
    }
}
function next()
{
    if(gamePlay){
        if(activePlayer === 1){
            activePlayer =0;
        }
        else{
            activePlayer = 1;
        }
        roundScore = 0;
    
        var next_round = document.querySelectorAll(".player-current-score");
        next_round[0].textContent = 0;
        next_round[1].textContent = 0;
    }
}
