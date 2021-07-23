// 'use strict'

// exports.DrawGenerator = function(tennisPlayers){
    
//     this.numOfPlayers = tennisPlayers.length;
//     this.groupStageA =[];
//     groupStageB:[],
//         numOfPlayers:numOfPlayers,
//         numOfMatches:function(){
//             return this.groupStageA.length + this.groupStageB.length;
//         },

//     };
    
//     // devide players in 2 temporary stages
//     let temp_groupStageA = [];
//     let temp_groupStageB = [];
//     let rankSorted_Players = tennisPlayers.sort((a,b)=>a.ranking > b.ranking ? 1 :-1);

//     for(let i =0; i < Math.round(numOfPlayers/ 2); i++){
//         temp_groupStageA.push(rankSorted_Players.shift());
//         temp_groupStageB.push(rankSorted_Players.shift());
//     }
        
//     // create opponents
//     const createGroupStage = (temp_groupStage,groupStage)=>{
//         if(groupStage !== undefined){
//             for(let i = temp_groupStage.length; i>0; i = i-2){ 
//                 let p1 = temp_groupStage.splice(temp_groupStage[Math.round(Math.random()*temp_groupStage.length)],1);
//                 let p2 = temp_groupStage.splice(temp_groupStage[Math.round(Math.random()*temp_groupStage.length)],1);
//                 groupStage.push([...p1,...p2]);
//             }
//         }        
//     }

//     createGroupStage(temp_groupStageA,matches.groupStageA);
//     createGroupStage(temp_groupStageB,matches.groupStageB);
//     return matches;

// }


