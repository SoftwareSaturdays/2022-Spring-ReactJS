// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvWv7uETAAQJljfKTuvgp7uT_yNO1cqvA",
  authDomain: "softwaresaturdayss2022.firebaseapp.com",
  databaseURL: "https://softwaresaturdayss2022-default-rtdb.firebaseio.com",
  projectId: "softwaresaturdayss2022",
  storageBucket: "softwaresaturdayss2022.appspot.com",
  messagingSenderId: "1035866140647",
  appId: "1:1035866140647:web:931349e236c639e5da5742"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export { database };