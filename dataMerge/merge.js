//const parser = require('../parser/parse');
const connect = require ('./connect');
const encounters = require('../encounters');

//const connections = parser.burgs();
//const loc = {};
(async () => {
    const trees = await connect.tree();

    //console.log(trees);

    var city = trees[Math.floor(Math.random()* trees.length)].name;

    console.log("encounter:");
     var setting= encounters[0];
     opening = setting.encounter1.openingText.replace("{{cityName}}", city);

    console.log(opening);

    var choices= [setting.encounter1.choice1.choice];
        console.log("\n\n\n");
        console.log(choices[0]);
    



})();
