const connect = require ('./connect');
const encounters = require('../encounters');

const getStart = async () => {
    let trees = await connect.tree();
    let cty = trees[Math.floor(Math.random()* trees.length)];
    let nNum = Math.floor(Math.random()*encounters.length);
    let setting= encounters[nNum];
    let opening = setting.Event1.openingText.replace("{{cityName}}", cty.name);
    let chcs =[];
    
    for (let i in setting.Event1){
       if (typeof setting.Event1[i] == 'object') {
           if (setting.Event1[i] !== undefined) {
               chcs.push(setting.Event1[i]);
           }
       }
    }

    return {
        openingText: opening,
        choices: chcs,
        city: cty,
        enNum: nNum,
        event: encounters[nNum].Event1
    };
};

const makeChoice = async (enNum, event, choice, city) => {
    let newEvent = encounters[enNum][choice.next];
    let chcs = getChoices(enNum, newEvent);
    let oldChcs = getChoices(enNum, event);
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

const getChoices = (enNum, event) => {
    let choices = [];

    for (let i in encounters[enNum][event]){
        if (typeof encounters[enNum][event][i] == 'object') {
            if (encounters[enNum][event][i] !== undefined) {
                choices.push(encounters[enNum].event[i]);
            }
        }
    }
    return choices;
};
