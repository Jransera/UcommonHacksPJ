const path = require('path');

const admin = require('firebase-admin');

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://uncommon-dnd-2.firebaseio.com',
    storageBucket: "uncommon-dnd-2.appspot.com"
});

const bucket = admin.storage().bucket();

(async () => {
    // const fileName = '2484-json'
    // const tempFilePath = path.join(os.tmpdir(), fileName);
    try {
        await bucket.file('24-json').download({destination: path.join(__dirname, 'result.json')});
    }
    catch (e) {
        console.log(e);
    }
})();