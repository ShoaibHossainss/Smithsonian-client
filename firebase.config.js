// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWgwWhEz9u7LflImdPfRJdRhBNRLHCiFI",
  authDomain: "assignment-10-66e1f.firebaseapp.com",
  projectId: "assignment-10-66e1f",
  storageBucket: "assignment-10-66e1f.appspot.com",
  messagingSenderId: "787991732318",
  appId: "1:787991732318:web:795d751b0cbf1d7ca694cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth