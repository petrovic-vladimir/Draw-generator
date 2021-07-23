'use strict'

exports.rankDuplicate = function(players){
    let ranks = [];
    for (const player of players) {
        ranks.push(player.ranking);
    }
    if(new Set(ranks).size !== ranks.length){
        console.log("Teniseri ne mogu deliti isti ranking!!!");
        console.log("Pokusaj ponovo");
        return true
    }
    return false; 
}
exports.emptyInput = function(players){
    for (const player of players) {
        for (const field of Object.values(player)) {
            if(field === null || field === undefined || field === ""){
                console.log('Sva polja moraju biti popunjena');
                console.log("Pokusaj ponovo");
                return true
            }  
        }
    }
    return false; 
}
exports.limitNumOfPlayers = function(N){
   if(N > 64){
       console.log("Premasili ste dozvoljeni broj tenisera");
       console.log("Pokusaj ponovo");
       return true
   }
   if(N < 4){
    console.log("Uneli ste nedovoljan broj tenisera");
    console.log("Pokusaj ponovo");
    return true       
   }
//    if(N % 2 != 0){
//         console.log("Morate uneti paran broj tenisera");
//         console.log("Pokusaj ponovo");
//         return true
//    }
   return false
}
exports.isNumber = function(N){
    if(isNaN(N)){
        console.log("Morate uneti broj u odgovarajuce polje");
        return false;
    }
    if(N.match(/^[0-9]+$/) === null){
        console.log("Morate uneti broj za odgovarajuce polje");
        console.log("Pokusaj ponovo");
        return false
    }
    return true;
 }
