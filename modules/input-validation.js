'use strict'

const { errors } = require("../config");

exports.rankDuplicate = function(players){
    let ranks = [];
    for (const player of players) {
        ranks.push(player.ranking);
    }
    if(new Set(ranks).size !== ranks.length){
        console.log(errors.rankingPositions);
        return true
    }
    return false; 
}
exports.emptyInput = function(players){
    for (const player of players) {
        for (const field of Object.values(player)) {
            if(field === null || field === undefined || field === ""){
                console.log(errors.fillAllFields);
                return true
            }  
        }
    }
    return false; 
}
exports.numOfPlayers = function(N){
   
    if(N.match(/^[0-9]+$/) === null){
        
        console.log(errors.fieldNumberError);
        return false
    }
    if(N < 4){
        console.log(errors.underLimitNumber);
        return false       
    }
    if(N > 64){
        console.log(errors.overLimitNumber);
        return false
    }

    return true;
}
