const fs = require('fs');
const path = require('path');
const os = require('os');

const { dialogflow, Suggestions, DateTime } = require('actions-on-google');
const functions = require('firebase-functions');
const admin = require('firebase-admin');

const parse = require('./parser/parse');

admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: 'https://uncommon-dnd-2.firebaseio.com',
    storageBucket: "uncommon-dnd-2.appspot.com"
});

const bucket = admin.storage().bucket();

const app = dialogflow({ debug: true });

const doEncounter = (conv) => {
    // conv.ask(`Your last response was: ${conv.data.lastResponse}`);
    conv.ask(`This is encounter ${conv.data.pos}. You can do 1, 2, or 3. What do you do?`);
    conv.data.pos++;
};

const doProcessing = async (conv) => {
    if (!conv.data.burgs) {
        const routes = await parse.routes(conv.data.csvFilename, conv.data.jsonFilename);
        const burgs = await parse.burgs(conv.data.csvFilename, conv.data.jsonFilename);
        conv.data.routes = routes;
        conv.data.burgs = burgs;
    }
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
        doEncounter(conv);

        doProcessing(conv);
    }
    catch (e) {
        console.log(e);
        conv.close('Bad Game ID. Please start again.');
    }
});

app.intent('dnd_encounter', async (conv, { num }) => {
    try {
        if (num >= 1 && num <= 3) {
            conv.ask(conv.data.routes.type);
            doEncounter(conv);
            conv.data.lastResponse = num;
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
