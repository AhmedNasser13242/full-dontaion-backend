var admin = require("firebase-admin");

var serviceAccount = require("../config/fbServiceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    "https://ecommerce-72c8f-default-rtdb.asia-southeast1.firebasedatabase.app",
});
module.exports = admin;
