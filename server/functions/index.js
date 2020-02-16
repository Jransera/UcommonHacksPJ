const { dialogflow, Suggestions, DateTime } = require('actions-on-google');
const functions = require('firebase-functions');

const app = dialogflow({ debug: true });

const doEncounter = (conv) => {
    conv.ask(`Your last response was: ${conv.data.lastResponse}`);
    conv.ask(`This is encounter ${conv.data.pos}. You can do 1, 2, or 3. What do you do?`);
    conv.data.pos++;
};

app.intent('dnd_entry', (conv, {}) => {
    conv.data.pos = 0;
    conv.data.lastResponse = 0;
    doEncounter(conv);
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
