'use strict'

exports.DrawGenerator = function(tennisPlayers){
    
    this.numOfPlayers = tennisPlayers.length;
    this.groupStageA  = [];
    this.groupStageB  = [],

    this.numOfMatches = function(){
        return this.groupStageA.length + this.groupStageB.length;
    }

    // create opponents
    this.createGroupStage = (temp_groupStage,groupStage)=>{
        if(groupStage !== undefined){
            for(let i = temp_groupStage.length; i>0; i = i-2){ 
                let p1 = temp_groupStage.splice(temp_groupStage[Math.round(Math.random()*temp_groupStage.length)],1);
                let p2 = temp_groupStage.splice(temp_groupStage[Math.round(Math.random()*temp_groupStage.length)],1);
                groupStage.push([...p1,...p2]);
            }
        }        
    }

}


