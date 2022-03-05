// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqjFhk7w1rsubd_CpSYxX56j2F4BJT5XI",
  authDomain: "ss-spring22-final-project.firebaseapp.com",
  databaseURL: "https://ss-spring22-final-project-default-rtdb.firebaseio.com",
  projectId: "ss-spring22-final-project",
  storageBucket: "ss-spring22-final-project.appspot.com",
  messagingSenderId: "283114265594",
  appId: "1:283114265594:web:338517462518834076a243"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export { database };
