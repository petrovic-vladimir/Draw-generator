'use strict'

const { getResult } = require("./match-result");

exports.RoundGenerator = function(){
    
    this.groupStageA_opponents  = [];
    this.groupStageB_opponents  = [];

    this.getNumOfMatches = function(){
        return this.groupStageA_opponents.length + this.groupStageB_opponents.length;
    }

    // create opponents
    this.generate = (temp_groupStage,groupStage)=>{
        let l = temp_groupStage.length;
        for(let i = 0; i<l; i = i+2){
            let p1 = temp_groupStage.splice(Math.random()*temp_groupStage.length,1);
            let p2 = temp_groupStage.splice(Math.random()*temp_groupStage.length,1);
            
            groupStage.push([...p1,...p2]);
        }     
    }

    this.simulator = ()=>{
        let wA = [];
        let wB = [];

        for (const playerA of this.groupStageA_opponents) {
            wA.push({
                winner:playerA[Math.floor(Math.random()*playerA.length)], //get winner randomly  
                result: getResult() //get result randomly
            }); 
        }
        for (const playerB of this.groupStageB_opponents) {
            wB.push({
                winner:playerB[Math.floor(Math.random()*playerB.length)], //get winner randomly  
                result: getResult() //get result randomly
            }); 
        }
        return {groupStageA_winners:wA,groupStageB_winners:wB};
        
    }
}


