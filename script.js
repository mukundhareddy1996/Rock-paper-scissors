"use strict";

let HumanScore=0;
let ComputerScore=0;

function getComputerChoice(){
    let value = Math.random();
    // console.log(value);
    value = ChoosevalueBasedonRandomValueForComputer(value);
    console.log(`Computer selected : ${value}`);
    return value;
}

function ChoosevalueBasedonRandomValueForComputer(value){
    if(value >0.6){
        return "Scissor";
    }else if (value <0.4){
        return "Rock";
    }else{
        return "Paper";
    }
}

function getHumanChoice(){
    let value = prompt("Which one you want to go ahead with?")
    console.log(`You Entered : ${value}`);
    return value;
}

function playRound(humanChoice, computerChoice){
    switch (humanChoice){
    case "rock":
        switch (computerChoice){
            case "rock":
                console.log("Please Try Again"); 
                console.log(`Computer Score : ${ComputerScore}\n HumanScore : ${HumanScore}`);
                break;
            default :
                console.log("You Won");
                HumanScore += 1;
                console.log(`Computer Score : ${ComputerScore} \n HumanScore : ${HumanScore}`);
                break;
        }
        break;
    case "paper":
        switch (computerChoice){
            case "rock":
                console.log("Computer Won");
                ComputerScore += 1;
                console.log(`Computer Score : ${ComputerScore}\n HumanScore : ${HumanScore}`);
                break;
            case "paper":
                console.log("Please Try Again"); 
                console.log(`Computer Score : ${ComputerScore}\n HumanScore : ${HumanScore}`);
                break;
            default:
                console.log("You Won");
                HumanScore += 1;
                console.log(`Computer Score : ${ComputerScore}\n HumanScore : ${HumanScore}`);
                break;
        }
        break;
    case "scissor":
        switch (computerChoice){
            case "paper":
                console.log("Please Try Again"); 
                console.log(`Computer Score : ${ComputerScore}\n HumanScore : ${HumanScore}`);
                break;
            case "rock":
                console.log("Computer Won");
                ComputerScore += 1;
                console.log(`Computer Score : ${ComputerScore}\n HumanScore : ${HumanScore}`);
                break;
            default:
                console.log("You Won");
                HumanScore += 1;
                console.log(`Computer Score : ${ComputerScore}\n HumanScore : ${HumanScore}`);
                break;
        }
        break;
    default:
            console.log("please try again")
    }
}

let counter =0;
while (counter<5){
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice.toLowerCase(),computerChoice.toLowerCase())
    counter++;
}

if (ComputerScore > HumanScore ){
    alert("Computer Won");
}else if(ComputerScore < HumanScore){
    alert("You won");
}else{
    alert("Match Tied, please play")
}

