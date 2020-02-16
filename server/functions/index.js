const fs = require('fs');
const path = require('path');
const os = require('os');

const { dialogflow, Suggestions, DateTime } = require('actions-on-google');
const functions = require('firebase-functions');
const admin = require('firebase-admin');

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

app.intent('dnd_entry', async (conv, { gameId }) => {
    try {
        let csvFilename = path.join(os.tmpdir(), 'test.csv');
        let jsonFilename = path.join(os.tmpdir(), 'test.json');
        await bucket.file(gameId + '-csv').download({destination: csvFilename});
        await bucket.file(gameId + '-json').download({destination: jsonFilename});

        const routes = JSON.parse(fs.readFileSync(jsonFilename));
        conv.ask(`Your game ID is: ${gameId}`);
        conv.data.pos = 0;
        conv.data.lastResponse = 0;
        doEncounter(conv);
    }
    catch (e) {
        conv.close('Bad Game ID. Please start again.');
    }
});

app.intent('dnd_encounter', (conv, { num }) => {
    if (num >= 1 && num <= 3) {
        doEncounter(conv);
        conv.data.lastResponse = num;
    }
    else {
        conv.ask("You must say option 1, option 2, or option 3");
    }
});

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);
