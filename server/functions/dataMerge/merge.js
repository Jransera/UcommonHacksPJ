const pubName = require('../pubNames');
const connect = require ('./connect');
const encounters = require('../encounters');

const getStart = async (trees) => {
    let cty = trees[Math.floor(Math.random()* trees.length)];
    let nNum = Math.floor(Math.random()*encounters.length);
    let setting= encounters[nNum];
    let opening = setting.Event1.openingText;
    let chcs = [];
    let headChoices = [];
    
    for (let i in setting.Event1){
       if (typeof setting.Event1[i] == 'object') {
           chcs.push(setting.Event1[i]);
       }
       else if (typeof setting.Event1[i] == 'string') {
           if (cty[i]) {
               headChoices.push(setting.Event1[i]);
           }
       }
    }

    let hd = headChoices[Math.floor(Math.random()*headChoices.length)];
    if (hd) {
        hd = hd.replace("{{cityName}}", cty.name);
        hd = hd.replace("{{pub}}", pubName[Math.floor(Math.random()*pubName.length)]);
    } else {
        hd = setting.Event1.default.replace("{{cityName}}", cty.name);
        opening = opening.replace("{{pub}}", pubName[Math.floor(Math.random()*pubName.length)]);
        opening = opening.replace("{{cityName}}", cty.name);
    }
    let full = hd.concat(opening);

    return {
        text: full,
        choices: chcs,
        city: cty,
        enNum: nNum,
        event: encounters[nNum].Event1
    };
};

const getChoices = (enNum, event) => {
    let choices = [];

    for (let i in encounters[enNum][event]) {
        if (typeof encounters[enNum][event][i] == 'object') {
            choices.push(encounters[enNum][event][i]);
        }
    }
    return choices;
};

const makeChoice = async (enNum, event, choice, city) => {
    let newEvent = encounters[enNum][choice.next];
    let chcs = getChoices(enNum, newEvent);
    let oldChcs = getChoices(enNum, event);
    //let hd = getHeaders(enNum, event);
    let opening;
    if (oldChcs.length === 0) {
        newEvent = encounters.splice(enNum, 1)[Math.floor(Math.random()*encounters.length)];
    }
    if (chcs.length === 0) {
        let newCity = city.neighbors[Math.floor(Math.random()*city.neighbors.length)];
        opening = encounters[enNum][choice.next].openingText.replace("{{cityName}}", newCity.name);
    } else {
        opening = encounters[enNum][choice.next].openingText.replace("{{cityName}}", city.name);
    }

    return {
        openingText: opening,
        choices: chcs,
        city: newCity
    };
};

/*const getHeaders = (enNum, event) => {
    let head = [];

    for (let i in encounters[enNum][event]) {
        if (typeof encounters[enNum][event][i] == 'string') {
            head.push(encounters[enNum][event][i]);
        }
    }
    head.push(encounters[enNum][event])

    let hd = headChoices[Math.floor(Math.random()*headChoices.length)];
    if (hd) {
        hd = hd.replace("{{cityName}}", cty.name);
    } else {
        hd = setting.Event1.default.replace("{{cityName}}", cty.name);
    }
};*/


// (async () => {
//     let trees = await connect.tree();
//     let obj = await getStart();
//     console.log(obj);
// })();

module.exports.getStart = getStart;
module.exports.makeChoice = makeChoice;
module.exports.getChoices = getChoices;
