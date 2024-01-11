// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: process.env.FIREBASE,

  authDomain: "blog-app-52066.firebaseapp.com",

  projectId: "blog-app-52066",

  storageBucket: "blog-app-52066.appspot.com",

  messagingSenderId: "664170990429",

  appId: "1:664170990429:web:9a397d47a8838ef03936b4"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);