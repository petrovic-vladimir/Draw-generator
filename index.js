const readlineSync = require("readline-sync");
const { drawGenerator } = require("./modules/draw-generator");
const main = () => {
  const N = readlineSync.question("Unesite broj tenisera (N):");

  const tennisPlayers = [];

  for (var i = 0; i < N; i++) {
    const tempTennisPlayer = readlineSync.question(
      "Unesite tenisera u obliku [ime],[prezime],[drzava],[ranking]:"
    );

    const tempTennisPlayerData = tempTennisPlayer.split(",");

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

  
 const draw = drawGenerator(tennisPlayers);
 console.log(draw);
 
}
main();
