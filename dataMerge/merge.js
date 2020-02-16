//const parser = require('../parser/parse');
const connect = require ('./connect');
const encounters = require('../encounters');

//const connections = parser.burgs();
//const loc = {};

(async () => {
    const trees = await connect.tree();

    //console.log(trees);

    let city = trees[Math.floor(Math.random()* trees.length)].name;

    console.log("encounter:");
    let setting= encounters[0];
    let opening = setting.encounter1.openingText.replace("{{cityName}}", city);

    console.log(opening);
    
    let choices =[];
    
    for (let i in setting.encounter1){
       if (typeof setting.encounter1[i] == 'object') {
           if (setting.encounter1[i] !== undefined) {
               choices.push(setting.encounter1[i]);
           }
       }
    }
    
        console.log("\n");
        for(let x = 0; x < choices.length; x++)
        {
            console.log(choices[x].choice);
        }



})();
