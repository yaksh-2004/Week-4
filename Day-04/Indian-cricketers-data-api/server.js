
const fs = require("fs");
const odiPlayers = JSON.parse(fs.readFileSync("odiPlayers.json"));
const testPlayers = JSON.parse(fs.readFileSync("testPlayers.json"));

function getPlayer(name,format){
    let playerList;
    if(format==='odi'){
        playerList=odiPlayers;
    }
    else if(format==='test'){
        playerList=testPlayers;
    }
    else{
        return null;
    }
    for(let player of playerList){
       if(player.Name.toLowerCase()===name.toLowerCase()){
        return player;
       }
    }
    return null;
}
module.exports={getPlayer};
