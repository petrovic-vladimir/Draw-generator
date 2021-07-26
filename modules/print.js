const {textColors} = require("../config.js");

exports.printRound = function(roundNumber,numOfMatches){
    switch (numOfMatches) {
        case 4:
          console.log(textColors.FgMagenta,`Round${roundNumber} / Quartfinals:`);
          break;
        case 2:
          console.log(textColors.FgYellow,`Round${roundNumber} / Semifinals:`);
          break;
        default:
          console.log(`Round${roundNumber}`);
          break;
      }
}

exports.printMatches= (groupStages)=>{
    let matchNumber = 0;
    let wildCard = [];

    for (const groupStage of groupStages) {
        groupStage.forEach((opp,i)=>{
            if(typeof opp[1] != "undefined"){
                matchNumber++;
                console.log(textColors.FgWhite,`${matchNumber}. ${opp[0].firstName[0]}. ${opp[0].lastName} (${opp[0].country}, ${opp[0].ranking})  VS  ${opp[1].firstName[0]}. ${opp[1].lastName} (${opp[1].country}, ${opp[1].ranking})`);               
            }
            // else{
            //     wildCard.push(opp[0])
            // }
            
        });
    }
    for (const wild of wildCard) {
        console.log(`(WildCard:${wild.firstName[0]}. ${wild.lastName} (${wild.country}, ${wild.ranking}))`);
    }
}

exports.printFinale = function(finalists){
    console.log(`${finalists[0].firstName[0]}. ${finalists[0].lastName} (${finalists[0].country}, ${finalists[0].ranking})  VS  ${finalists.firstName[1]}. ${finalists[1].lastName} (${finalists[1].country}, ${finalists[1].ranking})`);
}