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

    if (!hd) {
        hd = setting.Event1.default;
    }
    let full = hd.concat(opening);
    full = full.replace("{{cityName}}", cty.name);
    full = full.replace("{{pub}}", pubName[Math.floor(Math.random()*pubName.length)]);

    return {
        text: full,
        choices: chcs,
        city: cty,
        enNum: nNum,
        event: encounters[nNum].Event1
    };
};

const makeChoice = async (nNum, event, choice, city, trees) => {
    let newEvent = encounters[nNum][choice.next];
    if (!newEvent) {
        return getStart(trees);
    }
    let chcs = getChoices(nNum, newEvent);
    let oldChcs = getChoices(nNum, event);
    let hdChcs = getHeaders(nNum, event, city);
    let hd = hdChcs[Math.floor(Math.random()*hdChcs.length)];
    if (!hd) {
        if (event.default) {
            hd = event.default;
        } else {
            hd = '';
        }
    }
    if (oldChcs.length === 0) {
        newEvent = encounters.splice(nNum, 1)[Math.floor(Math.random()*encounters.length)];
    }
    if (chcs.length === 0) {
        return getStart(trees);
        // if (city.neighbors.length > 0) {
        //     city = city.neighbors[Math.floor(Math.random() * city.neighbors.length)];
        // }
    }
    let opening = newEvent.openingText;
    let full = hd.concat(opening);
    full = full.replace("{{cityName}}", city.name);
    full = full.replace("{{pub}}", pubName[Math.floor(Math.random()*pubName.length)]);

    return {
        text: full,
        choices: chcs,
        city: city,
        enNum: nNum,
        event: newEvent
    };
};

const getChoices = (enNum, event) => {
    let choices = [];

    for (let i in encounters[enNum]) {
        if (typeof encounters[enNum][i] == 'object') {
            choices.push(encounters[enNum][i]);
        }
    }
    return choices;
};

const getHeaders = (enNum, event, city) => {
    let head = [];
    let setting = encounters[enNum];

    for (let i in encounters[enNum][event]) {
        if (typeof encounters[enNum][event][i] == 'string') {
            head.push(encounters[enNum][event][i]);
        }
    }
    head.push(encounters[enNum][event]);

    let hd = head[Math.floor(Math.random()*head.length)];
    if (hd) {
        hd = hd.replace("{{cityName}}", city.name);
    } else {
        hd = setting.Event1.default.replace("{{cityName}}", city.name);
    }
    return hd;
};


// (async () => {
//     let trees = await connect.tree();
//     let obj = await getStart();
//     console.log(obj);
//})();

module.exports.getStart = getStart;
module.exports.makeChoice = makeChoice;
module.exports.getChoices = getChoices;
