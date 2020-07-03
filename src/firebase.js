import firebase from "firebase";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmpdnPOICgFR79tTiSXZDiVgAQ0bCKKOc",
  authDomain: "recipe-app-92e0c.firebaseapp.com",
  databaseURL: "https://recipe-app-92e0c.firebaseio.com",
  projectId: "recipe-app-92e0c",
  storageBucket: "recipe-app-92e0c.appspot.com",
  messagingSenderId: "1094717618190",
  appId: "1:1094717618190:web:71d554fff14af6041d645f",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const providers = {
  google: new firebase.auth.GoogleAuthProvider(),
};
export const firestore = firebase.firestore();

export default firebase;
