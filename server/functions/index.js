const fs = require('fs');
const path = require('path');
const os = require('os');

const { dialogflow, Suggestions, DateTime } = require('actions-on-google');
const functions = require('firebase-functions');
const admin = require('firebase-admin');

const parse = require('./parser/parse');
const connect = require('./dataMerge/connect');
const merge = require('./dataMerge/merge');

admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: 'https://uncommon-dnd-2.firebaseio.com',
    storageBucket: "uncommon-dnd-2.appspot.com"
});

const bucket = admin.storage().bucket();

const app = dialogflow({ debug: true });

const doEncounter = (conv, isStart) => {
    // conv.ask(`Your last response was: ${conv.data.lastResponse}`);
    if (isStart) {
        let trees = data.trees;
        let data = merge.getStart(trees);
        conv.data.fullData = data;
        let txt = data.text + " . Your options are: ";
        data.choices.forEach((choice, index) => {
            txt += " " + (index + 1) + ". " + choice + ". ";
        });
        conv.ask(txt);
    }
    else {
        let num = conv.data.response - 1;
        let fullData = conv.data.fullData;
        let data = merge.makeChoice(fullData.enNum, fullData.event, fullData.choices[num], fullData.city);
        conv.data.fullData = data;
        let txt = data.text + " . Your options are: ";
        data.choices.forEach((choice, index) => {
            txt += " " + (index + 1) + ". " + choice + ". ";
        });
        conv.ask(txt);
    }

    // conv.ask(`This is encounter ${conv.data.pos}. You can do 1, 2, or 3. What do you do?`);
    conv.data.pos++;
};

let data = {};

const doProcessing = async (conv) => {
    data.trees = await connect.tree(conv.data.csvFilename, conv.data.jsonFilename);
    // if (!data.burgs) {
    //     data.trees = await connect.tree(conv.data.csvFilename, conv.data.jsonFilename);
    //     // const routes = await parse.routes(conv.data.csvFilename, conv.data.jsonFilename);
    //     // const burgs = await parse.burgs(conv.data.csvFilename, conv.data.jsonFilename);
    //     // data.routes = routes;
    //     // data.burgs = burgs;
    // }
};

app.intent('dnd_entry', async (conv, { gameId }) => {
    try {
        let csvFilename = path.join(os.tmpdir(), `test${Math.floor(Math.random() * 10000000)}.csv`);
        let jsonFilename = path.join(os.tmpdir(), `test${Math.floor(Math.random() * 10000000)}.json`);
        await bucket.file(gameId + '-csv').download({destination: csvFilename});
        await bucket.file(gameId + '-json').download({destination: jsonFilename});
        conv.data.csvFilename = csvFilename;
        conv.data.jsonFilename = jsonFilename;
        conv.data.pos = 0;
        conv.data.lastResponse = 0;
        conv.ask("Say ready when you are ready");
        doProcessing(conv);
    }
    catch (e) {
        console.log(e);
        conv.close('Bad Game ID. Please start again.');
    }
});

app.intent('dnd_ready', (conv, {}) => {
    try {
        if (data.trees) {
            doEncounter(conv, true);
        }
        else {
            conv.ask("The game is still loading. Say ready when you are ready");
        }
    }
    catch (e) {
        console.log(e);
        conv.close('Something was wrong with your uploaded files. Please reupload them.');
    }
});

app.intent('dnd_encounter', (conv, { num }) => {
    try {
        if (num >= 1 && num <= 3) {
            conv.data.response = num;
            doEncounter(conv, false);
        }
        else {
            conv.ask("You must say option 1, option 2, or option 3");
        }
    }
    catch (e) {
        console.log(e);
        conv.close('Something was wrong with your uploaded files. Please reupload them.');
    }
});

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);
