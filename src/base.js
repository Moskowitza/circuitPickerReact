import Rebase from "re-base";
import firebase from "firebase";

require("dotenv").config();

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  databaseURL: process.env.DATABASEURL
});
const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
