const { admin, db } = require("./config/firebaseConfig"); // Path to your firebaseConfig.js

async function testFirebaseConnection() {
  try {
    const testDoc = db.collection("test").doc("testDoc");
    await testDoc.set({ message: "Firebase connection is successful!" });
    console.log("Test document added successfully.");
    const doc = await testDoc.get();
    console.log("Document data:", doc.data());
  } catch (error) {
    console.error("Error connecting to Firebase:", error);
  }
}

testFirebaseConnection();
