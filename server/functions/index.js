const { dialogflow, Suggestions, DateTime } = require('actions-on-google');
const functions = require('firebase-functions');

const app = dialogflow({ debug: true });

app.intent('my_intent', (conv, { below }) => {
    if (below == 1) {
        conv.close();
    }
    else if (below == 2) {
        conv.followup('example-event-2', {});
    }
});

app.intent('my_intent_2', (conv, { quit }) => {
    if (quit == 1) {
        conv.close();
    }
    else if (quit == 2) {
        conv.followup('example-event-1', {});
    }
});

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);
