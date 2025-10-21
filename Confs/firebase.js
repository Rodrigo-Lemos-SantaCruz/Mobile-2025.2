// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLvHZ0J38Pldj6AMll1gxbKcarh1U_Q9g",
  authDomain: "ads2025-c3a1f.firebaseapp.com",
  projectId: "ads2025-c3a1f",
  storageBucket: "ads2025-c3a1f.firebasestorage.app",
  messagingSenderId: "343425615225",
  appId: "1:343425615225:web:e35a4f229b85430fc2dba8",
  measurementId: "G-W61EK0EEDC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export default app