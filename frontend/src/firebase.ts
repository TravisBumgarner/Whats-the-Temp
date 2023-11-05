import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAiPN_k-UtUywNKIG1eOc-d83cLYh4fPmY",
  authDomain: "temps-efb42.firebaseapp.com",
  projectId: "temps-efb42",
  storageBucket: "temps-efb42.appspot.com",
  messagingSenderId: "562853587591",
  appId: "1:562853587591:web:adb30842694592c2f9e622",
  databaseURL: "temps-efb42.nam5.firebasedatabase.app"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);

