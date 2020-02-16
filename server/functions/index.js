const { dialogflow } = require('actions-on-google');
const functions = require('firebase-functions');

const app = dialogflow({ debug: true });

app.intent('my_intent', (conv, { below }) => {
    conv.close(`Getting a number below ${below}`);
});

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);
