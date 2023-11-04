// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalyticyarn } from "firebase/analytics";

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiPN_k-UtUywNKIG1eOc-d83cLYh4fPmY",
  authDomain: "temps-efb42.firebaseapp.com",
  projectId: "temps-efb42",
  storageBucket: "temps-efb42.appspot.com",
  messagingSenderId: "562853587591",
  appId: "1:562853587591:web:adb30842694592c2f9e622",
  measurementId: "G-ZK9LWHXBLT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const _analytics = getAnalytics(app);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
