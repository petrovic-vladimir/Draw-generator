/*

Type manual in user input to set tennis players by own.
Every input will go through validation.
Rounds will be generated while players length > 2
All matches will be simulated.

*/

const readlineSync = require("readline-sync");

// load local modules
const { RoundGenerator } = require("./modules/round-generator");
const input_validation = require("./modules/input-validation");
const {errors,questions,textColors} = require("./config.js");
const {printRound,printMatches} = require("./modules/print.js");
const { getResult } = require("./modules/match-result");

const main = () => {
  let tennisPlayers = [];

  const input = readlineSync.question(questions.inputType);

  if(input == 'manual'){
    const N = readlineSync.question(questions.inputNumber);
    
    if(!input_validation.numOfPlayers(N))
    return main();
  
    for (var i = 0; i < N; i++) {
      const tempTennisPlayer = readlineSync.question(questions.inputPlayers);
      const tempTennisPlayerData = tempTennisPlayer.split(",");
      let ranking = parseInt(tempTennisPlayerData[3]);

      // Checking user input (ranking) is it a number
      if(Number.isNaN(ranking) || ranking === 0){
        console.log(errors.rankError);
        return main();
      }
      
      tennisPlayers.push({
        firstName: tempTennisPlayerData[0],
        lastName: tempTennisPlayerData[1],
        country: tempTennisPlayerData[2],
        ranking: ranking,
      });
    }
  }else{
    const jsonFile = require("./tennisPlayers.json");
    tennisPlayers = Object.values(jsonFile);
  }
  /*

    Your program (assignment) should start here...
    Variables N and tennisPlayers are available to you.

    Feel free to create new methods, include new files, and change this project as you wish.

    Code above this comment is used to "standardize" input to the application,
    and should be changed (or built upon) only if you would like to add input validation,
    or if you have an idea that you would like to demonstrate.

    ...Good Luck and Happy Coding...

  */
 
  // If validation does not pass, run app again
  if(input_validation.emptyInput(tennisPlayers) || input_validation.rankDuplicate(tennisPlayers))
  return main(); // recursion

  // sorting by ranking
  let temp_rankSorted_Players = [...tennisPlayers].sort((a,b)=>b.ranking > a.ranking ? 1 :-1);

  // devide players in 2 group stages
  let groupStageA = [];
  let groupStageB = [];

  for(let i =0; i < Math.round(tennisPlayers.length/ 2); i++){ //8
      groupStageA.push(temp_rankSorted_Players.shift());
      if (temp_rankSorted_Players.length !== 0)
      groupStageB.push(temp_rankSorted_Players.shift());
  }

  let roundNumber = 1; // current round

  // simulate every round except final
  while ((groupStageA.length + groupStageB.length) > 2) {
    let round = new RoundGenerator();
    //set opponents for groupStageA
    round.generate(groupStageA,round.groupStageA_opponents);
    //set opponents for groupStageB
    round.generate(groupStageB,round.groupStageB_opponents);
    // print output rounds
    printRound(roundNumber,round.getNumOfMatches());
  
    let roundResult = round.simulator();

    // print output matches
    printMatches([round.groupStageA_opponents,round.groupStageB_opponents]);
    
    let groupStageA_winners = [];
    let groupStageB_winners = [];
    
    for (const winner of roundResult.groupStageA_winners) {
      groupStageA_winners.push(winner.winner);
      console.log(`${winner.winner.lastName} won ${winner.result}`);
    }
    for (const winner of roundResult.groupStageB_winners) {
      groupStageB_winners.push(winner.winner);
      console.log(`${winner.winner.lastName} won ${winner.result}`);
    }
    // printWinners();
    groupStageA =groupStageA_winners;
    groupStageB = groupStageB_winners;
    
    roundNumber++;
  }

  // sorry for spaggeti code :(
  // simulate and print finale
  console.log(textColors.FgRed,'FINAL:');
  let finalists = [groupStageA.concat(groupStageB)];
  printMatches([finalists]);
  let winner = finalists[0][Math.round(Math.random()*1)];
  console.log(textColors.FgYellow,`${winner.firstName[0]}.${winner.lastName} won ${getResult()}`);

  console.log(textColors.FgRed,`WINNER:\n!!! ${winner.firstName[0]}.${winner.lastName} (${winner.country}, ${winner.ranking})) !!!`);
}

main();


// Maybe this is not best way how to do this project, i will gain more experience for better code :)