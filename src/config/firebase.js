// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhaMp2rNar_ORvJNRDw0BULC7swgYHHXg",
  authDomain: "facebook-clone-ad191.firebaseapp.com",
  projectId: "facebook-clone-ad191",
  storageBucket: "facebook-clone-ad191.appspot.com",
  messagingSenderId: "385114088466",
  appId: "1:385114088466:web:8b06989374c2d3768664cb",
  measurementId: "G-N2LNG440W0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);

export  const storage = getStorage(app);


 