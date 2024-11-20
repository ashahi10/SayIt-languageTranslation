const admin = require("firebase-admin");
const path = require("path");

// Path to the service account key JSON file
const serviceAccount = require(path.resolve(__dirname, "service-account.json"));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://SayIt.firebaseio.com", // Replace with your actual database name
});

const db = admin.firestore();

module.exports = { admin, db };
