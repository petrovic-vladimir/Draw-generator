const readlineSync = require("readline-sync");
const { DrawGenerator } = require("./modules/draw-generator");
const input_validation = require("./modules/input-validation");

const main = () => {
  const N = readlineSync.question("Unesite broj tenisera (min 4 - max 64):");
  console.log(N);
  if(!input_validation.isNumber(N) || input_validation.limitNumOfPlayers(N))
  return main();
  
  const tennisPlayers = [];

  for (var i = 0; i < N; i++) {
    const tempTennisPlayer = readlineSync.question(
      "Unesite tenisera u obliku [ime],[prezime],[drzava],[ranking]:"
    );
    
    const tempTennisPlayerData = tempTennisPlayer.split(",");

    if(!input_validation.isNumber(tempTennisPlayerData[3]))
    return main();

    tennisPlayers.push({
      firstName: tempTennisPlayerData[0],
      lastName: tempTennisPlayerData[1],
      country: tempTennisPlayerData[2],
      ranking: parseInt(tempTennisPlayerData[3]),
    });
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



  const numOfPlayers = tennisPlayers.length;
  let temp_groupStageA = [];
  let temp_groupStageB = [];
  let rankSorted_Players = tennisPlayers.sort((a,b)=>a.ranking > b.ranking ? 1 :-1);

  for(let i =0; i < Math.round(numOfPlayers/ 2); i++){
      temp_groupStageA.push(rankSorted_Players.shift());
      temp_groupStageB.push(rankSorted_Players.shift());
  }
  
  const generator = new DrawGenerator(tennisPlayers);
  generator.createGroupStage(temp_groupStageA,generator.groupStageA);
  generator.createGroupStage(temp_groupStageB,generator.groupStageB);
  console.log(generator);
  console.log(generator.numOfMatches());


 // Match Simulation
 // code here

 
}

main();
