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
    case "Rock":
        switch (computerChoice){
            case "Rock":
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
    case "Paper":
        switch (computerChoice){
            case "Rock":
                console.log("Computer Won");
                ComputerScore += 1;
                console.log(`Computer Score : ${ComputerScore}\n HumanScore : ${HumanScore}`);
                break;
            case "Paper":
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
    case "Scissor":
        switch (computerChoice){
            case "Paper":
                console.log("Please Try Again"); 
                console.log(`Computer Score : ${ComputerScore}\n HumanScore : ${HumanScore}`);
                break;
            case "Rock":
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
    playRound(humanChoice,computerChoice)
    counter++;
}

