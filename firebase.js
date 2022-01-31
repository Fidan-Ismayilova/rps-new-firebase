// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdmEwA646RM4IHRNapj6VXULty0A4WkGo",
  authDomain: "rps-game-a843f.firebaseapp.com",
  databaseURL: "https://rps-game-a843f-default-rtdb.firebaseio.com",
  projectId: "rps-game-a843f",
  storageBucket: "rps-game-a843f.appspot.com",
  messagingSenderId: "293727123010",
  appId: "1:293727123010:web:8b2d23d067b97879c61fdb",
  measurementId: "G-FSN7LQERX5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);