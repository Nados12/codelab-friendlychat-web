// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5NVPF8vdAA49g3v6bvpyJWMaaKcHrdeU",
  authDomain: "friendlychat-ed1f4.firebaseapp.com",
  projectId: "friendlychat-ed1f4",
  storageBucket: "friendlychat-ed1f4.appspot.com",
  messagingSenderId: "864335557991",
  appId: "1:864335557991:web:50f55519d6f3e9b2ea6bc2",
  measurementId: "G-2BL94D4WYG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
