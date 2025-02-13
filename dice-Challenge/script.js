

let randomNumber1 = Math.floor(Math.random()*6)+1;

let leftdice = document.getElementById("leftdice");
leftdice.setAttribute("src", "images/dice"+randomNumber1+".png");

let randomNumber2 =Math.floor(Math.random()*6+1);

let rightdice = document.getElementById("rightdice");
rightdice.setAttribute("src", "images/dice"+randomNumber2+".png");

if(randomNumber1>randomNumber2)
    document.querySelector("h1").innerHTML= "Player 1 Wins";

if(randomNumber1<randomNumber2)
    document.querySelector("h1").innerHTML="Player 2 Wins";

if(randomNumber1==randomNumber2)
    document.querySelector("h1").innerHTML ="Draw!!!";