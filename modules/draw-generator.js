'use strict'

exports.drawGenerator = function(tennisPlayers){

    let numOfPlayers = tennisPlayers.length;
    let groupStageA = [];
    let groupStageB = [];
    let matches   = {
        groupStageA:[],
        groupStageB:[],
        numOfMatches:function(){
            return this.groupStageA.length + this.groupStageB.length;
        },
       
    };
    
    // create 2 group stages
    if(numOfPlayers > 2){
        let rankSorted_Players = tennisPlayers.sort((a,b)=>a.ranking > b.ranking ? 1 :-1);
        for(let i =0; i < Math.round(numOfPlayers / 2); i++){
            groupStageA.push(rankSorted_Players.shift());
            groupStageB.push(rankSorted_Players.shift());
        }
        
    }
    // create opponents for the first round
    for(let i = groupStageA.length; i>0; i = i-2){ 
        let p1 = groupStageA.splice(groupStageA[Math.round(Math.random()*groupStageA.length)],1);
        let p2 = groupStageA.splice(groupStageA[Math.round(Math.random()*groupStageA.length)],1);
        matches.groupStageA.push([...p1,...p2]);
    }
    for(let i = groupStageB.length; i>0; i = i-2){    
        let p1 = groupStageB.splice(groupStageB[Math.round(Math.random()*groupStageB.length)],1);
        let p2 = groupStageB.splice(groupStageB[Math.round(Math.random()*groupStageB.length)],1);
        matches.groupStageB.push([...p1,...p2]);
    }
    
    return matches;
    // console.log(matches.groupStageA);
    // console.log(matches.groupStageB);
    // console.log(matches.groupStageA.length);
    // console.log(matches.groupStageB.length);
    
  
    
    // let recurse = function(m,r){
    //     if(m % 2 == 0){
    //         m =m/2;
    //         r++;
    //         matches.rounds.push(`Round ${r}`);
            
    //         recurse(m,r);
    //     }
        
    // }

    // recurse(matches.numOfMatches(),matches.rounds.length);

}


