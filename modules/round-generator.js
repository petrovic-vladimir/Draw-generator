'use strict'

exports.RoundGenerator = function(){
    
    this.groupStageA_opponents  = [];
    this.groupStageB_opponents  = [];

    this.getNumOfMatches = function(){
        // if(this.groupStageA_opponents.length > 1)
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

    // simulate a game
    this.matchSimulator = ()=>{
        let wA = [];
        let wB = [];
        for (const playerA of this.groupStageA_opponents) {
            wA.push(playerA[Math.floor(Math.random()*playerA.length)]); //get winner randomly  
        }
        for (const playerB of this.groupStageB_opponents) {
            wB.push(playerB[Math.floor(Math.random()*playerB.length)]); //get winner randomly
        }
        return {groupStageA_winners:wA,groupStageB_winners:wB};
        
    }
}


